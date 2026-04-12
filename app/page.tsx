"use client"
import {useCountries} from "@/hooks/useCountries";
import CountryCard from "@/components/CountryCard";
import {useFilters} from "@/hooks/useFilters";
import {useState} from "react";
import { Country } from "@/ types/country.types";
import CountryModal from "@/components/CountryModal";
import Header from "@/components/Header";

export default function Home() {
    const { countries, loading, error } = useCountries();
    const { filtered, search, setSearch, region, setRegion } = useFilters(countries);
    const [selected, setSelected] = useState<Country|null>(null);

    if (loading) return <p>Cargando...</p>
    if (error) return <p>Error!: {error}</p>

    return (
      <main>
          <Header
              search={search}
              onSearch={setSearch}
              region={region}
              onRegionChanged={setRegion}
          />
          <div className="p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filtered.map((country) => (
                      <CountryCard
                          key={country.name.common}
                          country={country}
                          onClick={() => setSelected(country)}
                      />
                  ))}
              </div>
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
