import React from 'react';
import Layout from './Layout';



const About = () => {
    return (
        <section className="about" id="about">
            <Layout>
                <AboutContent 
                    left={<AboutContentLeft className="about-content left" />}
                    right={<AboutContentRight className="about-content right" />}
                />  
            </Layout>
        </section>
    );
};


const AboutContent = ({ left, right }) => {
    return (<>
        <div className="grid">
            <>{left}</>
            <>{right}</>
        </div>
    </>)
}


const AboutContentLeft = ({ className }) => {
    return (
        <div className={className}>
            <p className="img-content"><img src="./media/about/1.jpg" alt="image1" loading="lazy" /></p>
            <p className="img-content"><img src="./media/about/2.jpg" alt="image1" loading="lazy" /></p>
        </div>
    )
}

const AboutContentRight = ({ className }) => {
    return (
        <div className={className}>
            <h3 className="title">About</h3>
            <h2 className="about-baseline">Lorem Ipsum</h2>
            <div className="about-desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure mollitia reprehenderit praesentium corrupti asperiores dolor! Perferendis sed labore, veniam modi aut, quos necessitatibus animi unde fuga.</p>
            </div> 
        </div>
    )
}

export default About;