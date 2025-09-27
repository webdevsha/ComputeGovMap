import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import CollapsibleCard from "@/components/ui/collapsible-card";
import { ComputeType } from "../types/map";

interface LayerControlsProps {
  visibleLayers: Record<ComputeType, boolean>;
  onLayerToggle: (layer: ComputeType) => void;
  className?: string;
}

export default function LayerControls({ visibleLayers, onLayerToggle, className = "" }: LayerControlsProps) {
  const layers: { key: ComputeType; label: string; color: string }[] = [
    { key: "Compute North", label: "Compute North Nations", color: "bg-blue-500" },
    { key: "Global South", label: "Global South Regions", color: "bg-yellow-500" },
    { key: "Compute Desert", label: "Compute Desert Areas", color: "bg-orange-500" }
  ];

  return (
    <CollapsibleCard
      title="Layer Controls"
      className={`w-56 md:w-64 ${className}`}
      testId="card-layer-controls"
      defaultOpen={true}
    >
      <div className="space-y-4">
        {layers.map((layer) => (
          <div key={layer.key} className="flex items-center justify-between" data-testid={`control-layer-${layer.key.toLowerCase().replace(' ', '-')}`}>
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${layer.color} flex-shrink-0`} />
              <Label 
                htmlFor={`layer-${layer.key}`}
                className="text-sm font-medium cursor-pointer"
                data-testid={`label-${layer.key.toLowerCase().replace(' ', '-')}`}
              >
                {layer.label}
              </Label>
            </div>
            <Switch
              id={`layer-${layer.key}`}
              checked={visibleLayers[layer.key]}
              onCheckedChange={() => onLayerToggle(layer.key)}
              data-testid={`switch-${layer.key.toLowerCase().replace(' ', '-')}`}
            />
          </div>
        ))}
        
        <div className="pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground" data-testid="text-controls-hint">
            Toggle layers to focus on specific compute categories
          </p>
        </div>
      </div>
    </CollapsibleCard>
  );
}