import { HashRouter as Router , Routes , Route } from "react-router-dom"
import Main from "./pages/Main";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ServicesCompare from "./pages/ServicesCompare";
import ServicesCompares from "./pages/ServicesCompares";

export default function App(){
    return(
        <>
            {/*Defining the main routes of the application using react-router dom*/}
            <Router>
                <Routes>
                    <Route  exact path ="" element={<Main/> } />
                    <Route exact path ="/home" element={<Main/>} />
                    <Route path ="/about" element={<AboutUs/>}/>
                    <Route path ="/services" element={<Services/>}/>
                    <Route path ="/service" element={<ServicesCompares/>}/>
{/*                       <Route path ="/service" element={<ServicesCompares/>}/> */}
                </Routes>
            </Router>
        </>
    )
}