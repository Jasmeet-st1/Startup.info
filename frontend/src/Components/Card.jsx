import { useContext } from "react"
import { CardContext } from "../App"

export default function Card({item}){
    const {card,setCard,cardOpen,setCardOpen}=useContext(CardContext);

    const fullDate=new Date(item.Date);
    const date=(fullDate.getDate() < 10) ? ('0'+fullDate.getDate()) : (fullDate.getDate());
    const month=( (fullDate.getMonth()+1 < 10) ? ('0'+(fullDate.getMonth()+1)) : (fullDate.getMonth()+1) );
    const year=fullDate.getFullYear();

    return(
        // <div className="bg-blue-400 bg-opacity-30 m-1.5 basis-1 hover:basis-1/2">
        <div className="bg-sky-50 m-1.5 py-2 px-5 border border-black relative">
            <h3 className="text-2xl lg:text-3xl my-1 font-serif font-bold">{item.StartupName}</h3>
            <div className={`flex flex-wrap text-base border ${item.AmountInUSD ? 'border-green-800 bg-green-200' : 'border-red-800 bg-red-200' } px-2 py-1 w-max my-1 `}>💸 {item.AmountInUSD ? `$${item.AmountInUSD}` : 'Pre-revenue'}</div>
            <div className="text-base my-2 me-5 ">Industry 🏭: {item.IndustryVertical ? item.IndustryVertical : 'Not Specified'}</div>
            <div className="text-base my-1 me-5 inline-block">📌: {item.CityLocation ? item.CityLocation : 'Not Specified'}</div>
            <div className="text-base my-1 inline-block">🗓️: {item.Date ? `${date}-${month}-${year}` : 'Not Specified'}</div>

            <button className="-rotate-45 font-bold absolute right-2 top-2 lg:opacity-0 hover:opacity-100" onClick={()=>{
                setCard(item);
                setCardOpen(true);
            }}>⟶</button>
        </div>
    )
}