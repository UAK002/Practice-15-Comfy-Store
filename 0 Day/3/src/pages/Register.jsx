import { Form, Link } from 'react-router-dom';
import { SubmitBtn, FormInput } from '../components';

const Register = () => {
  return (
    <section className="grid place-items-center h-screen">
      <Form
        method="POST"
        className="card w-96 p-8 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-4xl font-bold">Register</h4>
        <FormInput label="Username " type="text" name="username" />
        <FormInput label="Email " type="email" name="email" />
        <FormInput label="Password " type="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <p className="text-center">
          Already a member?{' '}
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
