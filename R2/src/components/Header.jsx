import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center items-center sm:justify-end">
        {/* USER */}
        {/* LINK */}
        <div className="flex gap-x-6 justify-center">
          <Link to="/login" className="link link-hover text-xs sm:text-sm">
            Login / Guest
          </Link>
          <Link to="/register" className="link link-hover text-xs sm:text-sm">
            Create Account
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
