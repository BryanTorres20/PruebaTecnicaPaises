import {Country} from "@/ types/country.types";

interface Props {
    country: Country;
}

export default function CountryCard({ country }: Props) {
    return (
       <div className="border-2 border-gray-200">
           <img src={country.flags.png} alt={country.flags.alt} />
           <h2>{country.name.common}</h2>
           <p>Capital:{country.capital?.[0] ?? "N/A"}</p>
           <p>Region:{country.region}</p>
       </div>
    );
}