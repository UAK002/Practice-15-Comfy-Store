import { Link } from 'react-router-dom';

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      {/* 

- Hero comp > from CBF of Map return > div.carousel-item > img src ={ image} 4( R-B, H-F, W-80, O-C) class= rounded-box, h-full, w-80, object-cover
- Hero comp > div.grid > div > G h1 5(M-w-2, T-4, F-b, T-t, S:T-6 )class=max-w-2xl, text-4xl, font-bold, tracking-tight, sm:text-6xl > {we are changing the way people shop}
- Hero comp > div.grid > div > G p (M-8, M-w-x, T-l, L-8, ) class=mt-8, max-w-xl, text-lg, leading-8,
- Hero comp > div.grid > div > G div class = mt-10
- Hero comp > div.grid > div > W div.mt-10 > render Link comp. to="/products" class= btn, btn-primary > {Our Products}
*/}
      {/* INFO */}
      <div>
        <h1 className="text-4xl max-w-2xl font-bold tracking-tight sm:text-6xl">
          we are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At magni ut
          soluta eius amet ad nisi sit consequatur similique, quidem, impedit
          inventore repudiandae! Repudiandae, reprehenderit nam voluptate
          recusandae modi doloremque.
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">
            our priducts
          </Link>
        </div>
      </div>
      {/* CAROUSEL */}
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image) => {
          return (
            <div className="carousel-item" key={image}>
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
