import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ComputeType } from "../types/map";

interface LayerControlsProps {
  visibleLayers: Record<ComputeType, boolean>;
  onLayerToggle: (layer: ComputeType) => void;
  className?: string;
}

export default function LayerControls({ visibleLayers, onLayerToggle, className = "" }: LayerControlsProps) {
  const layers: { key: ComputeType; label: string; color: string }[] = [
    { key: "Compute Rich", label: "Compute Rich Nations", color: "bg-compute-rich" },
    { key: "Compute South", label: "Compute South Regions", color: "bg-compute-south" },
    { key: "Compute Desert", label: "Compute Desert Areas", color: "bg-compute-desert" }
  ];

  return (
    <Card className={`w-64 ${className}`} data-testid="card-layer-controls">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold" data-testid="text-controls-title">
          Layer Controls
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
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
      </CardContent>
    </Card>
  );
}