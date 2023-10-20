import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
      <nav className="text-4xl text-primary">comfy</nav>
      <Outlet />
    </>
  );
};
export default HomeLayout;
