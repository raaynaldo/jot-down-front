const Main = () => {
  return (
    <div class="flex flex-row h-screen">
      <div className="w-40 bg-gray-900 text-white items-left px-5 pt-7 space-y-3">
        <div>Notes</div>
        <div>Folder A</div>
        <div>Folder B</div>
        <div>Folder C</div>
        <div>Trash</div>
      </div>
      <div className="w-64 bg-gray-50 flex flex-col items-center pt-7">
        <div>
          <input
            type="text"
            className="rounded-full border-2 border-blue-400"
          />
        </div>
        <div class="relative text-gray-600">
          <input
            type="search"
            name="serch"
            placeholder="Search"
            class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
          />
          <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div>Items</div>
      </div>
      <div className="flex-auto bg-blue-200">main content</div>
    </div>
  );
};

export default Main;
