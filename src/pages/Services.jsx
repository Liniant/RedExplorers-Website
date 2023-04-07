import "./main.css"
import Navigation from "../components/navigation/Navigation";
import Searchbar from "../components/searchbar/Searchbar";
import Map from "../components/map/Map";
import CountryFacts from "../components/country-fact/CountryFacts";
import Piechart from "../components/piechart/PieChart";
import {useState} from "react";
import Map2 from "../components/map/Map2";
import React from "react";
import PopularSearches from "../components/popular-searches/PopularSearches";


export default function Services(props){
    const[details,setDetails]= useState('')
    function  searchInput(value){
        setDetails(value)
    }
    const bg = {
        backgroundImage : 'url("assets/dot.png")',
        backgroundRepeat : "no-repeat",
        backgroundSize : "cover"
    }


    return(
        <>
            <div className="services">
                <div className="shero">
                    <Navigation/>
                    <div className="shero-text">Know your next destination</div>
                </div>
                <div className="where">
                    <div className="where-text" style={bg}>
                        <div className="wtext" ><span className="wspan">Where do</span> you wanna <br/>go next ?</div>
                    </div>
                    <div className="wstext">Before you even plan about moving to another city or country, it is very important to first check and have an idea of the population size, languages spoken there as well as the capital city.Check this out before you plan your next destination.
                    </div>
                </div>
                <Searchbar searchValue={searchInput} classname1="custom-input" classname2="custom-icon" text="Search for countries" />

                {details ? "  " : <PopularSearches searchValue={searchInput} />  }
                {details ? <Map2 countryName={details}/> : <Map/> }
                <div  style={{ backgroundColor : "##0D716B",paddingTop: "15px" }}>
                    <CountryFacts country={details}/>
                </div>

                <Piechart country={details} />

            </div>
        </>
    )
}