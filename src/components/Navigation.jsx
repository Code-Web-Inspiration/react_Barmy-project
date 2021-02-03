import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        <>
        <nav className="navBar">
            <ul className="navList">
                <Li exat to="/" activeClass="activeLink" label="Accueil" />
                <Li exat to="/crew" activeClass="activeLink" label="Crew" />
                <Li exat to="/gallery" activeClass="activeLink" label="Gallery" />
                <Li exat to="/contact" activeClass="activeLink" label="Contact" />
            </ul>
            <SocialNetwork />
        </nav>
        </>
    )
}

const Li = ({ to, activeClass, label }) => {
    return (<>
        <li className="navItem">
            <NavLink exact to={to} className="navLink" activeClassName={activeClass}>
                {label}
            </NavLink>
        </li>
    </>)
}

const SocialNetwork = () => {
    return (
        <>
            <div className="network">
                <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <box-icon type='logo' name='facebook'></box-icon>
                </a>
                <a href="http://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                    <box-icon type='logo' name='pinterest-alt'></box-icon>
                </a>
                <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <box-icon type='logo' name='youtube'></box-icon>
                </a>
            </div>
        </>
    )
}

