import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container container-flex">
        <div>
          Web Parser by TheBladeHit
        </div>
        <div>
          <Link to="/" className="link">Home</Link>
          <Link to="/info" className="link">Info</Link>
          {/* <a href='/info' className="nav-a">Info</a> */}
          {/* <a href='/' className="nav-a">Home</a> */}
        </div>
      </div>
    </div>
  );
};

export default Header