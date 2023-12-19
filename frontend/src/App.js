import { createContext , useEffect, useState } from 'react';
import Select from 'react-select';
import axios from "axios";

import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import List from './Components/List.jsx';

import DetailCard from './Components/DetailCard.jsx';
import Addform from './Components/Addform.jsx';

export const CardContext = createContext();

function App() {

  // states to store result list and filter list for industry filter
  const [list, setList] = useState([]);
  const [uniqueIndustries, setuniqueIndustries] = useState([]);

  // states for industry filter and search queries
  const [filter, setFilter] = useState("");
  const [query, setQuery] = useState("");

  // states to store card data and condition to open
  const [card, setCard] = useState(list[0]);
  const [cardOpen, setCardOpen] = useState(false);

  // state to store form opening condition
  const [formOpen,setFormOpen]=useState(false);

  axios.defaults.withCredentials=true;


  // fetch entire list on first render and set industry filter list on first render only
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BASE_URL}/products`)
    .then(result=> {

      result=result.data;

      setList(result); // set list

      // to compute all unique industries in alphabetical sorted manner
      let uniqueIndustry = [...new Set(result.map(item => item.IndustryVertical).sort((a, b) => {
        const charA = a.charAt(0).toLowerCase();
        const charB = b.charAt(0).toLowerCase();
    
        if (charA < charB) {
          return -1;
        } else if (charA > charB) {
          return 1;
        } else {
          return 0;
        }
      }))];

      uniqueIndustry=["ALL",...uniqueIndustry];

      // getting json for react-select
      let options=uniqueIndustry.map((str)=>({
        value:str,
        label:str
      }));


      setuniqueIndustries(options);

    })
    .catch(err=>console.log(err));
  },[]);


  // search function for both search query and filter
  function searchQuery(n,e){
    e.preventDefault();
    
    setTimeout(()=>{
      axios.get(`${process.env.REACT_APP_BASE_URL}/products?industry=${filter}&search=${query}`)
      .then(result=> {
        result=result.data;
        setList(result);
      })
      .catch(err=>console.log(err));
      
    },300);


  }


  return (
    <CardContext.Provider value={{ card, setCard, cardOpen, setCardOpen }}>
      <div className="bg-gray-300">

        <Navbar query={query} setQuery={setQuery} searchQuery={searchQuery}/>

        <div className='bg-slate-50 w-5/5 md:w-11/12 lg:4/5 mx-auto border-red-900 border-1 pb-20' style={{minHeight:window.innerHeight-70}}>
          <div className=''>
            <h1 className='text-[30px] md:text-[35px] lg:text-[50px] font-serif text-center '>STARTUP DIRECTORY......</h1>
            <h1 className='text-[15px] md:text-[23px] lg:text-[30px] font-serif text-center '>🚀 Discover Money-Making Startups</h1>

            <div className='mx-auto w-max my-2'>
              <form onSubmit={(e)=>searchQuery(1,e)}>
                <p className='block text-center text-2xl md:inline-block'>Industry Filters: &nbsp;</p>
                
                <Select id="filter" className='text-black inline-block text-sm md:text-base max-w-xs md:max-w-sm' options={uniqueIndustries} defaultValue={uniqueIndustries[0]} onChange={(option)=>setFilter(option.value)} isSearchable placeholder="Select an option"/>

                <button
                  className='bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-base px-3 py-1 mx-2 mb-2 focus:outline-none'
                >Filter</button>
              </form>


            </div>
          </div>

          <List list={list} />



          <div className='w-full md:w-4/5 lg:w-3/5 mx-auto rounded-lg mt-20'>
              <p className='text-3xl md:text-4xl lg:text-6xl text-center font-serif lg:my-5'>Having a Fresh Idea Startup?</p>
              <p className='text-base md:text-2xl lg:text-2xl text-center my-5'>Register your startup to know the world about your idea...</p>
              <button className={`bg-red-700 hover:bg-red-800 text-white font-medium rounded-lg text-xl px-5 py-2 mx-auto my-5 focus:outline-none block`} onClick={()=>setFormOpen(true)}>Register Now</button>
          </div>


        </div>

        {formOpen && <Addform length={list.length} formOpen={formOpen} setFormOpen={setFormOpen}/>}
        

        <Footer />
        <DetailCard />
      </div>
    </CardContext.Provider>
  );
}

export default App;
