import { Form, Link } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';

const Register = () => {
  return (
    <section className="grid place-items-center h-screen">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-4xl font-bold">Register</h4>
        <FormInput label="Username" type="text" name="username" />
        <FormInput label="Email" type="email" name="email" />
        <FormInput label="Password" type="text" name="password" />
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
/*
- Register comp > JSX > G section class = (Hs, G, PIC, ) h-screen grid place-items-center
- W section > render Form comp method = POST class= (C,W,P,bg,Sha,F,F-c,G-y) card & w-96, p-8, bg-base-100 & shadow-lg & flex & flex-col & gap-y-4
- W Form > h4  className="text-center text-4xl font-bold" > { Register}
- W Form > render FormInput label="username"  type="text" name="username"
- W Form > render FormInput label="email" type="email" name="email"
- W Form > render FormInput label="password" type="password" name="password"
- W Form > div.mt-4
- W div > render SubmitBtn text="register"
- W Form > p.text-center > Already a member?
- W p.text-center > in the content render Link comp. to="/login" & class=  ml-2 link link-hover link-primary capitalize
 
*/
