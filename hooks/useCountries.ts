import {useEffect, useState} from "react";
import {Country} from "@/ types/country.types";
import {getAllCountries} from "@/services/countries.service";

export function useCountries() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string|null>(null);

    useEffect(() => {
        getAllCountries()
            .then(setCountries)
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    }, []);

    return {countries, loading, error};
}