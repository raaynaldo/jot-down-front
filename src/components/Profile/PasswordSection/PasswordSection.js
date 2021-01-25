const PasswordSection = () => {
  return (
    <div className="flex flex-row justify-between border-t-2 border-b-2">
      <div className="flex items-center">Password</div>
      <div>
        <button
          className="px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
          type="button"
        >
          Change...
        </button>
      </div>
    </div>
  );
};

export default PasswordSection;
