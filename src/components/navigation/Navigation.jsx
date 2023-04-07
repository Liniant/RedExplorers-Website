import "./nav.css"
import {Link} from "react-router-dom";

//Reusable naviagtion that will be put on all pages
export default function Navigation(){
    return(
        <div className="nav">
            <div className="container">
                <img src="assets/Logo.png" className="logo"/>
                <ul className="list">
                    <li className="list-item"><Link to="/home" className="link">Home</Link></li>
                    <li className="list-item"><Link to="/services" className="link">Country Details</Link></li>
                    <li className="list-item"><Link to="/service" className="link">Cost of Living</Link></li>
                    <li className="list-item"><Link to="/about" className="link">About Us</Link></li>
                </ul>
            </div>

        </div>
    )
}