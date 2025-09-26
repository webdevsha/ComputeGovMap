import { useState } from 'react';
import GovernanceFilter from '../GovernanceFilter';

export default function GovernanceFilterExample() {
  const [scoreRange, setScoreRange] = useState<[number, number]>([0, 100]);

  const handleScoreRangeChange = (range: [number, number]) => {
    setScoreRange(range);
    console.log('Score range changed to:', range);
  };

  return (
    <div className="p-8 bg-background">
      <GovernanceFilter 
        scoreRange={scoreRange}
        onScoreRangeChange={handleScoreRangeChange}
      />
    </div>
  );
}