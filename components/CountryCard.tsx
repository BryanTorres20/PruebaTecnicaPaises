import {Country} from "@/ types/country.types";

interface Props {
    country: Country;
    onClick: () => void;
}

export default function CountryCard({ country, onClick }: Props) {
    return (
       <div
           className="border border-gray-200 cursor-pointer rounded-lg overflow-hidden hover:shadow-lg hover:border-gray-400 transition-shadow bg-white"
           onClick={onClick}
           style={{ cursor: "pointer" }}
       >
           <div className="w-full h-40 overflow-hidden">
               <img
                   src={country.flags.png}
                   alt={country.flags.alt}
                   className="w-full h-full object-cover"
               />
           </div>
           <div className="p-4">
               <h2 className="text-xl font-bold text-gray-900 text-center pb-5">
                   {country.name.common}
               </h2>
               <p><strong>Capital: </strong>{country.capital?.[0] ?? "N/A"}</p>
               <p><strong>Region: </strong>{country.region}</p>
           </div>
       </div>
    );
}