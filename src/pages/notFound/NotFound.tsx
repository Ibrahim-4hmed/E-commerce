import { Link, useLocation } from "react-router-dom";
import { useEffect, type JSX } from "react";
import "./notfound.css"

const NotFound = ():JSX.Element => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="page not-found-page">
      <div>
        <h1>404</h1>
        <p>Oops! Page not found</p>
        <Link to="/">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
