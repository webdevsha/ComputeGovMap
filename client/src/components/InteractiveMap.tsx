import { useEffect, useRef, useState } from "react";
import { CountryData, ComputeType } from "../types/map";
import { mapData, geojsonData } from "../data/mapData";
import GovernanceTooltip from "./GovernanceTooltip";

// Declare Leaflet types for TypeScript
declare global {
  interface Window {
    L: any;
  }
}

interface InteractiveMapProps {
  visibleLayers: Record<ComputeType, boolean>;
  filteredCountries?: CountryData[];
  selectedCountry?: CountryData | null;
  onCountrySelect?: (country: CountryData | null) => void;
  onMapReady?: (map: any) => void;
  className?: string;
}

export default function InteractiveMap({ 
  visibleLayers, 
  filteredCountries = mapData,
  selectedCountry: externalSelectedCountry = null,
  onCountrySelect,
  onMapReady,
  className = "" 
}: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const overlaysRef = useRef<any[]>([]);
  const [internalSelectedCountry, setInternalSelectedCountry] = useState<CountryData | null>(null);
  
  const selectedCountry = externalSelectedCountry || internalSelectedCountry;

  // Initialize map
  useEffect(() => {
    if (!mapRef.current || !window.L) return;

    // Create map centered on Southeast Asia
    const map = window.L.map(mapRef.current, {
      center: [10, 100], // Southeast Asia
      zoom: 4,
      zoomControl: true,
      scrollWheelZoom: true
    });

    // Add CartoDB light tile layer
    window.L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 18
    }).addTo(map);

    mapInstanceRef.current = map;
    
    // Notify parent component that map is ready
    if (onMapReady) {
      onMapReady(map);
    }

    // Add regional overlays
    geojsonData.features.forEach((feature) => {
      const overlay = window.L.geoJSON(feature, {
        style: {
          fillColor: feature.properties.name === "The Compute South" ? "#fbbf24" : "#ea580c", // yellow vs orange
          weight: 1,
          opacity: 0.7,
          color: feature.properties.name === "The Compute South" ? "#f59e0b" : "#dc2626",
          fillOpacity: 0.3
        },
        onEachFeature: (feature: any, layer: any) => {
          layer.on('click', () => {
            console.log(`Clicked on ${feature.properties.name}`);
            layer.bindPopup(`
              <div class="p-3">
                <h3 class="font-semibold text-lg mb-2">${feature.properties.name}</h3>
                <p class="text-sm text-gray-600">${feature.properties.description}</p>
              </div>
            `).openPopup();
          });
        }
      });
      
      overlay.addTo(map);
      overlaysRef.current.push(overlay);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update markers based on visible layers
  useEffect(() => {
    if (!mapInstanceRef.current || !window.L) return;

    // Clear existing markers
    markersRef.current.forEach(marker => {
      mapInstanceRef.current.removeLayer(marker);
    });
    markersRef.current = [];

    // Add markers for filtered countries
    filteredCountries.forEach((country) => {

      const getMarkerColor = (type: string) => {
        if (type.includes("Compute Rich")) return "#f59e0b"; // amber
        if (type.includes("Compute South")) return "#06b6d4"; // cyan
        return "#ea580c"; // orange-red
      };

      const marker = window.L.circleMarker([country.lat, country.lng], {
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