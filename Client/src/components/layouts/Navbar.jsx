import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const { connected, logout } = useContext(AuthContext);

  return (
    <>
      {location.pathname !== "/" && (
        <nav className="bg-[rgb(31,41,55)]">
          <div className="text-white  container flex justify-between items-center p-4 mx-auto">
            <Link to={connected ? "/dashboard" : "/"}>
              <h5 className="font-medium font-[cursive] md:text-xl">
                Json-Generator-Tree
              </h5>
            </Link>
            {connected ? (
              <button
                type="button"
                onClick={logout}
                className="font-medium text-sm px-5 py-2.5 text-center hover:text-gray-400 inline-flex items-center"
              >
                <BiLogOut className="mr-1" />
                Logout
              </button>
            ) : (
              <div className="flex">
                <Link
                  to={"/login"}
                  className="font-medium text-sm px-5 py-2.5 text-center hover:text-gray-400 inline-flex items-center"
                >
                  <FiLogIn className="mr-1" />
                  Login
                </Link>
                <Link
                  to={"/register"}
                  className="font-medium text-sm px-5 py-2.5 text-center hover:text-gray-400 inline-flex items-center"
                >
                  <FaUser className="mr-1" />
                  Register
                </Link>
              </div>
            )}
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
