import React from "react";
import { FaUser } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {

    const logout=()=>{
        localStorage.clear()
    }
  return (
    <nav className="bg-[rgb(31,41,55)]">
      {/* <div className="text-white container flex justify-between items-center p-4 mx-auto">
        <Link to={"/register"}>
          <h5 className="text-xl font-semibold">GoalSetter</h5>
        </Link>
        {!connected ? (
          <div>
            <Link
              to={"/login"}
              className="font-medium text-sm px-5 py-2.5 text-center hover:text-gray-400 inline-flex items-center"
            >
              <FiLogIn className="mr-1" />
              Login
            </Link>
            <Link
              to={"/dashboard"}
              className="font-medium text-sm px-5 py-2.5 text-center hover:text-gray-400 inline-flex items-center"
            >
              <FaUser className="mr-1" />
              Register
            </Link>
          </div>
        ) : (
          <button
            type="button"
            // onClick={logout}
            className="font-medium text-sm px-5 py-2.5 text-center hover:text-gray-400 inline-flex items-center"
          >
            <BiLogOut className="mr-1" />
            Logout
          </button>
        )}
      </div> */}
    </nav>
  );
};

export default Navbar;
