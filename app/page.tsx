"use client"
import {useCountries} from "@/hooks/useCountries";
import CountryCard from "@/components/CountryCard";
import {useFilters} from "@/hooks/useFilters";
import FilterBar from "@/components/FilterBar";

export default function Home() {
    const { countries, loading, error } = useCountries();
    const { filtered, search, setSearch, region, setRegion } = useFilters(countries);

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
                  <CountryCard key={country.name.common}
                  country={country}>
                  </CountryCard>
              ))}
          </div>
      </main>
    );
}
