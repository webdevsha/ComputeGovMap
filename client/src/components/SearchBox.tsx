import { useState, useMemo } from "react";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CountryData } from "../types/map";

interface SearchBoxProps {
  countries: CountryData[];
  onCountrySelect: (country: CountryData) => void;
  className?: string;
}

export default function SearchBox({ countries, onCountrySelect, className = "" }: SearchBoxProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const filteredCountries = useMemo(() => {
    if (!searchTerm.trim()) return [];
    
    return countries
      .filter(country => 
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.type.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, 5); // Limit to 5 results for better UX
  }, [countries, searchTerm]);

  const handleCountryClick = (country: CountryData) => {
    onCountrySelect(country);
    setSearchTerm("");
    setIsOpen(false);
    setIsFocused(false);
  };

  const getGovernanceBand = (score: number) => {
    if (score >= 75) return "High";
    if (score >= 50) return "Moderate";
    return "Early";
  };

  const getTypeColor = (type: string) => {
    if (type.includes("Compute North")) return "text-blue-500";
    if (type.includes("Global South")) return "text-yellow-500";
    if (type.includes("Compute Desert")) return "text-orange-500";
    return "text-muted-foreground";
  };

  // Only show search box when focused or has content
  const shouldShowSearchBox = isFocused || searchTerm.trim().length > 0;

  return (
    <div className={`relative transition-all duration-300 ${shouldShowSearchBox ? 'opacity-100' : 'opacity-30 hover:opacity-100'} ${className}`} data-testid="container-search">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          type="text"
          placeholder="Search countries or regions..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(e.target.value.trim().length > 0);
          }}
          onFocus={() => {
            setIsFocused(true);
            setIsOpen(searchTerm.trim().length > 0);
          }}
          onBlur={() => {
            setTimeout(() => {
              setIsOpen(false);
              setIsFocused(false);
            }, 200);
          }}
          className="pl-10 pr-4"
          data-testid="input-search"
        />
      </div>

      {isOpen && filteredCountries.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50 max-h-80 overflow-y-auto" data-testid="card-search-results">
          <CardContent className="p-0">
            {filteredCountries.map((country, index) => (
              <Button
                key={country.name}
                variant="ghost"
                className="w-full justify-start p-4 h-auto hover-elevate"
                onClick={() => handleCountryClick(country)}
                data-testid={`button-country-${index}`}
              >
                <div className="flex items-start gap-3 w-full">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-muted-foreground" />
                  <div className="flex-1 text-left space-y-1">
                    <div className="font-medium text-card-foreground" data-testid={`text-country-name-${index}`}>
                      {country.name}
                    </div>
                    <div className={`text-sm ${getTypeColor(country.type)}`} data-testid={`text-country-type-${index}`}>
                      {country.type}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span data-testid={`text-governance-score-${index}`}>
                        Governance: {country.governance_score}% ({getGovernanceBand(country.governance_score)})
                      </span>
                    </div>
                  </div>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>
      )}

      {isOpen && searchTerm.trim() && filteredCountries.length === 0 && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50" data-testid="card-no-results">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-muted-foreground" data-testid="text-no-results">
              No countries found matching "{searchTerm}"
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}