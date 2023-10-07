import { Link } from 'react-router-dom';

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2  gap-24">
      {/* INFO */}
      <div>INFO</div>
      {/* CAROUSEL */}
      <div>CAROUSEL</div>
    </div>
  );
};
export default Hero;
