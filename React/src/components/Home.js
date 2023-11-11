import React from 'react';
import '../styles/Home.css';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  return (
    <div >
      <Header />
      <div>
        <main className="content">
          <section className="description">
            <h1>Welcome to Mercedes-Benz </h1>
            <p>Explore our state-of-the-art platform designed for Mercedes employees.</p>
          </section>
          <section className="cars">
            <img src="https://c4.wallpaperflare.com/wallpaper/931/875/651/car-mercedes-benz-mercedes-amg-mercedes-amg-gt-wallpaper-preview.jpg" alt="Mercedes-Benz Cars" />
          </section>
        </main>
      </div>
      <div>
      
      </div>
      <Footer />
    </div>
  );
};

export default Home;
