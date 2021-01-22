import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
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
        <h3
          to="/"
          className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
        >
          Jot Down
        </h3>
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
              className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full"
              onMouseEnter={() => setActive(true)}
            >
              <img
                src="https://lh3.googleusercontent.com/a-/AOh14Gi0DgItGDTATTFV6lPiVrqtja6RZ_qrY91zg42o-g"
                className="object-cover w-full h-full"
                alt="avatar"
              />
            </div>
          </button>
          <div
            className={`absolute top-10 right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-20 ${
              active ? "" : "hidden"
            }`}
            onMouseLeave={() => setActive(false)}
          >
            <div className="block px-4 py-2 text-sm text-gray-700 capitalize cursor-pointer dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white">
              your profile
            </div>
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
