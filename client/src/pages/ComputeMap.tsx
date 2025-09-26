import { useState } from "react";
import { ComputeType } from "../types/map";
import MapHeader from "../components/MapHeader";
import InteractiveMap from "../components/InteractiveMap";
import MapLegend from "../components/MapLegend";
import LayerControls from "../components/LayerControls";

export default function ComputeMap() {
  const [visibleLayers, setVisibleLayers] = useState<Record<ComputeType, boolean>>({
    "Compute Rich": true,
    "Compute South": true,
    "Compute Desert": true
  });

  const handleLayerToggle = (layer: ComputeType) => {
    setVisibleLayers(prev => ({
      ...prev,
      [layer]: !prev[layer]
    }));
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
          className="w-full h-full"
        />
        
        {/* Layer Controls - Top Left */}
        <div className="absolute top-4 left-4 z-10" data-testid="container-layer-controls">
          <LayerControls 
            visibleLayers={visibleLayers}
            onLayerToggle={handleLayerToggle}
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