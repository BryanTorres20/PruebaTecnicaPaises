"use client"
import {useCountries} from "@/hooks/useCountries";
import CountryCard from "@/components/CountryCard";
import {useFilters} from "@/hooks/useFilters";
import FilterBar from "@/components/FilterBar";
import {useState} from "react";
import { Country } from "@/ types/country.types";
import CountryModal from "@/components/CountryModal";

export default function Home() {
    const { countries, loading, error } = useCountries();
    const { filtered, search, setSearch, region, setRegion } = useFilters(countries);
    const [selected, setSelected] = useState<Country|null>(null);

    if (loading) return <p>Cargando...</p>
    if (error) return <p>Error!: {error}</p>

    return (
      <main>
          <input
              type="text"
              placeholder="Buscar pais..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
          />
          <FilterBar
            region={region}
            onRegionChange={setRegion}
          >
          </FilterBar>
          <div>
              {filtered.map((country) => (
                  <CountryCard
                      key={country.name.common}
                      country={country}
                      onClick={() => setSelected(country)}
                  />
              ))}
          </div>

          {selected && (
              <CountryModal
                  country={selected}
                  onClose={() => setSelected(null)}
              />
          )}
      </main>
    );
}
