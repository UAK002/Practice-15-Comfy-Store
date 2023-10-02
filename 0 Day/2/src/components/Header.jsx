import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {/* USER */}
        {/* LINKS */}
        <div className="flex gap-x-2 justify-center items-center">
          <Link to="/login" className="link link-hover text-xs sm:text-sm">
            Register
          </Link>
          <Link to="/login" className="link link-hover text-xs sm:text-sm">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;

// /- G header tags class= 3 (bg, p, t-n-c )bg-neutral & py-2 & text-neutral-content
// - Header > div class= (a-e, f, j-c, sm:j-e)align-element & flex justify-content & sm:justify-end
// - W div > comment USER
// - W div > comment LINKS
//  W div > under LINKS comment > div class =( F, G-x, j-c, i-c ) flex, gap-x-6 & justify-center &
// - W div.flex > render Link to="/login" class=(L, L-h, T-x, sm: T-s ) link & link-hover & text-xs & sm:text-sm > {Sign in / Guest }
// - W div.flex > render Link to="/register" class=(L, L-h, T-x, sm: T-s ) link & link-hover & text-xs & sm:text-sm > {Create Account }
