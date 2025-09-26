import { useState } from 'react';
import LayerControls from '../LayerControls';
import { ComputeType } from '../../types/map';

export default function LayerControlsExample() {
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
    console.log(`Toggled ${layer} layer to ${!visibleLayers[layer]}`);
  };

  return (
    <div className="p-8 bg-background">
      <LayerControls 
        visibleLayers={visibleLayers}
        onLayerToggle={handleLayerToggle}
      />
    </div>
  );
}