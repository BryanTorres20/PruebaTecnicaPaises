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
            <div className="fixed inset-0 flex items-end sm:items-center justify-center p-0 sm:p-4">
                <Dialog.Panel className="bg-white rounded-t-2xl sm:rounded-xl p-6 w-full sm:max-w-md relative max-h-[90vh] overflow-y-auto">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2"
                    >
                        X
                    </button>
                    {country && (
                        <>
                            <img
                                src={country.flags.png}
                                alt={country.flags.alt}
                                className="w-20 mb-4 rounded"
                            />
                            <Dialog.Title className="text-2xl font-bold text-gray-900 mb-4">
                                {country.name.common}
                            </Dialog.Title>
                            <p className="text-lg text-gray-700 mb-2">
                                <strong>Población:</strong> {country.population.toLocaleString()}
                            </p>
                            <p className="text-lg text-gray-700 mb-2">
                                <strong>Moneda(s):</strong>{" "}
                                {Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(", ")}
                            </p>
                            <p className="text-lg text-gray-700">
                                <strong>Idioma(s):</strong>{" "}
                                {Object.values(country.languages).join(", ")}
                            </p>
                        </>
                    )}
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}