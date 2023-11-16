import { Form, Link } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        action="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="text"
          name="identifier"
          label="Email"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>
        <button type="button" className="btn btn-secondary btn-block">
          Guest
        </button>
        <p className="text-center">
          not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize "
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
