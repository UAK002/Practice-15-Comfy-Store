import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      {/*  class=(bg, p, t-n-c )bg-neutral & py-2 & text-neutral-content
       class= (a-e, f, j-c, sm:j-e)align-element & flex justify-content & sm:justify-end
         class =( F, G-x, j-c, i-c ) flex, gap-x-6 & justify-center & items-center
         class=(L, L-h, T-x, sm: T-s ) link & link-hover & text-xs & sm:text-sm
 
      
      */}
      <div className="align-element flex justify-center sm:justify-end">
        {/* USER */}
        {/* LINKS */}
        <div className="flex gap-x-6 justify-center items-center">
          <Link to="/login" className="link link-hover text-xs sm:text-sm">
            Sign in / Guest
          </Link>
          <Link to="/register" className="link link-hover text-xs sm:text-sm">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
