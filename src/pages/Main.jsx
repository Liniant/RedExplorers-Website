import "./main.css"
import Navigation from "../components/navigation/Navigation";
import {Link} from "react-router-dom";

export default function Main(){
    return(
        <>
            <div className="main">
                <Navigation/>
                <div className="main-section">
                    <div className="mtext-big">Leave your mark on all <br/>over the world</div>
                    <div className="btn"><Link to="/services" className="link linka">Check Our Services</Link></div>
                </div>
            </div>

        </>
    )
}