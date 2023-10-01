import { Form, Link } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';

const Login = () => {
  return (
    <section className="grid place-items-center h-screen ">
      {/* (Hs,G, Pic ) (Hs,G, Pic) h-screen, grid, place-items-center*/}
      {/*  (C,W,P, Bg, Sha, F, F-c, G) card, w-96, p-8,
       bg-base-100, shadow-lg, flex, flex-col, gap-y-4 */}

      {/* (Tc, T-3, Fb ) text-center, text-3xl, font-bold */}

      {/*  (Ml, L, L-h, L-P, C )ml-2 link link-hover 
        link-primary capitalize */}

      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="Email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button type="button" className="btn btn-block btn-secondary">
          Guest User
        </button>
        <p className="text-center">
          not a user yet?{' '}
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
