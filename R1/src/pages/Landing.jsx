import { Hero } from '../components';
import { customFetch } from '../utils';
import { FeaturedProducts } from '../components';

const url = '/products?featured=true';

export const loader = async () => {
  const response = await customFetch(url);
  // console.log(response);
  const products = response.data.data;
  // return response.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
