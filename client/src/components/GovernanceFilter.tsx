import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import CollapsibleCard from "@/components/ui/collapsible-card";

interface GovernanceFilterProps {
  scoreRange: [number, number];
  onScoreRangeChange: (range: [number, number]) => void;
  className?: string;
}

export default function GovernanceFilter({ scoreRange, onScoreRangeChange, className = "" }: GovernanceFilterProps) {
  const getGovernanceBand = (score: number) => {
    if (score >= 75) return { label: "High", color: "bg-green-500" };
    if (score >= 50) return { label: "Moderate", color: "bg-yellow-500" };
    return { label: "Early", color: "bg-red-500" };
  };

  const minBand = getGovernanceBand(scoreRange[0]);
  const maxBand = getGovernanceBand(scoreRange[1]);

  return (
    <CollapsibleCard
      title="Governance Filter"
      className={`w-56 md:w-64 ${className}`}
      testId="card-governance-filter"
      defaultOpen={true}
    >
      <div className="space-y-4">
        <div>
          <Label className="text-sm font-medium mb-3 block" data-testid="label-score-range">
            Governance Score Range
          </Label>
          <div className="px-2">
            <Slider
              value={scoreRange}
              onValueChange={(value) => onScoreRangeChange(value as [number, number])}
              max={100}
              min={0}
              step={5}
              className="w-full"
              data-testid="slider-governance-score"
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span data-testid="text-min-score">{scoreRange[0]}%</span>
            <span data-testid="text-max-score">{scoreRange[1]}%</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${minBand.color}`} />
            <Badge variant="secondary" className="text-xs" data-testid="badge-min-band">
              {minBand.label}
            </Badge>
          </div>
          <span className="text-xs text-muted-foreground">to</span>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${maxBand.color}`} />
            <Badge variant="secondary" className="text-xs" data-testid="badge-max-band">
              {maxBand.label}
            </Badge>
          </div>
        </div>

        <div className="pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground" data-testid="text-filter-hint">
            Adjust range to focus on specific governance maturity levels
          </p>
        </div>
      </div>
    </CollapsibleCard>
  );
}