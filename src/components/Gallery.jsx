import React from 'react';
import Layout from './Layout';

const Gallery = () => {
    return (
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
    );
};


export default Gallery;
