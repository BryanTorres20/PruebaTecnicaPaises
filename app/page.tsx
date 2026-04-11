"use client"
import {useCountries} from "@/hooks/useCountries";

export default function Home() {
    const { countries, loading, error } = useCountries();

    if (loading) return <p>Cargando...</p>
    if (error) return <p>Error!: {error}</p>

    return (
      <main>
          <p>Total de Paises: {countries.length}</p>
          <p>Primer pais: {countries[0].name.common}</p>
          <img src={countries[0].flags.png} alt={countries[0].flags.alt} />
      </main>
    );
}
