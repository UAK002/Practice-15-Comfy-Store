import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <main className="grid place-items-center min-h-[100vh] px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-secondary">404</p>
          <h1 className=" mt-4 text-3xl font-bold sm:text-5xl tracking-tight">
            Page not found
          </h1>
          <p className="mt-6 leading-7 text-lg">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-9">
            <Link to="/" className="btn btn-primary">
              Go back home
            </Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <h1 className="text-4xl font-bold">There was an error....</h1>
    </main>
  );
};
export default Error;
