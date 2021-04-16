import React, { useState } from 'react';

const MainPage = ({ logging, details }) => {

    const [user, setUser] = useState({ name: "", email: "" });

    const Logout = () => {
        setUser({ name: "", email: "" });
    }

    const logoutHandler = e => {
        e.preventDefault();

        if (typeof logging !== "function") {
            logging(false);
        }
        Logout(details);
    }

    return (
        <>
            <h2> Welcome, <span> {user.name} </span></h2>
            <button onClick={logoutHandler}> Logout</button>
        </>
    );
};

export default MainPage;