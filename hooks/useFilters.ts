import {Country} from "@/ types/country.types";
import {useMemo, useState} from "react";

export function useFilters(countries: Country[]) {
    const [search, setSearch] = useState<string>("");
    const [region, setRegion] = useState<string>("");

    const filtered = useMemo(() => {
        return countries.filter((country) => {
            const matchSearch = country.name.common.toLowerCase().includes(search.toLowerCase());
            const matchRegion = region === "" || country.region === region;
            return matchSearch && matchRegion;
        });
    }, [countries, search, region]);
    return { filtered, search, setSearch, region, setRegion };
}