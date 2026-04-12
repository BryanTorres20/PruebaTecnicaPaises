import FilterBar from "@/components/FilterBar";

interface Props {
    search: string;
    onSearch: (search: string) => void;
    region: string;
    onRegionChanged: (region: string) => void;
}

export default function Header({ search, onSearch, region, onRegionChanged }: Props) {
    return (
        <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-gray-900">
                    Guia de Paises
                </h1>
                <div className="flex items-center gap-3">
                    <input
                        type="text"
                        placeholder="Buscar pais..."
                        value={search}
                        onChange={(e) => onSearch(e.target.value)}
                        className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-gray-400 w-64"
                    />
                    <FilterBar
                        region={region}
                        onRegionChange={onRegionChanged}
                    />
                </div>
            </div>
        </header>
    )
}