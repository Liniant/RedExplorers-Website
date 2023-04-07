
import "./pop.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {useState} from "react";

export default function PopularSearches({ searchValue}){
    const[countryName,setCountryName]= useState('')
    function getName(){
        searchValue(countryName)
    }


    return(

        <>
            <div className="pop">
                <div className="pop-text">Our Popular Searches</div>

                <div className="pop-sect">

                    <div className="pop-small">
                        <img src="https://images.pexels.com/photos/2499699/pexels-photo-2499699.jpeg?auto=compress&cs=tinysrgb&w=600" className="pop-image" alt="Missing"/>
                        <div className="pop-small-text">
                            <div className="pstext" style={{borderBottom : "1px solid gray"}}>You will love  the rentals here</div>
                            <div
                                className="pstext2"
                                onClick={
                                    (e)=>{
                                        setCountryName("Zimbabwe")
                                        getName()
                                    }


                                }>
                                <LocationOnIcon sx={{ color : "#FFA500" }}/>
                                <div className="pcountry">Zimbabwe</div>
                            </div>
                        </div>
                    </div>

                    <div className="pop-small">
                        <img src="https://images.pexels.com/photos/3609211/pexels-photo-3609211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="pop-image" alt="Missing"/>
                        <div className="pop-small-text">
                            <div className="pstext" style={{borderBottom : "1px solid gray"}}>Cheapest Rentals In Europe</div>
                            <div className="pstext2"
                                 onClick={
                                     (e)=>{
                                         setCountryName("Germany")
                                         getName()
                                     }


                                 }>
                                <LocationOnIcon sx={{ color : "#FFA500" }}/>
                                <div className="pcountry">Germany</div>
                            </div>
                        </div>
                    </div>

                    <div className="pop-small">
                        <img src="https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="pop-image" alt="Missing"/>
                        <div className="pop-small-text">
                            <div className="pstext" style={{borderBottom : "1px solid gray"}}>You will love  the rentals here</div>
                            <div className="pstext2"
                                 onClick={
                                     (e)=>{
                                         setCountryName("Egypt")
                                         getName()
                                     }


                                 }>
                                <LocationOnIcon sx={{ color : "#FFA500" }}/>
                                <div className="pcountry">Egypt</div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </>
    )
}