import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <main className=" grid place-items-center min-h-screen px-8">
        {/* (G,Mh100,Pic,Px8)class= grid, min-h-[100vh], place-items-center, px-8
        (Tc,Fb,T4x)class= text-center, font-bold, text-4xl 
        (T9x,Fs, Ts)class=text-9xl, font-semibold, text-primary 
        (Mt4, T3x, Fb, Tt, sm:T5x) class=mt-4, text-3xl, font-bold,tracking-tight, sm:text-5xl
         (Mt6, Tl, L7)class= mt-6, text-lg, leading-7
         div class=mt-10 
         class = btn, btn-secondary 
        */}
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            page not Found
          </h1>
          <p className="mt-6 text-lg leading-7">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary">
              Go Back Home
            </Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="grid place-items-center min-h-[100vh] px-8">
      <h4 className="text-4xl font-bold text-center">There was an error...</h4>
    </main>
  );
};
export default Error;
