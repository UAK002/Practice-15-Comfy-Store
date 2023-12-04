import { Form, Link, redirect } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // return null;

  try {
    const response = await customFetch.post('/auth/local/register', data);
    console.log(response);
    toast.success('Account Created Successfully');
    return redirect('/login');
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      'please double check your credentials';
    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <section className="grid place-items-center h-screen">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-4xl font-bold">Register</h4>
        <FormInput
          label="Username"
          type="text"
          name="username"
          // defaultValue="uberola asdgc"
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          // defaultValue="casgr@gmail.com"
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          // defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="Register" />
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
