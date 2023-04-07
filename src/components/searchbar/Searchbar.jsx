import "./search.css"
import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";

const Searchbar=({  searchValue ,  classname1 = "input", classname2 = "s-icon", text="Search Country"})=>{
    const[countryName,setCountryName]= useState('')
     function getName(){
        searchValue(countryName)
   }

    return(
        <>

        <div className="search">
            <div className="scontainer">


                <input type="text" placeholder={text} className={classname1} onChange={(e)=>setCountryName(e.target.value)}/>
                {/*default for input : input*/}
                {/*default for icon : s-icon*/}
                <SearchIcon className={classname2} onClick={getName} />
            </div>
        </div>
            {/*{countryName}*/}
        </>)



}

export default Searchbar;


