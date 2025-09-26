import { useState, useMemo } from "react";
import { ComputeType, CountryData } from "../types/map";
import { mapData } from "../data/mapData";
import MapHeader from "../components/MapHeader";
import InteractiveMap from "../components/InteractiveMap";
import MapLegend from "../components/MapLegend";
import LayerControls from "../components/LayerControls";
import SearchBox from "../components/SearchBox";
import GovernanceFilter from "../components/GovernanceFilter";
import DataExport from "../components/DataExport";

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
    <div className="flex flex-col h-screen bg-background" data-testid="page-compute-map">
      {/* Header */}
      <MapHeader />
      
      {/* Main map container */}
      <div className="relative flex-1 min-h-0">
        {/* Map */}
        <InteractiveMap 
          visibleLayers={visibleLayers}
          filteredCountries={filteredCountries}
          selectedCountry={selectedCountry}
          onCountrySelect={setSelectedCountry}
          onMapReady={setMapInstance}
          className="w-full h-full"
        />
        
        {/* Search Box - Top Center on Desktop, Top on Mobile */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 w-80 max-w-[calc(100vw-2rem)] px-2 md:px-0" data-testid="container-search">
          <SearchBox 
            countries={mapData}
            onCountrySelect={handleCountrySelect}
          />
        </div>
        
        {/* Layer Controls - Top Left on Desktop, Bottom Left on Mobile */}
        <div className="absolute top-4 left-4 z-10 space-y-4 md:space-y-4 md:block hidden" data-testid="container-controls-desktop">
          <LayerControls 
            visibleLayers={visibleLayers}
            onLayerToggle={handleLayerToggle}
          />
          <GovernanceFilter 
            scoreRange={scoreRange}
            onScoreRangeChange={setScoreRange}
          />
        </div>
        
        {/* Mobile Controls - Bottom */}
        <div className="absolute bottom-4 left-4 right-4 z-10 md:hidden flex flex-col space-y-2 pointer-events-none pb-safe" data-testid="container-controls-mobile">
          <div className="flex gap-2 overflow-x-auto pointer-events-auto">
            <LayerControls 
              visibleLayers={visibleLayers}
              onLayerToggle={handleLayerToggle}
              className="flex-shrink-0 pointer-events-auto"
            />
            <GovernanceFilter 
              scoreRange={scoreRange}
              onScoreRangeChange={setScoreRange}
              className="flex-shrink-0 pointer-events-auto"
            />
            <DataExport 
              countries={filteredCountries}
              allCountries={mapData}
              visibleCountries={mapData.filter(country => {
                const computeType = country.type.includes("Compute Rich") ? "Compute Rich" : 
                                 country.type.includes("Compute South") ? "Compute South" : "Compute Desert";
                return visibleLayers[computeType];
              })}
              className="flex-shrink-0 pointer-events-auto"
            />
          </div>
        </div>
        
        {/* Legend - Top Right on Desktop, Hidden on Mobile */}
        <div className="absolute top-4 right-4 z-10 hidden md:block space-y-4" data-testid="container-legend">
          <MapLegend />
          <DataExport 
            countries={filteredCountries}
            allCountries={mapData}
            visibleCountries={mapData.filter(country => {
              const computeType = country.type.includes("Compute Rich") ? "Compute Rich" : 
                               country.type.includes("Compute South") ? "Compute South" : "Compute Desert";
              return visibleLayers[computeType];
            })}
          />
        </div>
      </div>
    </div>
  );
}