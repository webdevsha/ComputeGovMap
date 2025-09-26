// ASEAN AI Governance Heatmap Data 2024
export interface ASEANGovernanceData {
  Country: string;
  ExportControls: string;
  ReportingRegistries: string;
  CloudRecordKeeping: string;
  ModelEvals: string;
  OverallScore: number;
  HeatmapIntensity: number;
}

// Convert governance status to numeric scores
const getGovernanceScore = (status: string): number => {
  switch (status) {
    case "Yes (nascent)": return 3;
    case "Planned/Partial": return 2;
    case "Yes": return 4;
    case "No": return 0;
    default: return 0;
  }
};

// Calculate overall governance maturity score
const calculateOverallScore = (data: Omit<ASEANGovernanceData, 'OverallScore' | 'HeatmapIntensity'>): number => {
  const scores = [
    getGovernanceScore(data.ExportControls),
    getGovernanceScore(data.ReportingRegistries), 
    getGovernanceScore(data.CloudRecordKeeping),
    getGovernanceScore(data.ModelEvals)
  ];
  return Math.round((scores.reduce((sum, score) => sum + score, 0) / scores.length) * 100) / 100;
};

// Raw ASEAN governance data
const rawASEANData = [
  {
    "Country": "Singapore",
    "ExportControls": "Planned/Partial",
    "ReportingRegistries": "No", 
    "CloudRecordKeeping": "Planned/Partial",
    "ModelEvals": "Yes (nascent)"
  },
  {
    "Country": "Malaysia",
    "ExportControls": "No",
    "ReportingRegistries": "No",
    "CloudRecordKeeping": "No", 
    "ModelEvals": "Planned/Partial"
  },
  {
    "Country": "Indonesia",
    "ExportControls": "No",
    "ReportingRegistries": "No",
    "CloudRecordKeeping": "No",
    "ModelEvals": "Planned/Partial"
  },
  {
    "Country": "Thailand", 
    "ExportControls": "No",
    "ReportingRegistries": "No",
    "CloudRecordKeeping": "No",
    "ModelEvals": "No"
  },
  {
    "Country": "Philippines",
    "ExportControls": "No", 
    "ReportingRegistries": "No",
    "CloudRecordKeeping": "No",
    "ModelEvals": "No"
  },
  {
    "Country": "Vietnam",
    "ExportControls": "No",
    "ReportingRegistries": "No",
    "CloudRecordKeeping": "No",
    "ModelEvals": "No"
  },
  {
    "Country": "Brunei",
    "ExportControls": "No",
    "ReportingRegistries": "No", 
    "CloudRecordKeeping": "No",
    "ModelEvals": "No"
  },
  {
    "Country": "Cambodia",
    "ExportControls": "No",
    "ReportingRegistries": "No",
    "CloudRecordKeeping": "No",
    "ModelEvals": "No"
  },
  {
    "Country": "Laos",
    "ExportControls": "No",
    "ReportingRegistries": "No",
    "CloudRecordKeeping": "No", 
    "ModelEvals": "No"
  },
  {
    "Country": "Myanmar",
    "ExportControls": "No",
    "ReportingRegistries": "No",
    "CloudRecordKeeping": "No",
    "ModelEvals": "No"
  }
];

// Process and export ASEAN governance data with scores
export const aseanGovernanceData: ASEANGovernanceData[] = rawASEANData.map(country => {
  const overallScore = calculateOverallScore(country);
  return {
    ...country,
    OverallScore: overallScore,
    HeatmapIntensity: Math.min(overallScore / 4, 1) // Normalize to 0-1 range for heatmap
  };
});

// Country name mapping for GeoJSON lookup
export const aseanCountryMapping: Record<string, string> = {
  "Singapore": "SGP",
  "Malaysia": "MYS", 
  "Indonesia": "IDN",
  "Thailand": "THA",
  "Philippines": "PHL",
  "Vietnam": "VNM",
  "Brunei": "BRN",
  "Cambodia": "KHM",
  "Laos": "LAO",
  "Myanmar": "MMR"
};

// ASEAN region bounds for map focusing
export const aseanBounds = {
  north: 28.55,
  south: -11.00, 
  east: 141.02,
  west: 92.30
};