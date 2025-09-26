// Simplified country boundary data for shading
export const countryBoundaries = {
  "United States": {
    type: "Feature",
    properties: { name: "United States" },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [-125, 49], [-125, 32], [-117, 32], [-117, 25], [-97, 25], [-97, 49],
        [-95, 49], [-95, 30], [-84, 30], [-84, 24], [-80, 24], [-80, 32],
        [-75, 32], [-75, 45], [-69, 45], [-69, 47], [-125, 49]
      ]]
    }
  },
  
  "China": {
    type: "Feature", 
    properties: { name: "China" },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [73, 53], [135, 53], [135, 18], [97, 18], [97, 35], [78, 35], [73, 53]
      ]]
    }
  },

  "Malaysia": {
    type: "Feature",
    properties: { name: "Malaysia" },
    geometry: {
      type: "MultiPolygon",
      coordinates: [
        [[[100, 7], [105, 7], [105, 1], [100, 1], [100, 7]]],
        [[[110, 7], [119, 7], [119, 4], [110, 4], [110, 7]]]
      ]
    }
  },

  "India": {
    type: "Feature",
    properties: { name: "India" },
    geometry: {
      type: "Polygon", 
      coordinates: [[
        [68, 37], [97, 37], [97, 6], [68, 6], [68, 37]
      ]]
    }
  },

  "Philippines": {
    type: "Feature",
    properties: { name: "Philippines" },
    geometry: {
      type: "MultiPolygon",
      coordinates: [
        [[[120, 19], [126, 19], [126, 5], [120, 5], [120, 19]]]
      ]
    }
  },

  "Nigeria": {
    type: "Feature",
    properties: { name: "Nigeria" },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [3, 14], [15, 14], [15, 4], [3, 4], [3, 14]
      ]]
    }
  }
};