import React from 'react';
import { Navigation } from './Navigation'
import Layout from './Layout'


const Header = () => {
    return (
        <>
        <header className="header">
            <Layout>
                <Navigation />
                <Hero />
            </Layout>
        </header>
        </>
    );
};

const Hero = () => {
    return (
        <>
        <div className="hero">
            <div className="hero-content">
                <h1 className="hero-baseline-lead"><span>B</span><span>A</span><span>R</span><span>M</span><span>Y</span></h1>
                <h2 className="hero-baseline-s">GRAFFITI CREW</h2>
                <a href="http://www.pinterest.com" className="btn hero-more">watch more</a>
            </div>
        </div>
        </>
    )
}

export default Header;