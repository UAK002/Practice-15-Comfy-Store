import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
  const error = useRouteError();
  consolelog(error);
  return <h4 className="text-4xl font-bold">There was an Error...</h4>;
};
export default ErrorElement;
