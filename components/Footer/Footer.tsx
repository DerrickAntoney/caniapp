import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer bg-amber-600">
      <div className="container flex flex-col justify-center align-middle w-[100%]">
        <div className="footer-content">
          {/* Add links, social media icons, or other content here */}
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
        </p>
        <nav className="flex flex-row gap-2 py-2">
          <Link to={'/'}>About</Link>
          <Link to={'/Courses'}>Courses</Link>
          <Link to={'/Books'}>Books</Link>
          <Link to={'/Youtube'}>Youtube</Link>
          <Link to={'Contact'}>Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
