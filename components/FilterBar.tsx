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
        >
            <option value="">Todas las regiones</option>
            {REGIONS.map(r => (
                <option key={r} value={r}>{r}</option>
            ))}
        </select>
    );
}

