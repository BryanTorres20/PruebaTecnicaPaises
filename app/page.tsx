"use client"
import {useCountries} from "@/hooks/useCountries";
import CountryCard from "@/components/CountryCard";
import {useFilters} from "@/hooks/useFilters";

export default function Home() {
    const { countries, loading, error } = useCountries();
    const { filtered, search, setSearch } = useFilters(countries);

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
