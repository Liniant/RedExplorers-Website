import "./contact.css";
import Button from "../button/Button";
import { useState } from "react";

export default function Contact() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const data = {
            firstName,
            lastName,
            email,
            phone,
            message,
        };

        fetch("/send-email.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                alert("Message sent successfully!");
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Failed to send message.");
            });
    };


function validateForm(event) {
  event.preventDefault();
  let isValid = true;

  // Validate first and last name
  const nameRegex = /^[A-Za-z]+$/;
  if (!firstName.match(nameRegex) || !lastName.match(nameRegex)) {
    alert('Please enter a valid first and last name.No numbers or symbols should be included');
    isValid = false;
  }

  // Validate email
  if (!email.includes('@')) {
    alert('Please enter a valid email');
    isValid = false;
  }

  // Validate message
  if (message.length <= 5) {
    alert('Please enter a message that is at least 5 characters long');
    isValid = false;
  }

  // If form is valid, submit it
  if (isValid) {
    handleFormSubmit();
  }
}


    return (
        <>
            <div className="contact">
                <div style={{color :"#8CDDCD"}}>PLACHOLDER</div>
                <div className="c-header">GET IN TOUCH WITH US</div>
                <div className="c-sect">
                    <div className="c-image-side">
                        <img src="./assets/ty.png" alt="Missing" className="c-image" />
                    </div>
                    <div className="c-form-side">
                        <div className="alt-form">
                            <div style={{color :"#636060"}}>PLACHOLDER</div>
                            <div className="formwrapper">
                                <form onSubmit={handleFormSubmit}>
                                    <div className="f1">
                                        <div className="c-section">
                                            <label htmlFor="firstName">First Name</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                className="c-input"
                                                placeholder="First Name"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                required
                                            />

                                        </div>
                                        <div className="c-section">
                                            <label htmlFor="lastName">Last Name</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                className="c-input"
                                                placeholder="Last Name"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="f2">
                                        <div className="c-section">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="c-input"
                                                placeholder="Your email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="c-section">
                                            <label htmlFor="phone">Phone</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                className="c-input"
                                                placeholder="Your phone"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="f3">
                                        <label htmlFor="tarea">Message</label>
                                        <textarea
                                            id="tarea"
                                            className="c-area"
                                            placeholder="Your message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="f4" onClick={validateForm}>
                                        <Button text="Message" type="submit" />
                                    </div>

                                </form>

                            </div>
                            <div style={{color :"#636060"}}>PLACEHOLDER</div>
                        </div>
                    </div>
                </div>
                <div style={{color :"#8CDDCD"}}>PLACHOLDER</div>

            </div>
        </>
    );
}
