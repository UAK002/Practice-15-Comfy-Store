import {
  About,
  Checkout,
  Cart,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from './pages';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ErrorElement } from './components';

// Loaders
import { loader as landingLoader } from './pages/Landing';
import { loader as singleProductLoader } from './pages/SingleProduct';
import { loader as productsLoader } from './pages/Products';

// Actions

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
