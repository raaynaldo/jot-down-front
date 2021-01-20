// import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import "./Navbar.css";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

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
        <div>
          <button
            type="button"
            className="flex items-center focus:outline-none"
            aria-label="toggle profile dropdown"
          >
            <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
              <img
                src="https://lh3.googleusercontent.com/a-/AOh14Gi0DgItGDTATTFV6lPiVrqtja6RZ_qrY91zg42o-g"
                className="object-cover w-full h-full"
                alt="avatar"
              />
            </div>
          </button>
        </div>
      </div>
      {/* <ul className="flex items-center space-x-8">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul> */}
    </nav>

    // <nav class="bg-white dark:bg-gray-800 shadow">
    //   <div class="container mx-auto px-6 py-2 h-12">
    //     <div class="md:flex md:items-center md:justify-between">
    //       <div class="flex justify-between items-center">
    //         <div class="text-xl font-semibold text-gray-700">
    //           <a
    //             class="text-gray-800 dark:text-white text-xl font-bold md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
    //             href="#"
    //           >
    //             Jot Down
    //           </a>
    //         </div>
    //       </div>

    //       <div class="hidden md:flex md:items-center md:justify-between flex-1">
    //         <div class="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
    //           <a
    //             href="#"
    //             class="mx-2 mt-2 md:mt-0 px-2 py-1 text-sm text-gray-700 dark:text-gray-200 font-medium rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
    //           >
    //             Join Slack
    //           </a>
    //           <a
    //             href="#"
    //             class="mx-2 mt-2 md:mt-0 px-2 py-1 text-sm text-gray-700 dark:text-gray-200 font-medium rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
    //           >
    //             Browse Topics
    //           </a>
    //           <a
    //             href="#"
    //             class="mx-2 mt-2 md:mt-0 px-2 py-1 text-sm text-gray-700 dark:text-gray-200 font-medium rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
    //           >
    //             Random Item
    //           </a>
    //           <a
    //             href="#"
    //             class="mx-2 mt-2 md:mt-0 px-2 py-1 text-sm text-gray-700 dark:text-gray-200 font-medium rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
    //           >
    //             Experts
    //           </a>
    //         </div>

    //         <div class="flex items-center mt-4 md:mt-0">
    //           <button
    //             class="mx-4 hidden md:block text-gray-600 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
    //             aria-label="show notifications"
    //           >
    //             <svg
    //               class="h-6 w-6"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
    //                 stroke="currentColor"
    //                 stroke-width="2"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //             </svg>
    //           </button>

    //           <button
    //             type="button"
    //             class="flex items-center focus:outline-none"
    //             aria-label="toggle profile dropdown"
    //           >
    //             <div class="h-8 w-8 overflow-hidden rounded-full border-2  border-gray-400">
    //               <img
    //                 src="https://lh3.googleusercontent.com/a-/AOh14Gi0DgItGDTATTFV6lPiVrqtja6RZ_qrY91zg42o-g"
    //                 class="h-full w-full object-cover"
    //                 alt="avatar"
    //               />
    //             </div>

    //             <h3 class="mx-2 text-sm text-gray-700 dark:text-gray-200 font-medium md:hidden">
    //               Khatab wedaa
    //             </h3>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
