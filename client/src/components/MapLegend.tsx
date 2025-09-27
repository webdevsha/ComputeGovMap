import { Badge } from "@/components/ui/badge";
import CollapsibleCard from "@/components/ui/collapsible-card";

interface MapLegendProps {
  className?: string;
}

export default function MapLegend({ className = "" }: MapLegendProps) {
  const legendItems = [
    {
      label: "Compute North",
      description: "Advanced AI infrastructure and frontier capabilities",
      color: "bg-blue-500",
      count: 2
    },
    {
      label: "Global South", 
      description: "Growing economies with emerging AI capabilities",
      color: "bg-yellow-500",
      count: 2
    },
    {
      label: "Compute Desert",
      description: "High potential but lacking infrastructure",
      color: "bg-orange-500", 
      count: 2
    }
  ];

  // Regional overlays removed - now using country-specific boundary shading

  return (
    <CollapsibleCard
      title="Global Compute Landscape"
      className={`w-72 md:w-80 ${className}`}
      testId="card-legend"
      defaultOpen={true}
    >
      <div className="space-y-4">
        {/* Country Markers */}
        <div>
          <h4 className="text-sm font-medium text-card-foreground mb-3" data-testid="text-markers-title">
            Country Markers
          </h4>
          <div className="space-y-3">
            {legendItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3" data-testid={`legend-marker-${index}`}>
                <div className={`w-3 h-3 rounded-full ${item.color} flex-shrink-0`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-card-foreground">{item.label}</span>
                    <Badge variant="secondary" className="text-xs" data-testid={`badge-count-${index}`}>
                      {item.count}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Country Boundary Shading */}
        <div>
          <h4 className="text-sm font-medium text-card-foreground mb-3" data-testid="text-boundaries-title">
            Country Shading
          </h4>
          <p className="text-xs text-muted-foreground mb-3">
            Countries are shaded according to their compute category with proper boundary lines.
          </p>
        </div>

        {/* Interaction Hint */}
        <div className="pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground" data-testid="text-interaction-hint">
            Hover over markers for detailed governance analysis
          </p>
        </div>
      </div>
    </CollapsibleCard>
  );
}