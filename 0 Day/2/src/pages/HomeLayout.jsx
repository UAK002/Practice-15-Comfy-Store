import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
      <nav className="text-4xl text-primary">
        <span>Comfy</span>
      </nav>
      <Outlet />
    </>
  );
};
export default HomeLayout;
