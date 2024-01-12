import React from 'react';

function Header(props) {
    return (
        <div>
            <nav className="navbar">
                <div>
                    Logo
                </div>

                <div className="menu" id="slide-in">
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="nav-right">
                    <div className="mtop-right">Posts</div>
                    <div className="mtop-right">Accedi</div>
                    <div className="mtop-right">Registrati</div>
                </div>
            </nav>
        </div>
    );
}

export default Header;