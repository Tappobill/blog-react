import React from 'react';

function Slide(props) {
    return (
        <div>
            <div id="slide">
                <div id="slide-out" className="opacity-0">
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="opacity-0">
                    <ul>
                        <li>Posts</li>
                        <li>Accedi</li>
                        <li>Registrati</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Slide;