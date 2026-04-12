import {useEffect, useState} from "react";
import {Country} from "@/ types/country.types";
import {getAllCountries} from "@/services/countries.service";

export function useCountries() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string|null>(null);
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
        getAllCountries()
            .then(setCountries)
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    }, [retryCount]);

    const refetch = () => {
        setLoading(true);
        setError(null);
        setRetryCount(prev => prev + 1);
    };

    return {countries, loading, error, refetch};
}