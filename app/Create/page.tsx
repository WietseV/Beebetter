export default function Create() {
    return (
        <div>
            <form action="" className="max-w-[80%] mx-auto mt-8 grid gap-2">
                <div className="flex justify-between">
                    <label>Title:</label>
                    <input type="text" />
                </div>
                <div className="flex justify-between">
                    <label>Date:</label>
                    <input type="date" />
                </div>
                <div className="grid">
                    <label>Short description:</label>
                    <textarea className="h-[120px]"/>
                </div>
                <div className="grid">
                    <label>Blog:</label>
                    <textarea className="h-[50vh]"/>
                </div>
                <button type="submit" value="Submit">
                    Submit
                </button>
            </form>
        </div>
    )
}