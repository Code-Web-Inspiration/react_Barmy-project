import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export function Navigation () {

    const [btnMenu, setBtnMenu] = useState(false)
    const [navWidth, setNavWidth] = useState(window.innerWidth)

    const slideMenu = function () {
        setBtnMenu(iv => !iv)
    }

    useEffect(() => {

        const changeNav = function () {
            setNavWidth(window.innerWidth)
            if (window.innerWidth > 550) {
                setBtnMenu(false)
            }
        }

        window.addEventListener('resize', changeNav)
        return () => {
            window.removeEventListener('resize', changeNav)
        };
    }, []);
    

    return (
        <>
        <nav className="navBar">
            <h2 className="logo">
                <Link exact to="/"><box-icon name='home' size='md'></box-icon></Link><span>barmy</span>
            </h2>
                {(btnMenu || navWidth > 550) && (
            <ul className="navList">
                <li className="navItem"><NavLink exact to="/" className="navLink" activeClassName="activeLink" children={"Accueil"} /></li>
                <li className="navItem"><NavLink to="/crew" className="navLink" activeClassName="activeLink" children={"Crew"} /></li>
                <li className="navItem"><NavLink to="/gallery" className="navLink" activeClassName="activeLink" children={"Gallery"} /></li>
                <li className="navItem"><NavLink to="/contact" className="navLink" activeClassName="activeLink" children={"Contact"} /></li>
                <li className="navItem">
                    <div className="networkContent">
                        <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <box-icon type='logo' name='facebook' size="md"></box-icon>
                        </a>
                        <a href="http://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                            <box-icon type='logo' name='pinterest-alt' size="md"></box-icon>
                        </a>
                    </div>
                </li>
            </ul>
            )}

            <i className="btn-menu" onClick={slideMenu}>
            <box-icon name='menu' size="md"></box-icon>
            </i>
        </nav>
        </>
    )
}


