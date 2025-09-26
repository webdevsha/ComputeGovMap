import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MapLegendProps {
  className?: string;
}

export default function MapLegend({ className = "" }: MapLegendProps) {
  const legendItems = [
    {
      label: "Compute Rich",
      description: "Nations with advanced AI infrastructure",
      color: "bg-compute-rich",
      count: 3
    },
    {
      label: "Compute South", 
      description: "Growing economies with limited frontier access",
      color: "bg-compute-south",
      count: 3
    },
    {
      label: "Compute Desert",
      description: "High potential but lacking infrastructure",
      color: "bg-compute-desert", 
      count: 1
    }
  ];

  const regionItems = [
    {
      label: "The Compute South",
      description: "Battleground for digital sovereignty",
      color: "border-l-4 border-amber-500",
      pattern: "Yellow overlay"
    },
    {
      label: "The Compute Desert", 
      description: "Critical infrastructure gaps",
      color: "border-l-4 border-orange-600",
      pattern: "Orange overlay"
    }
  ];

  return (
    <Card className={`w-80 ${className}`} data-testid="card-legend">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold" data-testid="text-legend-title">
          Global Compute Landscape
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
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

        {/* Regional Overlays */}
        <div>
          <h4 className="text-sm font-medium text-card-foreground mb-3" data-testid="text-regions-title">
            Regional Classifications
          </h4>
          <div className="space-y-3">
            {regionItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3" data-testid={`legend-region-${index}`}>
                <div className={`w-4 h-8 ${item.color} flex-shrink-0 rounded-sm`} />
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-medium text-card-foreground block">{item.label}</span>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                  <span className="text-xs text-muted-foreground/75 italic">{item.pattern}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interaction Hint */}
        <div className="pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground" data-testid="text-interaction-hint">
            Hover over markers for detailed governance analysis
          </p>
        </div>
      </CardContent>
    </Card>
  );
}