import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { CountryData, ComputeType } from "../types/map";
import { mapData } from "../data/mapData";
import worldCountries from "../data/world-countries.json";
import { aseanGovernanceData, aseanCountryMapping } from "../data/aseanGovernance";
import GovernanceTooltip from "./GovernanceTooltip";

interface InteractiveMapProps {
  visibleLayers: Record<ComputeType, boolean>;
  filteredCountries?: CountryData[];
  selectedCountry?: CountryData | null;
  onCountrySelect?: (country: CountryData | null) => void;
  onMapReady?: (map: any) => void;
  className?: string;
  showHeatmap?: boolean;
}

export default function InteractiveMap({ 
  visibleLayers, 
  filteredCountries = mapData,
  selectedCountry: externalSelectedCountry = null,
  onCountrySelect,
  onMapReady,
  className = "",
  showHeatmap = false
}: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const overlaysRef = useRef<any[]>([]);
  const heatmapRef = useRef<any[]>([]);
  const [internalSelectedCountry, setInternalSelectedCountry] = useState<CountryData | null>(null);
  
  const selectedCountry = externalSelectedCountry || internalSelectedCountry;

  // Initialize map
  useEffect(() => {
    if (!mapRef.current) return;

    // Create map centered on Southeast Asia
    const map = L.map(mapRef.current, {
      center: [10, 100], // Southeast Asia
      zoom: 4,
      zoomControl: true,
      scrollWheelZoom: true
    });

    // Add CartoDB light tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 18
    }).addTo(map);

    mapInstanceRef.current = map;
    
    // Notify parent component that map is ready
    if (onMapReady) {
      onMapReady(map);
    }

    // Country boundaries will be added in the markers update effect

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update markers based on visible layers
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    // Clear existing markers and overlays
    markersRef.current.forEach(marker => {
      mapInstanceRef.current.removeLayer(marker);
    });
    markersRef.current = [];
    
    overlaysRef.current.forEach(overlay => {
      mapInstanceRef.current.removeLayer(overlay);
    });
    overlaysRef.current = [];

    // Add country boundary shading for filtered countries using proper GeoJSON data
    filteredCountries.forEach((country) => {
      // Map country names to GeoJSON feature IDs/names
      const countryNameMapping: Record<string, string> = {
        "United States": "USA",
        "China": "CHN", 
        "Malaysia": "MYS",
        "India": "IND",
        "Philippines": "PHL",
        "Nigeria": "NGA"
      };

      const countryId = countryNameMapping[country.name];
      const geoJsonFeature = worldCountries.features.find(
        (feature: any) => feature.id === countryId || feature.properties.name === country.name
      );

      if (geoJsonFeature) {
        const getCountryColor = (type: string) => {
          if (type.includes("Compute North")) return "#3b82f6"; // blue
          if (type.includes("Global South")) return "#fbbf24"; // yellow  
          if (type.includes("Compute Desert")) return "#ea580c"; // orange
          return "#6b7280"; // gray fallback
        };

        const overlay = L.geoJSON(geoJsonFeature, {
          style: {
            fillColor: getCountryColor(country.type),
            weight: 2,
            opacity: 0.8,
            color: "#374151",
            fillOpacity: 0.4
          }
        });
        
        overlay.addTo(mapInstanceRef.current);
        overlaysRef.current.push(overlay);
      }
    });

    // Add markers for filtered countries
    filteredCountries.forEach((country) => {

      const getMarkerColor = (type: string) => {
        if (type.includes("Compute North")) return "#3b82f6"; // blue
        if (type.includes("Global South")) return "#fbbf24"; // yellow
        if (type.includes("Compute Desert")) return "#ea580c"; // orange
        return "#6b7280"; // gray fallback
      };

      const marker = L.circleMarker([country.lat, country.lng], {
        radius: 8,
        fillColor: getMarkerColor(country.type),
        color: "#ffffff",
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
      });

      // Add hover events
      marker.on('mouseover', function(this: any) {
        this.setRadius(12);
        this.setStyle({weight: 3});
      });

      marker.on('mouseout', function(this: any) {
        this.setRadius(8);
        this.setStyle({weight: 2});
      });

      // Add click event to show tooltip
      marker.on('click', () => {
        if (onCountrySelect) {
          onCountrySelect(country);
        } else {
          setInternalSelectedCountry(country);
        }
      });

      marker.addTo(mapInstanceRef.current);
      markersRef.current.push(marker);
    });

  }, [filteredCountries]);

  // Separate effect to handle heatmap toggle without affecting other layers
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    // Clear existing heatmap layers when toggling
    heatmapRef.current.forEach(layer => {
      mapInstanceRef.current.removeLayer(layer);
    });
    heatmapRef.current = [];

    // Only add heatmap if enabled
    if (showHeatmap) {
      aseanGovernanceData.forEach((countryData) => {
        const countryId = aseanCountryMapping[countryData.Country];
        const geoJsonFeature = worldCountries.features.find(
          (feature: any) => feature.id === countryId || feature.properties.name === countryData.Country
        );

        if (geoJsonFeature) {
          // Calculate heatmap color based on governance maturity
          const getHeatmapColor = (intensity: number): string => {
            // Red to Yellow to Green gradient
            if (intensity === 0) return "#dc2626"; // Red - No governance
            if (intensity <= 0.25) return "#ea580c"; // Orange-Red - Very low
            if (intensity <= 0.5) return "#eab308"; // Yellow - Low
            if (intensity <= 0.75) return "#84cc16"; // Yellow-Green - Medium
            return "#16a34a"; // Green - High governance
          };

          const heatmapLayer = L.geoJSON(geoJsonFeature, {
            style: {
              fillColor: getHeatmapColor(countryData.HeatmapIntensity),
              weight: 1,
              opacity: 0.8,
              color: "#ffffff",
              fillOpacity: 0.6
            }
          });

          // Ensure heatmap renders below markers by sending to back
          heatmapLayer.on('add', () => {
            heatmapLayer.bringToBack();
          });

          // Add click event to show governance details
          heatmapLayer.on('click', () => {
            // Find or create country data for governance tooltip
            const tooltipData: CountryData = {
              name: countryData.Country,
              lat: 0, // These will be calculated from bounds
              lng: 0,
              type: "ASEAN",
              governance_score: (countryData.OverallScore / 4) * 100, // Scale to 0-100% for tooltip
              governance_progress: [
                countryData.ExportControls !== "No" ? `Export Controls: ${countryData.ExportControls}` : null,
                countryData.ReportingRegistries !== "No" ? `Reporting Registries: ${countryData.ReportingRegistries}` : null,
                countryData.CloudRecordKeeping !== "No" ? `Cloud Record Keeping: ${countryData.CloudRecordKeeping}` : null,
                countryData.ModelEvals !== "No" ? `Model Evaluations: ${countryData.ModelEvals}` : null
              ].filter(Boolean) as string[],
              governance_gaps: [
                countryData.ExportControls === "No" ? "Export Controls" : null,
                countryData.ReportingRegistries === "No" ? "Reporting Registries" : null,
                countryData.CloudRecordKeeping === "No" ? "Cloud Record Keeping" : null,
                countryData.ModelEvals === "No" ? "Model Evaluations" : null
              ].filter(Boolean) as string[],
              literature_link: `https://example.com/asean-governance-${countryData.Country.toLowerCase()}`
            };

            if (onCountrySelect) {
              onCountrySelect(tooltipData);
            } else {
              setInternalSelectedCountry(tooltipData);
            }
          });

          heatmapLayer.addTo(mapInstanceRef.current);
          heatmapRef.current.push(heatmapLayer);
        }
      });
    }
  }, [showHeatmap]);

  return (
    <div className={`relative z-0 ${className}`} data-testid="container-interactive-map">
      <div 
        ref={mapRef} 
        className="w-full h-full"
        data-testid="map-leaflet"
        style={{ minHeight: '600px' }}
      />
      
      {selectedCountry && (
        <GovernanceTooltip
          country={selectedCountry}
          onClose={() => {
            if (onCountrySelect) {
              onCountrySelect(null);
            } else {
              setInternalSelectedCountry(null);
            }
          }}
        />
      )}
    </div>
  );
}