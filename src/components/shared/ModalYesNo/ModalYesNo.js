const ModalYesNo = ({ onClose, handler }) => {
  return (
    <div
      className="fixed bottom-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50"
      onClick={onClose}
    >
      <div className="w-1/3 bg-white rounded-lg">
        <div className="flex flex-col items-start p-4 space-y-3">
          <div className="flex items-center w-full">
            <div className="text-lg font-medium text-gray-900">
              Delete Folder
            </div>
            <svg
              className="w-6 h-6 ml-auto text-gray-700 cursor-pointer fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
            </svg>
          </div>
          <hr />
          <div className="">
            Are you sure to delete folder and all notes permanently?
          </div>
          <hr />
          <div className="ml-auto space-x-2">
            <button
              className="px-4 py-2 font-semibold text-red-700 bg-transparent border border-red-500 rounded hover:bg-gray-500 hover:text-white hover:border-transparent"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
              onClick={handler}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalYesNo;
