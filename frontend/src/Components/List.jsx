import { useEffect, useState } from "react";
import Card from "./Card";

export default function List({ list, isLoading, setIsLoading }) {

    const [page, setPage] = useState(1);
    
    // useEffect(() => {
    //     // setIsLoading(()=>{console.log("list true"); return true;});

    //     window.scrollTo(0,0);
        
    //     // setTimeout(() => {
    //     //     setIsLoading(()=>{console.log("list false"); return false;});
    //     // }, 1500);

    // }, [page]);
    
    // useEffect(() => {
    //     setPage(1);
    // }, [list]);
    
    
    if (list.length === 0) {
        return (
            <p className="text-xl md:text-2xl lg:text-3xl text-center text-red-700">No Data Found. Please Try with some other filter.</p>
            )
    }
    
    const totalItems = list.length;
    const recordPerPage = 60;
    
    const lastIndex = recordPerPage * page;
    const firstIndex = lastIndex - recordPerPage;
    
    const records = list.slice(firstIndex, lastIndex);
    const totPages = Math.ceil(totalItems / recordPerPage);
    
    function prev() {
        if (page > 1) {
            setTimeout(() => {
                window.scrollTo(0,0);
                setPage(page - 1);
            }, 1000);
        }
    }

    function next() {
        if (page < totPages) {
            setTimeout(() => {
                window.scrollTo(0,0);
                setPage(page + 1);
            }, 1000);
        }
    }

    return (
        <div className="px-3 md:px-5 lg:px-9">

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>

                {
                    records.map((item, i) => {
                        return <Card key={i} item={item} />
                    })
                }
            </div>

            <div className="w-max mx-auto my-3">

                <button className={`${page === 1 ? 'cursor-not-allowed bg-blue-400 dark:bg-blue-500' : 'bg-blue-700 hover:bg-blue-800'} text-white font-medium rounded-lg text-sm px-3 py-2 mx-2 mb-2 focus:outline-none`} onClick={prev}>Previous</button>
                <span>Page {page}/{totPages}</span>
                <button className={`${page === totPages ? 'cursor-not-allowed bg-blue-400 dark:bg-blue-500' : 'bg-blue-700 hover:bg-blue-800'} text-white font-medium rounded-lg text-sm px-3 py-2 mx-2 mb-2 focus:outline-none`} onClick={next}>Next</button>
            </div>
        </div>
    )

}
