import React from 'react';
import { Jumbotron } from '../components/Jumbotron';
import CarouselSlide from '../components/CarouselSlide';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

function Home() {
 return (
    <main role="home">
    <Header />
    <Jumbotron />
    <div className="bg  pt-3 bg-light border-top border-2 border-black">
        <CarouselSlide />
    </div>
    <Footer />
    </main>
    );
};
export default Home