import { useEffect, useRef, useState } from "react";
import { CountryData, ComputeType } from "../types/map";
import { mapData } from "../data/mapData";
import { countryBoundaries } from "../data/countryBoundaries";
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
    if (!mapInstanceRef.current || !window.L) return;

    // Clear existing markers and overlays
    markersRef.current.forEach(marker => {
      mapInstanceRef.current.removeLayer(marker);
    });
    markersRef.current = [];
    
    overlaysRef.current.forEach(overlay => {
      mapInstanceRef.current.removeLayer(overlay);
    });
    overlaysRef.current = [];

    // Add country boundary shading for filtered countries
    filteredCountries.forEach((country) => {
      const boundary = countryBoundaries[country.name as keyof typeof countryBoundaries];
      if (boundary) {
        const getCountryColor = (type: string) => {
          if (type.includes("Compute North")) return "#3b82f6"; // blue
          if (type.includes("Global South")) return "#fbbf24"; // yellow  
          if (type.includes("Compute Desert")) return "#ea580c"; // orange
          return "#6b7280"; // gray fallback
        };

        const overlay = window.L.geoJSON(boundary, {
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