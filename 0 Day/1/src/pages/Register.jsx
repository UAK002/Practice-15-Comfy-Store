import { Form, Link, redirect } from 'react-router-dom';
import { SubmitBtn, FormInput } from '../components';
import { customFetch } from '../utils';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  return null;
};

try {
  const response = customFetch.post('/auth/local/register', data);
  toast.success('Account Created Successfully');
  redirect('/login');
} catch (error) {}
const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput
          type="text"
          label="username"
          defaultValue="ola uber"
          name="username"
        />
        <FormInput
          type="email"
          label="email"
          defaultValue="olauber@olauber.com"
          name="email"
        />
        <FormInput
          type="password"
          defaultValue="secret"
          label="password"
          name="password"
        />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <p className="text-center">
          Already a member?{' '}
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
