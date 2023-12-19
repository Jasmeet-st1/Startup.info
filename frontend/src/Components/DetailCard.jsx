import { useContext } from "react"
import { CardContext } from "../App"

export default function DetailCard() {

    const { card, setCard, cardOpen, setCardOpen } = useContext(CardContext);

    if(!card) return(<></>);

    const item = card;

    
    const fullDate = new Date(item.Date);
    const date = (fullDate.getDate() < 10) ? ('0' + fullDate.getDate()) : (fullDate.getDate());
    const month = ((fullDate.getMonth() + 1 < 10) ? ('0' + (fullDate.getMonth() + 1)) : (fullDate.getMonth() + 1));
    const year = fullDate.getFullYear();

    if (cardOpen) return (
        <div className="fixed left-0 top-0 w-full h-screen overflow-x-hidden bg-black/[0.8] flex items-center justify-center backdrop-blur-sm">
            <div className="w-max h-full overflow-y-auto lg:h-max min-w-2/5 max-w-2xl min-h-3/5 mx-auto bg-sky-50 p-10 pb-20 border-2 border-black rounded-xl relative">

                <p className="text-5xl font-bold font-serif inline-block me-16 mb-2">{item.StartupName}</p>
                <div className={`text-xl text-center border ${item.AmountInUSD ? 'border-green-800 bg-green-200' : 'border-red-800 bg-red-200'} px-2 py-1 w-max inline-block align-text-bottom`}>💸 {item.AmountInUSD ? `$${item.AmountInUSD}` : 'Pre-revenue'}</div>
                <div className="text-xl my-5 ms-1 ">Industry 🏭 : <u className="font-bold">{item.IndustryVertical ? item.IndustryVertical : 'Not Specified'}</u></div>

                <table className="table-fixed border-separate border border-slate-500 w-full">
                    <tr>
                        <td className="border border-slate-500 p-3 font-bold">Founding Date 🗓️</td>
                        <td className="border border-slate-500 p-3 text-right">{item.Date ? `${date}-${month}-${year}` : 'Not Specified'}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-500 p-3 font-bold">Sub Vertical Industry </td>
                        <td className="border border-slate-500 p-3 text-right">{item.SubVertical ? item.SubVertical : 'Not Specified'}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-500 p-3 font-bold">Location 📌</td>
                        <td className="border border-slate-500 p-3 text-right">{item.CityLocation ? item.CityLocation : 'Not Specified'}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-500 p-3 font-bold">Investors</td>
                        <td className="border border-slate-500 p-3 text-right">{item.InvestorsName ? item.InvestorsName : 'Not Specified'}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-500 p-3 font-bold">Investment Type</td>
                        <td className="border border-slate-500 p-3 text-right">{item.InvestmentType ? item.InvestmentType : 'Not Specified'}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-500 p-3 font-bold">Remarks</td>
                        <td className="border border-slate-500 p-3 text-right">{item.Remarks ? item.Remarks : 'Not Specified'}</td>
                    </tr>
                </table>


                <button className="absolute right-4 top-4 text-2xl" onClick={() => setCardOpen(false)}>❌</button>

            </div>
        </div>
    )
}