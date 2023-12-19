import { useState } from "react"

export default function Navbar({ query, setQuery, searchQuery }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-slate-50 ">
            <div className="border-y-2 border-stone-900 flex justify-between">
                <div className="text-2xl md:text-3xl my-2 ms-4 md:ms-14 lg:ms-20 font-mono">Startup.info</div>


                <div className={`hidden md:block relative my-3 mr-6 rounded-md shadow-sm`}>
                    <form onSubmit={(e)=>searchQuery(2,e)}>
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 mr-3">
                            <label htmlFor="price" className="text-gray-500 sm:text-sm">🔎</label>
                        </div>
                        <input
                            type="text"
                            name="price"
                            id="price"
                            value={query}
                            onChange={e=>setQuery(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Search for company, city..."
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center ">
                            <button className="px-3 m-1 border-2 border-blue-500 rounded-md bg-blue-500 hover:bg-blue-700 text-white">Search</button>
                        </div>
                    </form>
                </div>

                <button className="block md:hidden text-xl my-2 mr-2" onClick={() => setOpen(!open)}>{!open ? '🔍︎' : '❌'}</button>
            </div>

            <div className={`${open ? 'block' : 'hidden'} md:hidden w-full bg-slate-50 border-b-2 border-stone-900`}>
                <div className="w-max mx-auto relative my-1 rounded-md shadow-sm">
                    <form onSubmit={(e)=>searchQuery(2,e)}>

                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 mr-3">
                            <label htmlFor="price" className="text-gray-500 sm:text-sm">🔎</label>
                        </div>
                        <input
                            type="text"
                            name="price"
                            id="price"
                            className="block w-full rounded-md border-0 py-1.5 pl-9 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            placeholder="Search for company, city..."
                            value={query}
                            onChange={e=>setQuery(e.target.value)}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center ">
                            <button className="px-3 m-1 border-2 border-blue-500 rounded-md bg-blue-500 hover:bg-blue-700 text-white">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}