import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="px-6 py-4">
        <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">
          Jot Down
        </h2>

        <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
          Welcome Back
        </h3>

        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
          Create account
        </p>

        <form>
          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
            />
          </div>

          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            {/* <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
            >
              Forget Password?
            </a> */}

            <button
              className="px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>

      <div className="flex items-center justify-center py-4 text-center bg-gray-100 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">
          Already have an account?{" "}
        </span>

        <Link
          className="mx-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500"
          to="/login"
        >
          Login
        </Link>

      </div>
    </div>
  );
};

export default SignUp;
