export interface CountryData {
  name: string;
  lat: number;
  lng: number;
  type: string;
  governance_score: number; // 0-100 score representing governance maturity
  governance_progress: string[];
  governance_gaps: string[];
  literature_link?: string;
}

export interface RegionData {
  type: "Feature";
  properties: {
    name: string;
    description: string;
  };
  geometry: {
    type: "Polygon";
    coordinates: number[][][];
  };
}

export interface GeoJSONData {
  type: "FeatureCollection";
  features: RegionData[];
}

export type ComputeType = "Compute North" | "Global South" | "Compute Desert";