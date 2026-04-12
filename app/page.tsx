"use client"
import {useCountries} from "@/hooks/useCountries";
import CountryCard from "@/components/CountryCard";
import {useFilters} from "@/hooks/useFilters";
import {useState} from "react";
import { Country } from "@/ types/country.types";
import CountryModal from "@/components/CountryModal";
import Header from "@/components/Header";
import CountryCardSkeleton from "@/components/CountryCardSkeleton";
import ErrorMessage from "@/components/ErrorMessage";

export default function Home() {
    const { countries, loading, error, refetch } = useCountries();
    const { filtered, search, setSearch, region, setRegion } = useFilters(countries);
    const [selected, setSelected] = useState<Country|null>(null);

    return (
      <main>
          <Header
              search={search}
              onSearch={setSearch}
              region={region}
              onRegionChanged={setRegion}
          />
          <div className="max-w-7xl mx-auto p-6">
              {error ? (
                  <ErrorMessage message={error} onRetry={refetch} />
              ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {loading
                      ? Array.from({ length: 12 }).map((_, i) => (
                          <CountryCardSkeleton key={i} />
                      ))
                      : filtered.map((country) => (
                          <CountryCard
                              key={country.name.common}
                              country={country}
                              onClick={() => setSelected(country)}
                          />
                      ))}
              </div>
              )}
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
