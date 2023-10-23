import { Filters, ProductsContainer, PaginationContainer } from '../components';

import { customFetch } from '../utils';

const url = '/products';

export const loader = async ({ request }) => {
  // console.log(request);
  // const params = new URL(request.url).searchParams;
  // const search = params.get('order');
  // console.log(search);
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  // console.log(params);
  const response = await customFetch(url, { params });
  const products = response.data.data;
  const meta = response.data.meta;
  // console.log(meta);
  return { products, meta, params };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
