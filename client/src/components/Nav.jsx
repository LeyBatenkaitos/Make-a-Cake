import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav className="p-3 mb-2 bg-secondary text-white rounded ">
      <h1 className="text-left">Logo Deleitate</h1>
      <ul className="d-flex justify-content-start ">
        <li>
          <Link to="/" className="btn btn-light ">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
