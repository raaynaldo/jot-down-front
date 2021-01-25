import { useState, useContext, useEffect } from "react";
import AuthContext from "../../../context/auth/authContext";
import { useForm } from "react-hook-form";

const FullNameSection = () => {
  const { user, updateName } = useContext(AuthContext);
  const [active, setActive] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  useEffect(() => {
    setFirstName(user.first_name);
  }, [user.first_name]);
  useEffect(() => {
    setLastName(user.last_name);
  }, [user.last_name]);

  const { register, handleSubmit, errors, setError } = useForm();
  const onSubmit = (data) => {
    updateName(data);
    setActive(false);
  };

  const form = (
    <>
      <div className="flex flex-row space-x-2">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            First Name
          </label>
          <input
            id="SignUpFirstName"
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            type="text"
            name="first_name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            ref={register({ required: "First Name is required" })}
          />
          {errors.first_name && (
            <p className="text-error">{errors.first_name.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            Last Name
          </label>
          <input
            id="SignUpLastName"
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            type="text"
            name="last_name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            ref={register({ required: "Last Name is required" })}
          />
          {errors.last_name && (
            <p className="text-error">{errors.last_name.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-row space-x-3">
        <button
          className="w-full px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
          type="submit"
        >
          Change
        </button>
        <button
          className="w-full px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
          type="button"
          onClick={() => setActive(false)}
        >
          Cancel
        </button>
      </div>
    </>
  );

  const button = (
    <div>
      <button
        className="px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
        type="button"
        onClick={() => setActive(true)}
      >
        Change...
      </button>
    </div>
  );

  return (
    <form
      className="flex flex-col space-y-2 border-t-2 border-b-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-row justify-between">
        <div className="flex items-center">Full Name</div>
        {active ? null : button}
      </div>
      {active ? form : null}
    </form>
  );
};

export default FullNameSection;
