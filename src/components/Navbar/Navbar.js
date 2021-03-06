import { useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
// import Avatar from "react-avatar";
import Avatar from '../shared/Avatar/Avatar'
import "./Navbar.css";

const Navbar = (props) => {
  const { user, logout } = useContext(AuthContext);
  const [active, setActive] = useState(false);
  const logoutHandler = () => {
    logout();
    props.history.push("/login");
  };

  return (
    <nav className="flex items-center justify-between h-12 px-8 bg-white shadow dark:bg-gray-800 lg:flex-row">
      <div className="text-xl font-semibold text-gray-700">
        <NavLink to="/">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300">
            Jot Down
          </h3>
        </NavLink>
      </div>
      <div className="flex flex-row items-center space-x-3">
        <div className="text-gray-800 text-md dark:text-white">
          Hello, {user.full_name}
        </div>
        <div className="relative">
          <button
            type="button"
            className="flex items-center focus:outline-none"
            aria-label="toggle profile dropdown"
          >
            <div
              // className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full"
              className="border-2 border-gray-400 rounded-full"
              onMouseEnter={() => setActive(true)}
            >
              {/* <img
                src={user.picture}
                className="object-cover w-full h-full"
                alt="avatar"
              /> */}
              {/* <Avatar
                src={user.picture}
                name={user.full_name}
                maxInitials={2}
                round={true}
                size="30"
                className="flex-shrink-0"
              /> */}
              <Avatar
                src={user.picture}
                alt={user.full_name}
                className="w-8 h-8"
              />
            </div>
          </button>
          <div
            className={`absolute top-10 right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-20 ${
              active ? "" : "hidden"
            }`}
            onMouseLeave={() => setActive(false)}
          >
            <NavLink
              to="/profile"
              className="block px-4 py-2 text-sm text-gray-700 capitalize cursor-pointer dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
            >
              My profile
            </NavLink>
            <div
              className="block px-4 py-2 text-sm text-gray-700 capitalize cursor-pointer dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
              onClick={logoutHandler}
            >
              Logout
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
