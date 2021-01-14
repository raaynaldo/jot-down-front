import { HiMoon, HiSun } from "react-icons/hi";

const DarkModeButton = ({ setIsDark, isDark }) => {
  return (
    <div className="fixed right-10 bottom-10">
      <button
        className="flex items-center w-12 h-12 p-3 uppercase bg-gray-500 rounded-full shadow-sm text-blue-50 max-w-max hover:shadow-lg"
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? <HiSun size={"5em"} /> : <HiMoon size={"5em"} />}
      </button>
    </div>
  );
};

export default DarkModeButton;
