export interface CountryData {
  name: string;
  lat: number;
  lng: number;
  type: string;
  governance_score: number; // 0-100 score representing governance maturity
  governance_progress: string[];
  governance_gaps: string[];
  literature_link?: string;
  gpu_regions?: number; // Number of GPU-enabled regions
  non_gpu_regions?: number; // Number of non-GPU regions
  h100_regions?: number; // Number of H100-enabled regions
  a100_regions?: number; // Number of A100-enabled regions
  v100_regions?: number; // Number of V100-enabled regions
  total_regions?: number; // Total number of regions
  osat_regions?: number; // Number of OSAT (Outsourced Semiconductor Assembly and Test) regions
  osat_info?: string; // Detailed OSAT information
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