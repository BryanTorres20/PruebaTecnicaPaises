interface Props {
    region:string;
    onRegionChange: (region:string) => void;
}

const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

export default function FilterBar({ region, onRegionChange}: Props) {
    return (
        <select
            value={region}
            onChange={(e) => onRegionChange(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-900 focus:outline-none focus:border-gray-400 bg-white"
        >
            <option value="">Todas las regiones</option>
            {REGIONS.map(r => (
                <option key={r} value={r}>{r}</option>
            ))}
        </select>
    );
}

