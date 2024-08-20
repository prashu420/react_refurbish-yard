import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Brands from './Brands';
import Services from './Services';
import Branches from './Branches';
import Contact from './Contact';
import NearMe from './NearMe';

function Home() {
  return (
    <>
      <Header />
    
      <section id="services">
        <About />
      </section>
      <section id="brands">
        <Brands />
      </section>
      <section id="about">
        <Services />
      </section>
      
      <section id="nearme">
        <NearMe />
      </section>
      <section id="branches">
        <Branches />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default Home;
