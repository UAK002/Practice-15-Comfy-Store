import { useSelector } from 'react-redux';
import { CartTotals, CartItemList, SectionTitle } from '../components';
import { Link } from 'react-router-dom';

const Cart = () => {
  // temp
  const user = null;

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  // console.log(numItemsInCart);

  if (numItemsInCart === 0) {
    return <SectionTitle text="your cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="shopping cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemList />
        </div>
        <div className="lg:col-span-4">
          <CartTotals />
          {user ? (
            <Link
              to="/checkout"
              className="btn btn-primary btn-block mt- 8 uppercase"
            >
              proceed to checkout
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary btn-block mt- 8 uppercase"
            >
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
