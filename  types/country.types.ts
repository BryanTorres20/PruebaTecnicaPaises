export interface Currency {
    name: string;
    symbol: string;
}

export interface Country {
    name: {
        common: string;
        official: string;
    };
    capital: string[];
    region: string;
    population: number;
    currencies: Record<string, Currency>;
    language: Record<string, string>;
    flags: {
        png: string;
        alt: string;
    };
}