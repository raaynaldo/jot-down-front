import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthContext from "../../context/auth/authContext";

const SignUp = (props) => {
  const { signup, validation, clearErrors, isAuthenticated } = useContext(
    AuthContext
  );

  useEffect(() => {
    clearErrors();
    if (isAuthenticated) {
      props.history.push("/");
    }
  }, [isAuthenticated, props.history]);

  const { register, handleSubmit, errors, setError, getValues } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signup({ user: data });
  };

  useEffect(() => {
    Object.entries(validation).forEach(([key, value]) => {
      console.log(key, value);
      setError(key, {
        type: "manual",
        message: value.join(", "),
      });
    });
  }, [validation]);

  return (
    <div className="w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="px-6 py-4">
        <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">
          Jot Down
        </h2>

        {/* <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
          Welcome Back
        </h3> */}

        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
          Create account
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row space-x-3">
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                First Name
              </label>
              <input
                id="SignUpFirstName"
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="text"
                name="first_name"
                ref={register({ required: "First Name is required" })}
              />
              {errors.first_name && (
                <p className="text-error">{errors.first_name.message}</p>
              )}
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Last Name
              </label>
              <input
                id="SignUpLastName"
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="text"
                name="last_name"
                ref={register({ required: "Last Name is required" })}
              />
              {errors.last_name && (
                <p className="text-error">{errors.last_name.message}</p>
              )}
            </div>
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Email
            </label>
            <input
              id="SignUpEmail"
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="email"
              name="email"
              ref={register({ required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-error">{errors.email.message}</p>
            )}
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Username
            </label>
            <input
              id="SignUpUsername"
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="text"
              name="username"
              ref={register({ required: "Username is required" })}
            />
            {errors.username && (
              <p className="text-error">{errors.username.message}</p>
            )}
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Password
              </label>
            </div>

            <input
              id="SignUpPassword"
              className="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded bg-wbg-white dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              name="password"
              type="password"
              ref={register({ required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-error">{errors.password.message}</p>
            )}
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Password
              </label>
            </div>

            <input
              id="SignUpConfirmPassword"
              className="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded bg-wbg-white dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              name="confirm_password"
              type="password"
              ref={register({
                required: "Confirm Password is required",
                validate: (value) =>
                  value === getValues("password") ||
                  "Password and Confirm Password don't match",
              })}
            />
            {errors.confirm_password && (
              <p className="text-error">{errors.confirm_password.message}</p>
            )}
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
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
