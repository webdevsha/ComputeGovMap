export interface CountryData {
  name: string;
  lat: number;
  lng: number;
  type: "Compute Rich (Frontier)" | "Compute Rich (State-Driven)" | "Compute Rich (Research & Policy Hub)" | "Compute South (Aspiring Hub)" | "Compute South (Emerging Power)" | "Compute South (Talent Powerhouse)" | "Compute Desert (High Potential)";
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

export type ComputeType = "Compute Rich" | "Compute South" | "Compute Desert";