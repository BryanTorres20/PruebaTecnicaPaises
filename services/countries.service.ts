import { Country } from "@/ types/country.types";

export async function getAllCountries(): Promise<Country[]> {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/all?fields=${process.env.NEXT_PUBLIC_FIELDS}`
    );

    if (!response.ok) {
        throw new Error("Error getting countries from API");
    }

    const data: Country[] = await response.json();
    return data;
}