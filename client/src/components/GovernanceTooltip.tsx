import { CountryData } from "../types/map";
import { ExternalLink } from "lucide-react";

interface GovernanceTooltipProps {
  country: CountryData;
  onClose: () => void;
}

export default function GovernanceTooltip({ country, onClose }: GovernanceTooltipProps) {
  // Use the actual governance score from data
  const progressScore = country.governance_score;
  
  const getTypeColor = (type: string) => {
    if (type.includes("Compute North")) return "text-blue-500";
    if (type.includes("Global South")) return "text-yellow-500";
    if (type.includes("Compute Desert")) return "text-orange-500";
    return "text-muted-foreground";
  };

  const getProgressColor = (type: string) => {
    if (type.includes("Compute North")) return "bg-blue-500";
    if (type.includes("Global South")) return "bg-yellow-500";
    if (type.includes("Compute Desert")) return "bg-orange-500";
    return "bg-progress-fill";
  };

  return (
    <div 
      className="fixed max-w-80 bg-card border border-card-border rounded-lg shadow-lg p-6"
      style={{
        zIndex: 9999,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
      }}
      data-testid="tooltip-governance"
    >
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-card-foreground mb-1" data-testid="text-country-name">
          {country.name}
        </h3>
        <span className={`text-sm font-medium ${getTypeColor(country.type)}`} data-testid="text-country-type">
          {country.type}
        </span>
      </div>

      {/* Governance Progress Slider */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-card-foreground mb-2" data-testid="text-governance-progress-label">
          Governance Progress
        </h4>
        <div className="w-full bg-progress-track rounded-full h-2 mb-2" data-testid="progress-track">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(country.type)}`}
            style={{ width: `${progressScore}%` }}
            data-testid="progress-fill"
          />
        </div>
        <span className="text-xs text-muted-foreground" data-testid="text-progress-score">
          {Math.round(progressScore)}% governance framework maturity
        </span>
      </div>

      {/* Governance Progress Points */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-card-foreground mb-3" data-testid="text-governance-strengths-label">
          Governance Strengths
        </h4>
        <ul className="space-y-2">
          {country.governance_progress.map((point, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start" data-testid={`text-progress-point-${index}`}>
              <span className="inline-block w-1.5 h-1.5 bg-chart-2 rounded-full mt-2 mr-3 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Key Governance Gaps */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-card-foreground mb-3" data-testid="text-governance-gaps-label">
          Key Governance Gaps
        </h4>
        <ul className="space-y-2">
          {country.governance_gaps.map((gap, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start" data-testid={`text-gap-point-${index}`}>
              <span className="inline-block w-1.5 h-1.5 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0" />
              {gap}
            </li>
          ))}
        </ul>
      </div>

      {/* Literature Link */}
      {country.literature_link && (
        <div className="mb-4">
          <a 
            href={country.literature_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            data-testid="link-read-more"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Read More
          </a>
        </div>
      )}

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-muted-foreground hover:text-card-foreground transition-colors p-1"
        data-testid="button-close-tooltip"
      >
        ✕
      </button>
    </div>
  );
}