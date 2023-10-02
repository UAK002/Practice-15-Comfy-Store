import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-neutral text-neutral-content py-2">
      <div className="align-element flex justify-center sm:justify-end">
        {/* USER */}
        {/* Links */}
        <div className="flex gap-x-6 justify-center items-center">
          <Link to="/login" className="link link-hover & text-xs sm:text-sm">
            Sign In / Guest
          </Link>
          <Link to="/register" className="link link-hover & text-xs sm:text-sm">
            Create An Account
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
