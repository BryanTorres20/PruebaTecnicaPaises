export default function CountryCardSkeleton() {
    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden animate-pulse">
            <div className="w-full h-40 bg-gray-200" />
            <div className="p-4 space-y-2">
                <div className="h-5 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="h-4 bg-gray-200 rounded w-1/3" />
            </div>
        </div>
    );
}