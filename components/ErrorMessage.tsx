interface Props {
    message: string;
    onRetry: () => void;
}

export default function ErrorMessage({ message, onRetry }: Props)  {
    return (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
            <h2 className="text-3xl font-bold text-gray-800">Algo salió mal</h2>
            <p className="text-xl font-semibold text-gray-500">{message}</p>
            <button
                onClick={onRetry}
                className="px-5 py-2 bg-gray-900 text-white text-lg rounded-lg hover:bg-gray-700 transition-colors"
            >
                Reintentar
            </button>
        </div>
    );
}