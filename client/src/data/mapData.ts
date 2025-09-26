import { CountryData, GeoJSONData } from "../types/map";

export const mapData: CountryData[] = [
  {
    name: "United States (Silicon Valley)",
    lat: 37.3875,
    lng: -122.0575,
    type: "Compute Rich (Frontier)",
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
    name: "China (Beijing)",
    lat: 39.9042,
    lng: 116.4074,
    type: "Compute Rich (State-Driven)",
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
    name: "United Kingdom (London/Cambridge)",
    lat: 52.2053,
    lng: 0.1218,
    type: "Compute Rich (Research & Policy Hub)",
    governance_score: 85,
    governance_progress: [
      "Global leader in AI safety policy and research (e.g., UK AI Safety Institute).",
      "Home to world-class AI labs like Google DeepMind.",
      "Strong academic ecosystem for AI governance research."
    ],
    governance_gaps: [
      "Limited domestic capacity for frontier-scale model training.",
      "Dependent on foreign hardware and cloud infrastructure.",
      "Policy leadership has not yet translated into a strong commercial compute advantage."
    ],
    literature_link: "https://www.gov.uk/government/publications/ai-white-paper"
  },
  {
    name: "Malaysia (Kuala Lumpur)",
    lat: 3.1390,
    lng: 101.6869,
    type: "Compute South (Aspiring Hub)",
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
    name: "Brazil (São Paulo)",
    lat: -23.5505,
    lng: -46.6333,
    type: "Compute South (Emerging Power)",
    governance_score: 58,
    governance_progress: [
      "Developing a national AI strategy focused on ethical use.",
      "Growing tech startup ecosystem, particularly in fintech and agritech.",
      "Home to significant renewable energy resources for sustainable data centers."
    ],
    governance_gaps: [
      "High import tariffs and costs for advanced AI hardware.",
      "Significant 'brain drain' of AI talent to North America and Europe.",
      "Lack of a cohesive national strategy for building sovereign compute."
    ],
    literature_link: "https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/transformacaodigital/estrategia-brasileira-de-inteligencia-artificial"
  },
  {
    name: "Nigeria (Lagos)",
    lat: 6.5244,
    lng: 3.3792,
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
    name: "Philippines (Manila)",
    lat: 14.5995,
    lng: 120.9842,
    type: "Compute South (Talent Powerhouse)",
    governance_score: 45,
    governance_progress: [
      "World-class, English-speaking talent pool for data annotation and AI services.",
      "Strong government support for the Business Process Outsourcing (BPO) sector, which is pivoting to AI.",
      "Growing number of AI-focused startups."
    ],
    governance_gaps: [
      "Limited physical AI compute infrastructure.",
      "Value is captured in services, not in owning the core IP or infrastructure.",
      "Vulnerable to shifts in the global BPO market as AI automates more tasks."
    ],
    literature_link: "https://dict.gov.ph/ai-philippines/"
  }
];

// GeoJSON data for regional overlays
export const geojsonData: GeoJSONData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "The Compute South",
        "description": "Nations with growing digital economies and some compute assets, but lacking access to frontier-level AI infrastructure. A key battleground for digital sovereignty."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [[-77, -55], [-34, -34], [-34, 10], [30, -34], [51, 0], [51, 15], [120, -10], [153, -43], [110, -8], [95, 28], [70, 5], [40, 30], [10, 30], [-5, 15], [-20, 0], [-77, -55]]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "The Compute Desert",
        "description": "Regions with high human potential but a critical lack of the foundational digital and energy infrastructure required for a sovereign AI ecosystem."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [[-17, 15], [51, 15], [51, -10], [10, -10], [-17, 15]]
        ]
      }
    }
  ]
};