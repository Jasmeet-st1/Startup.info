import axios from "axios";
import { useState } from "react"


export default function Addform({length, formOpen, setFormOpen}) {

    const [page, setPage] = useState(1);
    const [data,setData]=useState({
        SNo:length,
        Date:"",
        StartupName:"",
        IndustryVertical:"",
        SubVertical:"",
        CityLocation:"",
        InvestorsName:"",
        InvestmentType:"",
        AmountInUSD:"",
        Remarks:"",
    });

    const [err,setErr]=useState(false);

    const [submitted,setSubmitted]=useState(false);

    function prev(){
        if(page!==1) setPage(page-1);
    }

    function next(){
        if(
            (page===1 && (data.Date!=="" && data.StartupName!=="" && data.CityLocation!=="")) ||
            (page===2)
        ) setPage(page+1);
        else{
            setErr(true);
        }

    }

    function handleChange(e){
        setErr(false);
        setData({
            ...data,
            [e.target.name]:e.target.value,
        })
    }

    function handleSubmit(e){
        e.preventDefault();

        axios.post('http://localhost:5000/addStartup',data)
        .then(res=>{
            setSubmitted(true);
            setPage(1);

            setTimeout(()=>{
                setFormOpen(false);
                setSubmitted(false);

            },2000);
        })
        .catch(err=>console.log(err));
    }

    function Necessary() {
        return (
            <div className="w-full">
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">StartUp Name*</label>
                    <input type="text" id="name" name="StartupName" value={data.StartupName} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <div className="mb-4">
                    <label htmlFor="date" className="block mb-2 text-sm font-medium">Founding Date 🗓️*</label>
                    <input type="date" id="date" name="Date" value={data.Date} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <div className="mb-4">
                    <label htmlFor="city" className="block mb-2 text-sm font-medium">Location 📌*</label>
                    <input type="text" id="city" name="CityLocation" value={data.CityLocation} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>

                <div className={`${err===true ? 'visible' : 'hidden'} text-red-800`}>*Fill out all Fields</div>
            </div>
        )
    }

    function Additional() {
        return (
            <div className="w-full">

                <div className="mb-4 inline-block me-4 w-5/12">
                    <label htmlFor="industry" className="block mb-2 text-sm font-medium">Industry related</label>
                    <input type="text" id="industry" name="IndustryVertical" value={data.IndustryVertical} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <div className="mb-4 inline-block w-5/12">
                    <label htmlFor="subindustry" className="block mb-2 text-sm font-medium">SubIndustry</label>
                    <input type="text" id="subindustry" name="SubVertical" value={data.SubVertical} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <div className="mb-4">
                    <label htmlFor="invertors" className="block mb-2 text-sm font-medium">Investors</label>
                    <input type="text" id="invertors" name="InvestorsName" value={data.InvestorsName} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <div className="mb-4 me-4 inline-block w-5/12">
                    <label htmlFor="inverstment-type" className="block mb-2 text-sm font-medium">Investment Type</label>
                    <input type="text" id="inverstment-type" name="InvestmentType" value={data.InvestmentType} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <div className="mb-4 inline-block w-5/12">
                    <label htmlFor="amount" className="block mb-2 text-sm font-medium">Investment Amount 💸</label>
                    <input type="number" id="amount" name="AmountInUSD" value={data.AmountInUSD} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <div className="mb-4">
                    <label htmlFor="remarks" className="block mb-2 text-sm font-medium">Remarks</label>
                    <textarea type="text" id="remarks" name="Remarks" value={data.Remarks} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></textarea>
                </div>
            </div>
        )
    }

    function Confirmation(){
        return(
            <div>
                <div className="mb-4 inline-block w-5/12 lg:block lg:w-full">
                    <p className="block mb-2 text-sm font-medium text-slate-600">Startup name</p>
                    <p className="block mb-2  font-medium font-bold">{'→ '+data.StartupName}</p>
                </div>
                <div className="mb-4 inline-block w-5/12 lg:block lg:w-full">
                    <p className="block mb-2 text-sm font-medium text-slate-600">Founding Date 🗓️</p>
                    <p className="block mb-2  font-medium font-bold">{'→ '+data.Date}</p>
                </div>
                <div className="mb-4 inline-block w-5/12 lg:block lg:w-full">
                    <p className="block mb-2 text-sm font-medium text-slate-600">Loaction 📌</p>
                    <p className="block mb-2  font-medium font-bold">{'→ '+data.CityLocation}</p>
                </div>
                <div className="mb-4 inline-block w-5/12">
                    <p className="block mb-2 text-sm font-medium text-slate-600">Industry</p>
                    <p className="block mb-2  font-medium font-bold">{'→ '+data.IndustryVertical}</p>
                </div>
                <div className="mb-4 inline-block w-5/12">
                    <p className="block mb-2 text-sm font-medium text-slate-600">SubIndustry</p>
                    <p className="block mb-2 font-medium font-bold">{'→ '+data.SubVertical}</p>
                </div>
                <div className="mb-4 inline-block w-5/12 lg:block lg:w-full">
                    <p className="block mb-2 text-sm font-medium text-slate-600">Investors</p>
                    <p className="block mb-2  font-medium font-bold">{'→ '+data.InvestorsName}</p>
                </div>
                <div className="mb-4 inline-block w-5/12">
                    <p className="block mb-2 text-sm font-medium text-slate-600">Investment Type</p>
                    <p className="block mb-2 font-medium font-bold">{'→ '+data.InvestmentType}</p>
                </div>
                <div className="mb-4 inline-block w-5/12">
                    <p className="block mb-2 text-sm font-medium text-slate-600">Investment Amount 💸</p>
                    <p className="block mb-2  font-medium font-bold">{'→ '+data.AmountInUSD}</p>
                </div>
                <div className="mb-4 inline-block w-5/12 lg:block lg:w-full">
                    <p className="block mb-2 text-sm font-medium text-slate-600">Remarks</p>
                    <p className="block mb-2 font-medium font-bold">{'→ '+data.Remarks}</p>
                </div>

            </div>
        )
    }

    function Message(){
        return(
            <div className="w-max h-max mx-auto bg-sky-50 py-20 md:py-48 px-10 border-2 border-black rounded-xl relative overflow-hidden">
                <div className="w-6 md:w-14 inline-block"> <img src="tick.png" alt="" className="w-full"/></div>
                <p className="text-2xl md:text-5xl inline-block align-baseline md:align-top">&nbsp;StartUp Data Submitted</p>
            </div>
        )
    }

    return (
        <div className="fixed left-0 top-0 w-full h-screen overflow-x-hidden bg-slate-500/[0.7] flex items-center justify-center backdrop-blur-sm">
            {submitted 
                ? 
                Message()
                :
                <div className="w-full lg:w-2/5 h-full mx-auto bg-sky-50 p-10 pb-10 border-2 border-black rounded-xl relative overflow-hidden">
                    <div className="text-3xl font-serif">Submit your StartUp</div>
                    <div className="w-full my-5 border-2 border-black">
                        <div className={`bg-blue-500 h-2`} style={{width:`${page/3*100}%`}}></div>
                    </div>
                    <form onSubmit={handleSubmit} className="min-h-48 max-h-100 overflow-y-auto">

                        { (page===1) ? Necessary() : page===2 ? Additional() : Confirmation()}

                        <div className="w-max mx-auto">

                            <button type="button" className={`${page === 1 ? 'cursor-not-allowed bg-blue-300' : 'bg-blue-700 hover:bg-blue-800'} text-white font-medium rounded-lg text-sm px-5 py-2 mx-2 mb-2 focus:outline-none`} onClick={prev}>Prev</button>
                            <button type="button" className={`${page === 3 ? 'hidden' : 'bg-blue-700 hover:bg-blue-800'} text-white font-medium rounded-lg text-sm px-5 py-2 mx-2 mb-2 focus:outline-none`} onClick={next}>Next</button>
                            <button type="submit" className={`${page !== 3 ? 'hidden' : 'bg-blue-700 hover:bg-blue-800'} text-white font-medium rounded-lg text-sm px-5 py-2 mx-2 mb-2 focus:outline-none`}>Submit</button>
                        </div>
                    </form>
                    <button className="absolute right-4 top-4 text-2xl" onClick={() => setFormOpen(false)}>❌</button>
                </div>
            }
        </div>
    )

}