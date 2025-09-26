import { useState } from 'react';
import InteractiveMap from '../InteractiveMap';
import { ComputeType } from '../../types/map';

export default function InteractiveMapExample() {
  const [visibleLayers, setVisibleLayers] = useState<Record<ComputeType, boolean>>({
    "Compute Rich": true,
    "Compute South": true,
    "Compute Desert": true
  });

  return (
    <div className="h-screen bg-background">
      <InteractiveMap 
        visibleLayers={visibleLayers}
        className="h-full"
      />
    </div>
  );
}