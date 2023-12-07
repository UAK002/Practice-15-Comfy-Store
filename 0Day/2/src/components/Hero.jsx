import { Link } from 'react-router-dom';

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      {/* 
- component folder > Create Hero.jsx file and Hero comp.
- index.js > export Hero comp.
- Landing.jsx > import Hero comp.
- Landing comp. > JSX > G react fragments > render Hero comp.
- Hero.jsx > import Link of RRD
- Hero.jsx > for Images: Import images from the assets folder from readme.copy all the code for import of Hero1/2/3/4 and paste it
- Hero comp > JSX > div 5( G, G-C-1, lg-G-C-2 G-24, I-C) class = grid grid-cols-1 lg:grid-col-2 gap-24 items-center
- Hero comp > JSX > W div.grid > Comment INFO
- Hero comp > JSX > W div.grid > div > { info}
-Hero comp > JSX > div.grid > Comment CAROUSEL
- Hero comp > JSX > div.grid > div 8(H, H-28, L:C, C-C, p, S-x-4, B-N, R-B ) class= hidden, h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box
- Hero.jsx > - Creating an array carouselImages and place all images as items
- Hero comp > div.hidden > iterate over carouselImages using map and refer each item as image
- Hero comp > from CBF of Map return > div. key={image} class =carousel-item
- Hero comp > from CBF of Map return > div.carousel-item > img src ={ image} 4( R-B, H-F, W-80, O-C) class= rounded-box, h-full, w-80, object-cover
- Hero comp > div.grid > div > G h1 5(M-w-2, T-4, F-b, T-t, S:T-6 )class=max-w-2xl, text-4xl, font-bold, tracking-tight, sm:text-6xl > {we are changing the way people shop}
- Hero comp > div.grid > div > G p (M-8, M-w-x, T-l, L-8, ) class=mt-8, max-w-xl, text-lg, leading-8,
- Hero comp > div.grid > div > G div class = mt-10
- Hero comp > div.grid > div > W div.mt-10 > render Link comp. to="/products" class= btn, btn-primary > {Our Products}
*/}

      {/* INFO */}
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          explicabo rerum illo natus similique dolore fuga eum sequi! Magnam,
          architecto porro eaque quia et pariatur aperiam suscipit, iste
          doloremque illum rem laborum ab at consequatur. Quia, excepturi. Odit,
          ut consequuntur?
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      {/* CAROUSEL */}
      <div className=" hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 rounded-box bg-neutral">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
