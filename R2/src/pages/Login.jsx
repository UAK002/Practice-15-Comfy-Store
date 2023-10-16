import { Form, Link } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';

// - W p tags after the content > render Link comp. to="/register" class= 5(Ml, L, L-h, L-P, C )ml-2 link link-hover link-primary capitalize > { register}

const Login = () => {
  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold capitalize">login</h4>
        <FormInput
          label="email"
          type="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          label="password"
          type="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button className="btn btn-secondary btn-block">guest user</button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
