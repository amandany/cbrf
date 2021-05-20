import React from "react";
import './navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <Link to="/">
                <button type="button" className="btn btn-primary btn-lg">
                    Список валют
                </button>
            </Link>

            <h1>КОНВЕРТЕР ВАЛЮТ</h1>

            <Link to="/converter">
                <button type="button" className="btn btn-primary btn-lg">
                    Конвертер
                </button>
            </Link>

        </header>
    )
}

export default Navbar;