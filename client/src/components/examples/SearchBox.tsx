import SearchBox from '../SearchBox';
import { mapData } from '../../data/mapData';

export default function SearchBoxExample() {
  const handleCountrySelect = (country: any) => {
    console.log('Selected country:', country.name);
  };

  return (
    <div className="p-8 bg-background">
      <div className="max-w-md">
        <SearchBox 
          countries={mapData}
          onCountrySelect={handleCountrySelect}
        />
      </div>
    </div>
  );
}