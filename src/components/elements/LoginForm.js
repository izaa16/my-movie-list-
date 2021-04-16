import React, { useState } from 'react';
import "../scss/main.scss";


const LoginForm = ({ logging }) => {

    const [details, setDetails] = useState({ name: "", email: "", password: "" }); //obietk details lokalnie dla  formularza
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);
    }

    const clickHandler = e => {
        e.preventDefault();
        console.log(details);

        if (typeof logging === "function") {
            logging(true);
        } else {
            setError("details do not match!")
        }
        Login(details);
    }

    return (
        <form onSubmit={clickHandler}>
            <div className="content">
                {(error !== "") ? (<div className="error"> {error} </div>) : ""}
                <div className="forms-box">
                    <h2>Login</h2>
                    <label> Name: </label>
                    <input type="text" name="name" id="name" value={details.name}
                        onChange={e => setDetails({ ...details, name: e.target.value })} />
                    <div className="forms">
                        <label > Email: </label>
                        <input type="email" name="email" id="email" value={details.email}
                            onChange={e => setDetails({ ...details, email: e.target.value })} />
                    </div>
                    <div className="forms">
                        <label > Password: </label>
                        <input type="password" name="password" id="password" value={details.password}
                            onChange={e => setDetails({ ...details, password: e.target.value })} />
                    </div>
                    {/* <div className="checkbox">
                        <input type="checkbox" id="checkbox" name="checkbox" />
                        <label for="agree">I have read and agree to  <a href="#"> terms of service</a></label>
                    </div> */}
                    <div>
                        <input className="btn-primary" type="submit" value="LOGIN" />
                    </div>
                </div>
            </div>
        </form >

    );
}

export default LoginForm;