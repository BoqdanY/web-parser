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
        </div>
      </div>
    </div>
  );
};

export default Header