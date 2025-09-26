import { useState, useMemo } from "react";
import { ComputeType, CountryData } from "../types/map";
import { mapData } from "../data/mapData";
import MapHeader from "../components/MapHeader";
import InteractiveMap from "../components/InteractiveMap";
import MapLegend from "../components/MapLegend";
import LayerControls from "../components/LayerControls";
import SearchBox from "../components/SearchBox";
import GovernanceFilter from "../components/GovernanceFilter";

export default function ComputeMap() {
  const [visibleLayers, setVisibleLayers] = useState<Record<ComputeType, boolean>>({
    "Compute Rich": true,
    "Compute South": true,
    "Compute Desert": true
  });
  const [scoreRange, setScoreRange] = useState<[number, number]>([0, 100]);
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);
  const [mapInstance, setMapInstance] = useState<any>(null);

  // Filter countries based on governance score range and visible layers
  const filteredCountries = useMemo(() => {
    return mapData.filter(country => {
      const computeType = country.type.includes("Compute Rich") ? "Compute Rich" : 
                         country.type.includes("Compute South") ? "Compute South" : "Compute Desert";
      
      const isLayerVisible = visibleLayers[computeType];
      const isInScoreRange = country.governance_score >= scoreRange[0] && country.governance_score <= scoreRange[1];
      
      return isLayerVisible && isInScoreRange;
    });
  }, [visibleLayers, scoreRange]);

  const handleLayerToggle = (layer: ComputeType) => {
    setVisibleLayers(prev => ({
      ...prev,
      [layer]: !prev[layer]
    }));
  };

  const handleCountrySelect = (country: CountryData) => {
    setSelectedCountry(country);
    
    // Pan map to selected country if map instance is available
    if (mapInstance) {
      mapInstance.setView([country.lat, country.lng], 6, { animate: true });
    }
  };

  return (
    <div className="min-h-screen bg-background" data-testid="page-compute-map">
      {/* Header */}
      <MapHeader />
      
      {/* Main map container */}
      <div className="relative flex-1" style={{ height: 'calc(100vh - 140px)' }}>
        {/* Map */}
        <InteractiveMap 
          visibleLayers={visibleLayers}
          filteredCountries={filteredCountries}
          selectedCountry={selectedCountry}
          onCountrySelect={setSelectedCountry}
          onMapReady={setMapInstance}
          className="w-full h-full"
        />
        
        {/* Search Box - Top Center */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 w-80" data-testid="container-search">
          <SearchBox 
            countries={mapData}
            onCountrySelect={handleCountrySelect}
          />
        </div>
        
        {/* Layer Controls - Top Left */}
        <div className="absolute top-4 left-4 z-10 space-y-4" data-testid="container-controls">
          <LayerControls 
            visibleLayers={visibleLayers}
            onLayerToggle={handleLayerToggle}
          />
          <GovernanceFilter 
            scoreRange={scoreRange}
            onScoreRangeChange={setScoreRange}
          />
        </div>
        
        {/* Legend - Top Right */}
        <div className="absolute top-4 right-4 z-10" data-testid="container-legend">
          <MapLegend />
        </div>
      </div>
    </div>
  );
}