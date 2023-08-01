import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './App.css';

export function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();

        if (location.pathname === '/') {
            window.location.reload();
        } else {
            navigate('/');
        }
    }

    return (
        <div id="grey-area" className="grey-area">
            <a href="/" onClick={handleClick}>
                <h1 id="gulbahce-burger" className="gulbahce-burger">Gülbahçe Burger</h1>
            </a>
        </div>
    );
}
