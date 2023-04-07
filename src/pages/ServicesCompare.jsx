import "./main.css"
import Navigation from "../components/navigation/Navigation";
import Button from "../components/button/Button";
import Chart from "../components/barchart/Barchart";
import {useState} from "react";
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";
import React from "react";
import {useEffect} from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./col.css"


export default function ServicesCompare(){
    // Create state maagemet for the variables
    const[show,setShow] = useState(false)
    const[changing,setChange] = useState("")
    const[country1,setCountry1]= useState(null)
    const[country2,setCountry2]= useState(null)
    const[countrydetails1,setCountrydetails1]= useState(null)
    const[countrydetails2,setCountrydetails2]= useState(null)
    const[transport,setTransport] = useState(0)
    const[accomodation,setAccomodation] = useState(0)
    const[food,setFood] = useState(0)
    const[item1,setItem1]=useState(0)
    const[item2,setItem2]=useState(0)
    const[item3,setItem3]=useState(0)
    const[item4,setItem4]=useState(0)
    const[item5,setItem5]=useState(0)
    const[item6,setItem6]=useState(0)
    const[item7,setItem7]=useState(0)
    const[item8,setItem8]=useState(0)
 ///Variables for second country
    const[transport2,setTransport2] = useState(0)
    const[accomodation2,setAccomodation2] = useState(0)
    const[food2,setFood2] = useState(0)
    const[citem1,setCitem1] = useState(0)
    const[citem2,setCitem2] = useState(0)
    const[citem3,setCitem3] = useState(0)
    const[citem4,setCitem4] = useState(0)
    const[citem5,setCitem5] = useState(0)
    const[citem6,setCitem6] = useState(0)
    const[citem7,setCitem7] = useState(0)
    const[citem8,setCitem8] = useState(0)

    const values=[item1,item2,item3,item4,item5,item6,item7,item8,citem1,citem2,citem3,citem4,citem5,citem6,citem7,citem8]




    const data = [
        { "expense" :"Accomodation","first_country":accomodation,"second_country":accomodation2},
        { "expense" :"Food","first_country":food,"second_country":food2},
        { "expense" :"Transportation","first_country":transport,"second_country":transport2}

    ];
    function handleClick(){
        setChange(country1+country2)
        setShow(true)
    }


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cef447cfe7mshe41b1b3f641f232p1e8a5cjsnf61aded1cef6',
            'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
        }
    };

    useEffect(() => {
        (async () => {
            let endpoint1 = `https://cost-of-living-and-prices.p.rapidapi.com/prices?country_name=Zimbabwe`
            let endpoint2 = `https://cost-of-living-and-prices.p.rapidapi.com/prices?country_name=Mauritius`

            if (country1 && country2) {
                endpoint1 = `https://cost-of-living-and-prices.p.rapidapi.com/prices?country_name=${country1}`
                endpoint2 = `https://cost-of-living-and-prices.p.rapidapi.com/prices?country_name=${country2}`
            }
            const response1 = await fetch(endpoint1,options);
            const response2 = await fetch(endpoint2,options);
            const data1 = await response1.json();
            const data2 = await response2.json();
            setCountrydetails1(data1[0])
            setCountrydetails2(data2[0])

            let transport=  Number(data1["prices"][47]["usd"]["avg"])*10 + Number(data1["prices"][48]["usd"]["avg"])*10 + Number(data1["prices"][49]["usd"]["avg"])*10
            let accomodation= Number(data1["prices"][0]["usd"]["avg"])
            let food = Number(data1["prices"][18]["usd"]["avg"])*4  + Number(data1["prices"][19]["usd"]["avg"])*4 + Number(data1["prices"][20]["usd"]["avg"])*4 + Number(data1["prices"][21]["usd"]["avg"])*4

            //individual items
            let i1 = Number(data1["prices"][43]["usd"]["avg"]);
            let i2 = Number(data1["prices"][36]["usd"]["avg"]);
            let i3= Number(data1["prices"][13]["usd"]["avg"]);
            let i4= Number(data1["prices"][17]["usd"]["avg"]);
            let i5= Number(data1["prices"][15]["usd"]["avg"]);
            let i6= Number(data1["prices"][35]["usd"]["avg"]);
            let i7= Number(data1["prices"][48]["usd"]["avg"]);
            let i8= Number(data1["prices"][50]["usd"]["avg"]);

            let transport2=  Number(data2["prices"][47]["usd"]["avg"])*10 + Number(data2["prices"][48]["usd"]["avg"])*10 + Number(data2["prices"][49]["usd"]["avg"])*10
            let accomodation2= Number(data2["prices"][0]["usd"]["avg"])
            let food2 = Number(data2["prices"][18]["usd"]["avg"])*4  + Number(data2["prices"][19]["usd"]["avg"])*4 + Number(data2["prices"][20]["usd"]["avg"])*4 + Number(data2["prices"][21]["usd"]["avg"])*4
            let ic1 = Number(data2["prices"][43]["usd"]["avg"]);
            let ic2 = Number(data2["prices"][36]["usd"]["avg"]);
            let ic3= Number(data2["prices"][13]["usd"]["avg"]);
            let ic4= Number(data2["prices"][17]["usd"]["avg"]);
            let ic5= Number(data2["prices"][15]["usd"]["avg"]);
            let ic6= Number(data2["prices"][35]["usd"]["avg"]);
            let ic7= Number(data2["prices"][48]["usd"]["avg"]);
            let ic8= Number(data2["prices"][50]["usd"]["avg"]);

            //Assign the values to thier variables
            setAccomodation(accomodation)
            setFood(food)
            setTransport(transport)

            setAccomodation2(accomodation2)
            setFood2(food2)
            setTransport2(transport2)

            //setting individual items
            setCitem1(ic1)
            setCitem2(ic2)
            setCitem3(ic3)
            setCitem4(ic4)
            setCitem5(ic5)
            setCitem6(ic6)
            setCitem7(ic7)
            setCitem8(ic8)

            setItem1(i1)
            setItem2(i2)
            setItem3(i3)
            setItem4(i4)
            setItem5(i5)
            setItem6(i6)
            setItem7(i7)
            setItem8(i8)







        })();
    }, [changing]);


    return(
        <>
            <div className="services-comp">
                <div className="serviceshero">
                    <Navigation/>
                    <div className="shero-text">Dont rush, compare first</div>
                </div>
                <div className="col-sect">
                <div className="smain-text">THE COST OF LIVING</div>
                <div className="compares">
                    <input type="text" className="f-inputs" placeholder="Search Country" onChange={(e)=>{ setCountry1(e.target.value)}}/>
                    <div onClick={()=>{handleClick()}} style={{padding :"15px"}}><Button text='Compare' /></div>
                    <input type="text" className="f-inputs" placeholder="Search Country" onChange={(e)=>{ setCountry2(e.target.value)}}/>
                </div>
                <div className="f-section">
                    <div className="first-text">THE COST OF LIVING IN </div>
                    <div className="second-text">{country1} VS {country2}</div>
                </div>
                </div>
                {show ? <div style={{ marginLeft :"26%",marginTop:"5%"}}>
                    {changing}

                    <BarChart width={600} height={400} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="expense" />
                        <YAxis label={{ value : "Cost in USD", position:"left", angle:-90}} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="first_country" fill="#FFA500" />
                        <Bar dataKey="second_country" fill="#3880D0" />
                    </BarChart>
                </div> : <div>WAITING FOR COMPARISONS.....</div> }
                <h2 style={{textAlign: "center",fontWeight:"bold"}}>Cost of living Breakdown</h2>
                <div className="breaksect">
                    <div style={{ color :"#0D716B",marginTop:"2%"}} >PLACEHOLDER</div>
                    <div className="break">
                        <TableContainer component={Paper} >
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell align="left">Expenses</TableCell>
                                        <TableCell align="right">{country1}</TableCell>
                                        <TableCell align="right">{country2}</TableCell>
                                        <TableCell align="right">Percentage Difference</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell>
                                            <img src="./assets/i1.png" alt="Missing"/>
                                        </TableCell>
                                        <TableCell component="th" scope="row" > Taxi, price for 1 hour Waiting, Normal Tariff  </TableCell>
                                        <TableCell align="center" >{ item1 }</TableCell>
                                        <TableCell align="center" > { citem1 } </TableCell>
                                        <TableCell align="center" > { ((citem1 - item1)/item1 * 100).toFixed(2) }% </TableCell>
                                    </TableRow>
                                    <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row" > <img src="https://img.icons8.com/dotty/80/null/money-bag.png"/> </TableCell>
                                        <TableCell component="th" scope="row" > Average Monthly Net Salary, After Tax </TableCell>
                                        <TableCell align="center" >{ item2}</TableCell>
                                        <TableCell align="center" > { citem2 } </TableCell>
                                        <TableCell align="center" > { ((citem2 - item2)/item2 * 100).toFixed(2) }% </TableCell>
                                    </TableRow>

                                    <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row" > <img src="https://img.icons8.com/dotty/80/null/egg-basket.png"/> </TableCell>
                                        <TableCell component="th" scope="row" > Eggs, 12 pack  </TableCell>
                                        <TableCell align="center" >{ item3 }</TableCell>
                                        <TableCell align="center" > { citem3 } </TableCell>
                                        <TableCell align="center" > { ((citem3 - item3)/item3 * 100).toFixed(2) }% </TableCell>
                                    </TableRow>
                                    <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row"><img src="https://img.icons8.com/ios/50/null/milk-bottle.png"/></TableCell>
                                        <TableCell component="th" scope="row" > Milk, Regular,1 liter </TableCell>
                                        <TableCell align="center" >{ item4 }</TableCell>
                                        <TableCell align="center" > { citem4} </TableCell>
                                        <TableCell align="center" > { ((citem4 - item4)/item4 * 100).toFixed(2) }% </TableCell>
                                    </TableRow>
                                    <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row"><img src="https://img.icons8.com/ios/50/null/toast.png"/></TableCell>
                                        <TableCell component="th" scope="row" > Loaf of Fresh White Bread, 0.5 kg </TableCell>
                                        <TableCell align="center" >{ item5}</TableCell>
                                        <TableCell align="center" > { citem5} </TableCell>
                                        <TableCell align="center" > { ((citem5 - item5)/item5 * 100).toFixed(2) }% </TableCell>
                                    </TableRow>
                                    <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row" > <img src="https://img.icons8.com/ios/50/null/restaurant-table.png"/></TableCell>
                                        <TableCell component="th" scope="row" > Meal in an Inexpensive Restaurant </TableCell>
                                        <TableCell align="center" >{ item6}</TableCell>
                                        <TableCell align="center" > { citem6 } </TableCell>
                                        <TableCell align="center" > { ((citem6 - item6)/item6* 100).toFixed(2) }% </TableCell>
                                    </TableRow>
                                    <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row" ><img src="https://img.icons8.com/wired/64/null/bounced-check.png"/> </TableCell>
                                        <TableCell component="th" scope="row" >Basic utilities for 85 square meter Apartment including Electricity, Heating or Cooling, Water and Garbage </TableCell>
                                        <TableCell align="center" >{ item7 }</TableCell>
                                        <TableCell align="center" > { citem7 } </TableCell>
                                        <TableCell align="center" > { ((citem7 - item7)/item7 * 100).toFixed(2) }% </TableCell>
                                    </TableRow>
                                    <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row" ><img src="https://img.icons8.com/dotty/80/null/internet-browser.png"/></TableCell>
                                        <TableCell component="th" scope="row" > Internet, 60 Mbps or More, Unlimited Data, Cable/ADSL</TableCell>
                                        <TableCell align="center" >{ item8 }</TableCell>
                                        <TableCell align="center" > { citem8} </TableCell>
                                        <TableCell align="center" > { ((citem8 - item8)/item8 * 100).toFixed(2) }% </TableCell>

                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div style={{ color :"#0D716B",marginTop:"2%"}} >PLACEHOLDER</div>
                </div>





            </div>

        </>
    )

}

