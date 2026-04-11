import {Country} from "@/ types/country.types";
import {Dialog} from "@headlessui/react";

interface Props {
    country: Country;
    onClose: () => void;
}

export default function CountryModal({ country, onClose }: Props) {
    return (
        <Dialog
            open={!!country}
            onClose={onClose}
            className="relative z-50"
        >
            <div className="fixed inset-0 bg-black/50"/>
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="rounded-xl max-w-md bg-white">
                    {country && (
                        <>
                            <img src={country.flags.png} alt={country.flags.alt} className="w-20 mb-4" />

                            <Dialog.Title className="text-xl font-bold mb-4">
                                {country.name.common}
                            </Dialog.Title>

                            <p><strong>Población:</strong> {country.population.toLocaleString()}</p>

                            <p><strong>Moneda(s):</strong>{" "}
                                {Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(", ")}
                            </p>

                            <p><strong>Idioma(s):</strong>{" "}
                                {Object.values(country.languages).join(", ")}
                            </p>

                            <button onClick={onClose} className="mt-4">Cerrar</button>
                        </>
                    )}
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}