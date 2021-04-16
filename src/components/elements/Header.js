import React from 'react';
import { Link } from "react-router-dom";
import "../scss/main.scss";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="content">
                    <ul className="navigation">
                        <div className="brand">
                            <img src="https://api.freelogodesign.org/files/7064c3ed5347466abf68ae0bda4649b4/thumb/logo_200x200.png?v=637538262030000000 " />
                        </div>
                        <li>
                            <Link to="/watch"> To watch</Link>
                        </li>
                        <li>
                            <Link to="/watched"> Watched</Link>
                        </li>
                        <li>
                            <Link to="/recomendations"> Recomendations</Link>
                        </li>
                        <li>
                            <Link to="/settings"> Settings</Link>
                        </li>
                        <li>
                            <Link to="/logout" className="btn"> Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

    );
};

export default Header;