import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Activity, Map } from "lucide-react";

interface HeatmapToggleProps {
  showHeatmap: boolean;
  onToggle: (show: boolean) => void;
  className?: string;
}

export default function HeatmapToggle({ showHeatmap, onToggle, className = "" }: HeatmapToggleProps) {
  return (
    <Card className={`${className}`} data-testid="card-heatmap-toggle">
      <CardContent className="p-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-card-foreground">
              ASEAN Governance
            </span>
            {showHeatmap && (
              <Badge variant="secondary" className="text-xs">
                Active
              </Badge>
            )}
          </div>
          <Button
            variant={showHeatmap ? "default" : "outline"}
            size="sm"
            onClick={() => onToggle(!showHeatmap)}
            data-testid="button-heatmap-toggle"
            className="h-8 px-3"
          >
            <Map className="w-3 h-3 mr-1" />
            {showHeatmap ? "Hide" : "Show"}
          </Button>
        </div>
        
        {showHeatmap && (
          <div className="mt-3 pt-3 border-t border-border">
            <div className="text-xs text-muted-foreground mb-2">Governance Maturity</div>
            <div className="flex items-center gap-1 text-xs">
              <div className="w-3 h-2 bg-red-600 rounded-sm"></div>
              <span className="text-muted-foreground mr-2">None</span>
              <div className="w-3 h-2 bg-orange-500 rounded-sm"></div>
              <span className="text-muted-foreground mr-2">Low</span>
              <div className="w-3 h-2 bg-yellow-500 rounded-sm"></div>
              <span className="text-muted-foreground mr-2">Med</span>
              <div className="w-3 h-2 bg-green-600 rounded-sm"></div>
              <span className="text-muted-foreground">High</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}