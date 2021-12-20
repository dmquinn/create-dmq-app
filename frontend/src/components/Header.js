import React from "react";
import { Link } from "react-router-dom";
import user from "../icons/user.svg";
import logo from "../icons/logo.svg";
import globe from "../icons/globe.svg";

const Header = () => {
  return (
    <>
      <div className="row bg-grey-lighter">
        <div className="col-md-3">
          <Link to={"/"}>
            <img src={logo} className="h-1 p-1 px-3" alt="" />
          </Link>
        </div>
        <div className="col-md-6">
          <div className="row w-100">
            <Link to="/">
              <h4 className="p-2 text-white bg-red rounded-lg">Home</h4>
            </Link>
            <Link to="/">
              <h4 className="p-2 text-white bg-blue-dark rounded-lg">About</h4>
            </Link>
            <Link to="/">
              <h4 className="p-2 bg-purple-darker text-white rounded-lg">
                Other
              </h4>
            </Link>
          </div>
        </div>
        <div className="col-md-3">
          <div className="row w-100 j-end">
            <img src={user} className=" py-2 px-1" alt="" />
            <img src={globe} className=" py-2 px-3" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
