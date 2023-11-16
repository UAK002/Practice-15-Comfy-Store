import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <main className="min-h-[100vh] grid place-items-center px-8">
        <div className="text-center">
          <h1 className="text-9xl font-semibold text-primary ">404</h1>
          <h4 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            page not found
          </h4>
          <p className="mt-6 text-lg leading-7">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary">
              Go Back home
            </Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="min-h-[100vh] grid place-items-center px-8">
      <h4 className="text-4xl text-center font-bold">There was an error...</h4>
    </main>
  );
};
export default Error;
