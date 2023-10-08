export default function News() {

    const names = ['James', 'Paul', 'John', 'George', 'Ringo'];

    return (
        <div>
            <div className="bg-stone-500 m-2 px-4 py-2">
                <p className="text-white">
                    Latest News
                </p>
                
            </div>
            {names.map(name => (
                <div key={name} className="m-4 bg-stone-400 px-2">
                {name}
                </div>
            ))}
        </div>
    )
}