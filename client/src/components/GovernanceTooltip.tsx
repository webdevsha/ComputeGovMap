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

      {/* GPU Regions Information */}
      {(country.gpu_regions !== undefined || country.non_gpu_regions !== undefined || country.h100_regions !== undefined) && (
        <div className="mb-6">
          <h4 className="text-sm font-medium text-card-foreground mb-3" data-testid="text-compute-infrastructure-label">
            Compute Infrastructure
          </h4>
          <div className="space-y-2">
            {country.total_regions !== undefined && (
              <div className="flex items-center justify-between text-sm font-medium border-b pb-2 mb-2" data-testid="total-regions-info">
                <span className="text-card-foreground">Total regions</span>
                <span className="text-card-foreground">{country.total_regions}</span>
              </div>
            )}
            {country.gpu_regions !== undefined && (
              <div className="flex items-center justify-between text-sm" data-testid="gpu-regions-info">
                <span className="text-muted-foreground flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2" />
                  GPU-enabled regions
                </span>
                <span className="font-medium text-card-foreground">{country.gpu_regions}</span>
              </div>
            )}
            {country.non_gpu_regions !== undefined && country.non_gpu_regions > 0 && (
              <div className="flex items-center justify-between text-sm" data-testid="non-gpu-regions-info">
                <span className="text-muted-foreground flex items-center">
                  <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-2" />
                  Non-GPU regions
                </span>
                <span className="font-medium text-card-foreground">{country.non_gpu_regions}</span>
              </div>
            )}
            {country.h100_regions !== undefined && country.h100_regions > 0 && (
              <div className="flex items-center justify-between text-sm" data-testid="h100-regions-info">
                <span className="text-muted-foreground flex items-center">
                  <div className="mr-2" style={{
                    width: '0',
                    height: '0',
                    borderLeft: '4px solid transparent',
                    borderRight: '4px solid transparent',
                    borderBottom: '6px solid #dc2626'
                  }}></div>
                  H100 regions (Frontier AI)
                </span>
                <span className="font-medium text-red-600">{country.h100_regions}</span>
              </div>
            )}
            {country.a100_regions !== undefined && country.a100_regions > 0 && (
              <div className="flex items-center justify-between text-sm" data-testid="a100-regions-info">
                <span className="text-muted-foreground flex items-center">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2" />
                  A100 regions
                </span>
                <span className="font-medium text-blue-600">{country.a100_regions}</span>
              </div>
            )}
            {country.v100_regions !== undefined && country.v100_regions > 0 && (
              <div className="flex items-center justify-between text-sm" data-testid="v100-regions-info">
                <span className="text-muted-foreground flex items-center">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-2" />
                  V100 regions
                </span>
                <span className="font-medium text-purple-600">{country.v100_regions}</span>
              </div>
            )}
            {country.osat_regions !== undefined && country.osat_regions > 0 && (
              <div className="flex items-center justify-between text-sm" data-testid="osat-regions-info">
                <span className="text-muted-foreground flex items-center">
                  <div className="inline-block w-2 h-2 bg-blue-700 border border-white rounded-sm mr-2" />
                  OSAT regions (Assembly/Test)
                </span>
                <span className="font-medium text-blue-700">{country.osat_regions}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* OSAT Information Section */}
      {country.osat_info && (
        <div className="mb-6">
          <h4 className="text-sm font-medium text-card-foreground mb-2" data-testid="text-osat-info-label">
            🔷 OSAT Operations (Semiconductor Assembly/Test)
          </h4>
          <div className="text-xs text-muted-foreground bg-blue-50 p-3 rounded-lg border border-blue-200" data-testid="osat-info-content">
            <p className="leading-relaxed">
              {country.osat_info}
            </p>
          </div>
        </div>
      )}

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