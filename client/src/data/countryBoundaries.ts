// Simplified country boundary data for shading\nexport const countryBoundaries = {\n  \"United States\": {\n    type: \"Feature\",\n    properties: { name: \"United States\" },\n    geometry: {\n      type: \"Polygon\",\n      coordinates: [[\n        [-125, 49], [-125, 32], [-117, 32], [-117, 25], [-97, 25], [-97, 49],\n        [-95, 49], [-95, 30], [-84, 30], [-84, 24], [-80, 24], [-80, 32],\n        [-75, 32], [-75, 45], [-69, 45], [-69, 47], [-125, 49]\n      ]]\n    }\n  },\n  \n  // US Regional entries use the same boundary\n  \"United States - Silicon Valley\": {\n    type: \"Feature\",\n    properties: { name: \"United States - Silicon Valley\" },\n    geometry: {\n      type: \"Polygon\",\n      coordinates: [[\n        [-125, 49], [-125, 32], [-117, 32], [-117, 25], [-97, 25], [-97, 49],\n        [-95, 49], [-95, 30], [-84, 30], [-84, 24], [-80, 24], [-80, 32],\n        [-75, 32], [-75, 45], [-69, 45], [-69, 47], [-125, 49]\n      ]]\n    }\n  },\n  \n  \"United States - Seattle\": {\n    type: \"Feature\",\n    properties: { name: \"United States - Seattle\" },\n    geometry: {\n      type: \"Polygon\",\n      coordinates: [[\n        [-125, 49], [-125, 32], [-117, 32], [-117, 25], [-97, 25], [-97, 49],\n        [-95, 49], [-95, 30], [-84, 30], [-84, 24], [-80, 24], [-80, 32],\n        [-75, 32], [-75, 45], [-69, 45], [-69, 47], [-125, 49]\n      ]]\n    }\n  },\n  \n  \"United States - Austin\": {\n    type: \"Feature\",\n    properties: { name: \"United States - Austin\" },\n    geometry: {\n      type: \"Polygon\",\n      coordinates: [[\n        [-125, 49], [-125, 32], [-117, 32], [-117, 25], [-97, 25], [-97, 49],\n        [-95, 49], [-95, 30], [-84, 30], [-84, 24], [-80, 24], [-80, 32],\n        [-75, 32], [-75, 45], [-69, 45], [-69, 47], [-125, 49]\n      ]]\n    }\n  },\n  \n  \"United States - Virginia\": {\n    type: \"Feature\",\n    properties: { name: \"United States - Virginia\" },\n    geometry: {\n      type: \"Polygon\",\n      coordinates: [[\n        [-125, 49], [-125, 32], [-117, 32], [-117, 25], [-97, 25], [-97, 49],\n        [-95, 49], [-95, 30], [-84, 30], [-84, 24], [-80, 24], [-80, 32],\n        [-75, 32], [-75, 45], [-69, 45], [-69, 47], [-125, 49]\n      ]]\n    }\n  },\n  \n  \"United States - New York\": {\n    type: \"Feature\",\n    properties: { name: \"United States - New York\" },\n    geometry: {\n      type: \"Polygon\",\n      coordinates: [[\n        [-125, 49], [-125, 32], [-117, 32], [-117, 25], [-97, 25], [-97, 49],\n        [-95, 49], [-95, 30], [-84, 30], [-84, 24], [-80, 24], [-80, 32],\n        [-75, 32], [-75, 45], [-69, 45], [-69, 47], [-125, 49]\n      ]]\n    }\n  },\n  \n  \"United States - Chicago\": {\n    type: \"Feature\",\n    properties: { name: \"United States - Chicago\" },\n    geometry: {\n      type: \"Polygon\",\n      coordinates: [[\n        [-125, 49], [-125, 32], [-117, 32], [-117, 25], [-97, 25], [-97, 49],\n        [-95, 49], [-95, 30], [-84, 30], [-84, 24], [-80, 24], [-80, 32],\n        [-75, 32], [-75, 45], [-69, 45], [-69, 47], [-125, 49]\n      ]]\n    }\n  },\n  \n  \"United States - Phoenix\": {\n    type: \"Feature\",\n    properties: { name: \"United States - Phoenix\" },\n    geometry: {\n      type: \"Polygon\",\n      coordinates: [[\n        [-125, 49], [-125, 32], [-117, 32], [-117, 25], [-97, 25], [-97, 49],\n        [-95, 49], [-95, 30], [-84, 30], [-84, 24], [-80, 24], [-80, 32],\n        [-75, 32], [-75, 45], [-69, 45], [-69, 47], [-125, 49]\n      ]]\n    }\n  },\n  \n  \"United States - Boston\": {\n    type: \"Feature\",\n    properties: { name: \"United States - Boston\" },\n    geometry: {\n      type: \"Polygon\",\n      coordinates: [[\n        [-125, 49], [-125, 32], [-117, 32], [-117, 25], [-97, 25], [-97, 49],\n        [-95, 49], [-95, 30], [-84, 30], [-84, 24], [-80, 24], [-80, 32],\n        [-75, 32], [-75, 45], [-69, 45], [-69, 47], [-125, 49]\n      ]]\n    }\n  },
  
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
  },

  "Indonesia": {
    type: "Feature",
    properties: { name: "Indonesia" },
    geometry: {
      type: "MultiPolygon",
      coordinates: [
        [[[95, 6], [141, 6], [141, -11], [95, -11], [95, 6]]]
      ]
    }
  },

  "Thailand": {
    type: "Feature",
    properties: { name: "Thailand" },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [97, 21], [106, 21], [106, 5], [97, 5], [97, 21]
      ]]
    }
  },

  "Singapore": {
    type: "Feature",
    properties: { name: "Singapore" },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [103.6, 1.5], [104.1, 1.5], [104.1, 1.2], [103.6, 1.2], [103.6, 1.5]
      ]]
    }
  },

  "Netherlands": {
    type: "Feature",
    properties: { name: "Netherlands" },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [3, 54], [7, 54], [7, 51], [3, 51], [3, 54]
      ]]
    }
  }
};