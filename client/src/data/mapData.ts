import { CountryData, GeoJSONData } from "../types/map";

export const mapData: CountryData[] = [
  {
    name: "United States",
    lat: 39.8283,
    lng: -98.5795,
    type: "Compute North (Frontier Leader)",
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
  },
  {
    name: "China",
    lat: 35.8617,
    lng: 104.1954,
    type: "Compute North (State-Driven)",
    governance_score: 82,
    governance_progress: [
      "Massive state investment in domestic AI hardware and data centers.",
      "Rapidly advancing in domestic chip design to reduce foreign dependency.",
      "Strong top-down implementation of national AI regulations."
    ],
    governance_gaps: [
      "Restricted access to cutting-edge foreign semiconductor technology.",
      "Governance is focused on state control rather than open, global safety norms.",
      "Limited collaboration with the international AI safety research community."
    ],
    literature_link: "https://www.nist.gov/artificial-intelligence"
  },
  {
    name: "Malaysia",
    lat: 4.2105,
    lng: 101.9758,
    type: "Global South (Aspiring Hub)",
    governance_score: 62,
    governance_progress: [
      "Strong strategic position in the semiconductor 'back-end' (packaging & testing).",
      "Active government initiatives in AI policy (e.g., MCMC's AI Code of Ethics).",
      "Rapidly growing into a key regional data center hub.",
    ],
    governance_gaps: [
      "Limited access to frontier-level training hardware (e.g., H100s).",
      "High dependency on foreign hyperscaler cloud infrastructure.",
      "Need for a larger domestic AI research and talent pipeline."
    ],
    literature_link: "https://www.mosti.gov.my/web/en/our-policies/national-ai-roadmap-2021-2025/"
  },
  {
    name: "India",
    lat: 20.5937,
    lng: 78.9629,
    type: "Global South (Emerging Power)",
    governance_score: 58,
    governance_progress: [
      "Developing a national AI strategy focused on ethical use and digital infrastructure.",
      "Growing tech startup ecosystem with strong engineering talent pool.",
      "Home to significant renewable energy resources for sustainable data centers."
    ],
    governance_gaps: [
      "High import tariffs and costs for advanced AI hardware.",
      "Significant 'brain drain' of AI talent to North America and Europe.",
      "Lack of a cohesive national strategy for building sovereign compute."
    ],
    literature_link: "https://www.meity.gov.in/national-strategy-artificial-intelligence"
  },
  {
    name: "Philippines",
    lat: 12.8797,
    lng: 121.7740,
    type: "Compute Desert (Service Hub)",
    governance_score: 45,
    governance_progress: [
      "World-class, English-speaking talent pool for data annotation and AI services.",
      "Strong government support for the Business Process Outsourcing (BPO) sector.",
      "Growing number of AI-focused startups."
    ],
    governance_gaps: [
      "Limited physical AI compute infrastructure.",
      "Value is captured in services, not in owning the core IP or infrastructure.",
      "Vulnerable to shifts in the global BPO market as AI automates more tasks."
    ],
    literature_link: "https://dict.gov.ph/ai-philippines/"
  },
  {
    name: "Nigeria",
    lat: 9.0820,
    lng: 8.6753,
    type: "Compute Desert (High Potential)",
    governance_score: 34,
    governance_progress: [
      "Home to Africa's largest and most dynamic tech startup ecosystem.",
      "Growing community of AI/ML engineers and data scientists.",
      "Strategic location with major subsea cable landings."
    ],
    governance_gaps: [
      "Critical lack of reliable power and physical data center infrastructure.",
      "Extremely limited access to on-shore compute resources for AI.",
      "Government policy has not yet caught up to the needs of the tech ecosystem."
    ],
    literature_link: "https://nitda.gov.ng/national-artificial-intelligence-policy/"
  },
  {
    name: "Singapore Compute Node 1",
    lat: 1.316690568586346,
    lng: 103.70248257523349,
    type: "Compute North (Regional Hub)",
    governance_score: 85,
    governance_progress: [
      "Strategic compute infrastructure in Southeast Asia financial district.",
      "Advanced connectivity and low-latency access to regional markets.",
      "Strong regulatory framework for data center operations."
    ],
    governance_gaps: [
      "Limited domestic chip manufacturing capabilities.",
      "High dependency on foreign technology imports.",
      "Space constraints for large-scale infrastructure expansion."
    ],
    literature_link: "https://www.smartnation.gov.sg/why-Smart-Nation/NationalAIStrategy"
  },
  {
    name: "Singapore Compute Node 2", 
    lat: 1.3175593746768843,
    lng: 103.7021607101681,
    type: "Compute North (Regional Hub)",
    governance_score: 85,
    governance_progress: [
      "High-performance compute facility with regional connectivity.",
      "Robust power infrastructure and cooling systems.",
      "Compliance with international data governance standards."
    ],
    governance_gaps: [
      "Limited domestic chip manufacturing capabilities.",
      "High dependency on foreign technology imports.", 
      "Space constraints for large-scale infrastructure expansion."
    ],
    literature_link: "https://www.smartnation.gov.sg/why-Smart-Nation/NationalAIStrategy"
  }
];

// This file now focuses on country data, with country boundaries handled separately