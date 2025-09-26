import GovernanceTooltip from '../GovernanceTooltip';

const mockCountry = {
  name: "United States (Silicon Valley)",
  lat: 37.3875,
  lng: -122.0575,
  type: "Compute Rich (Frontier)" as const,
  governance_score: 78,
  governance_progress: [
    "Home to major AI labs with advanced safety frameworks (OpenAI, Anthropic).",
    "Leads in frontier model R&D and chip design (NVIDIA).",
    "Strong public-private partnerships on AI.",
  ],
  governance_gaps: [
    "Extreme centralization of compute, creating a critical chokepoint.",
    "Intense geopolitical competition driving a 'race dynamic'.",
    "Governance models are often lab-specific, lacking national-level standardization."
  ],
  literature_link: "https://www.whitehouse.gov/ostp/ai-bill-of-rights/"
};

export default function GovernanceTooltipExample() {
  return (
    <div className="p-8 bg-background min-h-screen">
      <GovernanceTooltip 
        country={mockCountry} 
        onClose={() => console.log('Tooltip closed')} 
      />
    </div>
  );
}