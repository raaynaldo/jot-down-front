import { useState } from "react";
import PictureModal from "./PictureModal/PictureModal";

const AccountPictureSection = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="flex flex-row justify-between border-t-2 border-b-2">
      <div className="flex items-center">Account Picture</div>
      <div>
        <button
          className="px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
          type="button"
          onClick={() => setActive(true)}
        >
          Change...
        </button>
      </div>
      {active ? <PictureModal active={active} setActive={setActive} /> : null}
    </div>
  );
};

export default AccountPictureSection;
