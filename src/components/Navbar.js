import React from 'react';

const Navbar = () => {

    return (
        <>
            <div className="fakeNavbar" />
            <nav className="navBar">
                <div>
                    <a href="./index.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width={120} height={120} fill="currentColor" className="bi-bi-graph-up" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </a></div><a href="./index.html">
                </a><ul className="navBarLinks"><a href="./index.html">
                </a><li><a href="./index.html">
                </a><a href=" # "> profesion </a>
                    </li>
                    <li>
                        <a href=" # "> portafolio </a>
                    </li>
                    <li>
                        <a href="#sectionTable"> experiencia </a>
                    </li>
                    <li>
                        <a href=" # "> contacto </a>
                    </li>
                    <li>
                        <a href="#footer"> Sobre Mí </a>
                    </li>
                    <li>
                        <a href="counter.html"> Contador </a>
                    </li>
                    <li>
                        <div className="checkBoxTheme">
                            <label htmlFor="inputTheme" id="labelTheme"> Light </label>
                            <input type="checkbox" id="inputTheme" />
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;