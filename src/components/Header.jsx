import React from 'react';
import { Navigation } from './Navigation'
import { NavLink } from 'react-router-dom'
import Layout from './Layout'


const Header = ({ Children, home }) => {
    
    return (
        <>
        <header className="header">
            <Layout>
                <Navigation />
                {home && (
                    <div className="hero">
                        <div className="hero-content">
                            <h1 className="hero-baseline-lead"><span>B</span><span>A</span><span>R</span><span>M</span><span>Y</span></h1>
                            <h2 className="hero-baseline-s">GRAFFITI CREW</h2>
                            <NavLink exact to="/crew" className="btn hero-more" activeClassName="cool" children="watch more" />
                        </div>
                    </div>
                )}
                { Children }
            </Layout>
        </header>
        </>
    );
};


export default Header;