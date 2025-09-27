import { CountryData, GeoJSONData } from "../types/map";

export const mapData: CountryData[] = [
  // United States H100 Regions - Spread across major tech hubs
  {
    name: "United States - Silicon Valley",
    lat: 37.3875,
    lng: -122.0575,
    type: "Compute North (Frontier Leader)",
    governance_score: 78,
    total_regions: 5,
    gpu_regions: 4,
    non_gpu_regions: 1,
    h100_regions: 2,
    a100_regions: 3,
    v100_regions: 3,
    governance_progress: [
      "Home to major AI labs with advanced safety frameworks (OpenAI, Anthropic).",
      "Leads in frontier model R&D and chip design (NVIDIA).",
      "Concentrated H100 deployment for frontier model training."
    ],
    governance_gaps: [
      "Extreme centralization of compute, creating a critical chokepoint.",
      "Intense competition for limited H100 resources.",
      "Governance models are often lab-specific, lacking standardization."
    ],
    literature_link: "https://www.whitehouse.gov/ostp/ai-bill-of-rights/"
  },
  {
    name: "United States - Seattle",
    lat: 47.6062,
    lng: -122.3321,
    type: "Compute North (Frontier Leader)",
    governance_score: 78,
    total_regions: 4,
    gpu_regions: 3,
    non_gpu_regions: 1,
    h100_regions: 1,
    a100_regions: 2,
    v100_regions: 2,
    governance_progress: [
      "Microsoft and Amazon major AI infrastructure investments.",
      "Strong cloud compute infrastructure with Azure and AWS.",
      "Advanced AI research facilities and partnerships."
    ],
    governance_gaps: [
      "Limited H100 allocation compared to Silicon Valley.",
      "Dependency on tech giant infrastructure decisions.",
      "Need for more distributed governance frameworks."
    ],
    literature_link: "https://www.whitehouse.gov/ostp/ai-bill-of-rights/"
  },
  {
    name: "United States - Austin",
    lat: 30.2672,
    lng: -97.7431,
    type: "Compute North (Frontier Leader)",
    governance_score: 78,
    total_regions: 3,
    gpu_regions: 2,
    non_gpu_regions: 1,
    h100_regions: 1,
    a100_regions: 2,
    v100_regions: 2,
    governance_progress: [
      "Growing tech hub with major data center investments.",
      "Tesla AI and other tech companies establishing presence.",
      "State-level support for AI infrastructure development."
    ],
    governance_gaps: [
      "Limited H100 access compared to coastal tech hubs.",
      "Still developing comprehensive AI governance framework.",
      "Competition with established tech centers for resources."
    ],
    literature_link: "https://www.whitehouse.gov/ostp/ai-bill-of-rights/"
  },
  {
    name: "United States - Virginia",
    lat: 38.9517,
    lng: -77.4481,
    type: "Compute North (Frontier Leader)",
    governance_score: 78,
    total_regions: 4,
    gpu_regions: 3,
    non_gpu_regions: 1,
    h100_regions: 1,
    a100_regions: 3,
    v100_regions: 2,
    governance_progress: [
      "Major data center hub for East Coast operations.",
      "Government and defense AI infrastructure concentration.",
      "Strong connectivity to federal AI initiatives."
    ],
    governance_gaps: [
      "Limited H100 deployment for civilian research.",
      "Balancing defense and civilian AI infrastructure needs.",
      "Regulatory complexity at federal level."
    ],
    literature_link: "https://www.whitehouse.gov/ostp/ai-bill-of-rights/"
  },
  {
    name: "United States - New York",
    lat: 40.7128,
    lng: -74.0060,
    type: "Compute North (Frontier Leader)",
    governance_score: 78,
    total_regions: 3,
    gpu_regions: 2,
    non_gpu_regions: 1,
    h100_regions: 1,
    a100_regions: 2,
    v100_regions: 2,
    governance_progress: [
      "Financial sector AI infrastructure and applications.",
      "Growing AI research institutions and startups.",
      "Strategic East Coast tech hub development."
    ],
    governance_gaps: [
      "Limited H100 access for financial AI applications.",
      "High costs and space constraints for infrastructure.",
      "Need for sector-specific governance frameworks."
    ],
    literature_link: "https://www.whitehouse.gov/ostp/ai-bill-of-rights/"
  },
  {
    name: "United States - Chicago",
    lat: 41.8781,
    lng: -87.6298,
    type: "Compute North (Frontier Leader)",
    governance_score: 78,
    total_regions: 3,
    gpu_regions: 2,
    non_gpu_regions: 1,
    h100_regions: 1,
    a100_regions: 2,
    v100_regions: 2,
    governance_progress: [
      "Central location for Midwest AI infrastructure.",
      "Growing data center and cloud infrastructure.",
      "University partnerships for AI research."
    ],
    governance_gaps: [
      "Limited H100 allocation for regional needs.",
      "Competition with coastal tech hubs.",
      "Developing comprehensive AI policy framework."
    ],
    literature_link: "https://www.whitehouse.gov/ostp/ai-bill-of-rights/"
  },
  {
    name: "United States - Phoenix",
    lat: 33.4484,
    lng: -112.0740,
    type: "Compute North (Frontier Leader)",
    governance_score: 78,
    total_regions: 2,
    gpu_regions: 2,
    non_gpu_regions: 0,
    h100_regions: 1,
    a100_regions: 2,
    v100_regions: 1,
    governance_progress: [
      "Major data center hub with favorable climate for cooling.",
      "Growing semiconductor and tech manufacturing presence.",
      "Strategic location for Southwest US operations."
    ],
    governance_gaps: [
      "Limited H100 deployment compared to major tech centers.",
      "Water and power infrastructure considerations.",
      "Developing regional AI governance capabilities."
    ],
    literature_link: "https://www.whitehouse.gov/ostp/ai-bill-of-rights/"
  },
  {
    name: "United States - Boston",
    lat: 42.3601,
    lng: -71.0589,
    type: "Compute North (Frontier Leader)",
    governance_score: 78,
    total_regions: 3,
    gpu_regions: 2,
    non_gpu_regions: 1,
    h100_regions: 0,
    a100_regions: 2,
    v100_regions: 2,
    governance_progress: [
      "Leading AI research universities (MIT, Harvard).",
      "Strong academic-industry AI partnerships.",
      "Growing biotech and AI convergence initiatives."
    ],
    governance_gaps: [
      "No H100 allocation despite research excellence.",
      "Limited commercial-scale AI infrastructure.",
      "Academic vs. commercial AI governance differences."
    ],
    literature_link: "https://www.whitehouse.gov/ostp/ai-bill-of-rights/"
  },
  {
    name: "China",
    lat: 35.8617,
    lng: 104.1954,
    type: "Compute North (State-Driven)",
    governance_score: 82,
    total_regions: 36,
    gpu_regions: 27,
    non_gpu_regions: 9,
    h100_regions: 0,
    a100_regions: 9,
    v100_regions: 19,
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
    total_regions: 1,
    gpu_regions: 1,
    non_gpu_regions: 0,
    h100_regions: 0,
    a100_regions: 0,
    v100_regions: 1,
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
    total_regions: 1,
    gpu_regions: 0,
    non_gpu_regions: 1,
    h100_regions: 0,
    a100_regions: 0,
    v100_regions: 0,
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
    name: "Singapore",
    lat: 1.3521,
    lng: 103.8198,
    type: "Compute North (Regional Hub)",
    governance_score: 85,
    total_regions: 6,
    gpu_regions: 5,
    non_gpu_regions: 1,
    h100_regions: 0,
    a100_regions: 2,
    v100_regions: 4,
    governance_progress: [
      "Strategic compute infrastructure in Southeast Asia financial district.",
      "Advanced connectivity and low-latency access to regional markets.",
      "Strong regulatory framework for data center operations.",
      "Multiple GPU-enabled compute facilities across the island."
    ],
    governance_gaps: [
      "Limited domestic chip manufacturing capabilities.",
      "High dependency on foreign technology imports.",
      "Space constraints for large-scale infrastructure expansion."
    ],
    literature_link: "https://www.smartnation.gov.sg/why-Smart-Nation/NationalAIStrategy"
  },
  {
    name: "Indonesia",
    lat: -0.7893,
    lng: 113.9213,
    type: "Global South (Emerging Hub)",
    governance_score: 52,
    total_regions: 5,
    gpu_regions: 2,
    non_gpu_regions: 3,
    h100_regions: 0,
    a100_regions: 0,
    v100_regions: 2,
    governance_progress: [
      "Largest economy in Southeast Asia with growing tech sector.",
      "Government initiatives to develop AI and digital infrastructure.",
      "Strategic location connecting Asia-Pacific markets."
    ],
    governance_gaps: [
      "Infrastructure development still concentrated in major cities.",
      "Limited access to advanced GPU hardware for AI training.",
      "Need for stronger regulatory framework for AI governance."
    ],
    literature_link: "https://www.kominfo.go.id/content/detail/37287/strategi-nasional-kecerdasan-artifisial-indonesia-2020-2045/0/berita"
  },
  {
    name: "Thailand",
    lat: 15.8700,
    lng: 100.9925,
    type: "Global South (Regional Connector)",
    governance_score: 58,
    total_regions: 3,
    gpu_regions: 2,
    non_gpu_regions: 1,
    h100_regions: 0,
    a100_regions: 0,
    v100_regions: 2,
    governance_progress: [
      "Growing digital economy with government support for AI development.",
      "Strategic location as regional hub for multinational companies.",
      "Investment in digital infrastructure and smart city initiatives."
    ],
    governance_gaps: [
      "Limited domestic AI research and development capabilities.",
      "Dependency on foreign technology and expertise.",
      "Need for comprehensive AI governance framework."
    ],
    literature_link: "https://www.mdes.go.th/view/1/AI_Strategy/EN-US"
  },
  {
    name: "Netherlands",
    lat: 52.3676,
    lng: 4.9041,
    type: "Compute North (European Hub)",
    governance_score: 78,
    total_regions: 4,
    gpu_regions: 2,
    non_gpu_regions: 2,
    h100_regions: 1,
    a100_regions: 2,
    v100_regions: 2,
    governance_progress: [
      "Leading EU member in AI governance and digital infrastructure.",
      "Strong data center ecosystem with sustainable energy focus.",
      "Advanced connectivity and fiber network infrastructure."
    ],
    governance_gaps: [
      "Limited domestic chip manufacturing capabilities.",
      "Dependency on global semiconductor supply chains.",
      "Need for coordinated EU-wide AI governance standards."
    ],
    literature_link: "https://www.government.nl/topics/artificial-intelligence-ai"
  }
];

// This file now focuses on country data, with country boundaries handled separately