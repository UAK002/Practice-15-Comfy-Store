import { Link, useLoaderData } from 'react-router-dom';
import { customFetch, formatPrice, generateAmountOptions } from '../utils';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../Features/cart/cartSlice';

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  // console.log(response);

  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, colors, company, description, price } =
    product.attributes;
  const dollarsAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const dispatch = useDispatch();

  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    company,
    price,
    productColor,
    amount,
  };

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCTS */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-xl lg:w-full"
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* COLORS */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    type="button"
                    key={color}
                    className={`badge w-6 h-6 mr-2  ${
                      color === productColor && 'border-2 border-secondary '
                    }`}
                    style={{ background: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          {/*AMOUNT */}
          <div className="form-control w-full max-w-xs">
            <label htmlFor="amount" className="label">
              <h4 className="text-md font-medium tracking-wider capitalize ">
                amount
              </h4>
            </label>
            <select
              id="amount"
              value={amount}
              onChange={handleAmount}
              className="select select-secondary select-bordered select-md"
            >
              {generateAmountOptions(20)}
            </select>
          </div>
          {/*CART */}
          <div className="mt-10">
            <button className="btn btn-secondary" onClick={addToCart}>
              ADD TO BAG
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;

/*

*/
