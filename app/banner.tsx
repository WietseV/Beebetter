export default function Banner() {
    return (
        <div className="w-full px-2 bg-stone-500 py-8 flex flex-auto justify-between">
            <a href="/"><div className="w-4 h-4 bg-yellow-500 rounded-full"/></a>
            
            <h1 className="text-3xl text-center font-semibold text-white">
                <span className="text-yellow-500">BE(E)</span> BETTER
            </h1>
            <a href="/Create"><div className="w-4 h-4 bg-yellow-500 rounded-full"/></a>
        </div>
    )
}