import React from 'react';
import Layout from '../components/Layout'
import Header from "../components/Header";
import Footer from '../components/Footer';

function Home() {


    return (
        <>
        <Header home />
        <section className="about" id="about">
            <Layout>
                <div className="grid">
                    <div className="about-content left">
                        <p className="img-content"><img src="./media/about/pexels-brett-sayles-1152188.jpg" alt="brett-sayles" loading="lazy" /></p>
                        <p className="img-content"><img src="./media/about/pexels-mali-maeder-802195.jpg" alt="mali-maeder" loading="lazy" /></p>
                    </div>
                    <div className="about-content right">
                        <h3 className="title">About</h3>
                        <h2 className="about-baseline">Lorem Ipsum</h2>
                        <div className="about-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure mollitia reprehenderit praesentium corrupti asperiores dolor! Perferendis sed labore, veniam modi aut, quos necessitatibus animi unde fuga.</p>
                        </div>
                    </div>
                </div>
            </Layout>
        </section>
        <section className="gallery" id="gallery">
            <Layout>
                <div className="grid">
                    <h2 className="gallery-baseline">Lorem Ipsum</h2>
                    <div className="gallery-desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Iure mollitia reprehenderit praesentium corrupti
                        asperiores dolor Perferendis sed labore.</p>
                    </div>
                </div>
            </Layout>
        </section>
        <Footer home />
        </>
    );
}


export default Home;