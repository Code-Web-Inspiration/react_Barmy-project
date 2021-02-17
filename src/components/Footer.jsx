import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Layout from './Layout';
import { PostData } from '../data/Data';


function Footer ({home}) {

    return (
        <footer className="footer">
            <Layout>
                {home && (
                    <>
                    <Gallery />
                    <div className="wrap">
                        <h2 className="footer-baseline">JOIN OUR CREW</h2>
                        <NavLink exact to="/crew" className="btn footer-more" children="watch more" />
                        <p className="copy">&copy; copyright 2020 all rights reserved <br/><span>CODE WEB INSPIRATION</span></p>
                    </div>
                    </>
                )}
            </Layout>
        </footer>
    );
};

const Gallery = () => {

    const MAX_ITEM = 4

    const [posts, setPosts] = useState([])
    useEffect(() => {
        const datas = PostData
        if (datas) {
            const limit = datas.length > MAX_ITEM ? parseInt((MAX_ITEM * 2), 10) : datas.length
            setPosts(datas.slice(-limit))
        } else {
            return new Error(datas)
        }
    }, []);

    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 , itemsToScroll: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: MAX_ITEM }
    ];
    return (
        <div className="grid">
            <Carousel breakPoints={breakPoints}>
            {posts.map(post =>
              (<div className="img-content" key={post.id}><img src={`./media/gallery/${post.id}.jpg`} alt={post.title} /></div>)
            )}
            </Carousel>
        </div>
    );
}




export default Footer;
