import { useState, useContext, useEffect } from "react";
import { FiUpload, FiCamera, FiX } from "react-icons/fi";
import AuthContext from "../../../context/auth/authContext";
// import Avatar from "../../shared/Avatar/Avatar";
import Avatar from "react-avatar";

const AccountPictureSection = () => {
  const { user } = useContext(AuthContext);
  const [active, setActive] = useState(false);
  const [pictureUrl, setPictureUrl] = useState("");
  // useEffect(() => {
  //   setPictureUrl(user.picture);
  // }, [user.picture]);

  useEffect(() => {
    setPictureUrl(user.picture);
  }, [active]);

  const ImageChangeHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files);
      var reader = new FileReader();

      reader.onload = function (e) {
        console.log(e);
        setPictureUrl(e.target.result);
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };
  const modal = (
    <div className="fixed bottom-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
      <div className="flex flex-col items-center w-1/3 py-5 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        {/* <div className="flex-auto w-64 h-64 overflow-hidden border-2 border-gray-900 rounded-full">
          <img
            className="object-cover w-full h-full"
            src={pictureUrl}
            alt="avatar"
          />
        </div> */}
        <Avatar
          src={pictureUrl}
          name={"Raynaldo Sutisna"}
          maxInitials={2}
          round={true}
          size="200"
        />
        <input
          accept="image/*"
          className="hidden"
          id="input-image"
          type="file"
          name="newPhoto"
          onChange={ImageChangeHandler}
        />
        <div className="flex flex-row justify-center py-5 space-x-4">
          <label
            htmlFor="input-image"
            className="flex flex-col items-center flex-grow cursor-pointer"
          >
            <FiUpload className="w-10 h-10" />
            <div>Upload</div>
          </label>
          <button className="flex flex-col items-center flex-grow">
            <FiCamera className="w-10 h-10" />
            <div>Camera</div>
          </button>
          <button className="flex flex-col items-center flex-grow">
            <FiX className="w-10 h-10" />
            <div>Clear</div>
          </button>
        </div>
        <div className="flex flex-row space-x-3">
          <button
            className="w-full px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
            type="submit"
          >
            Save
          </button>
          <button
            className="w-full px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
            type="button"
            onClick={() => setActive(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
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
      {active ? modal : null}
    </div>
  );
};

export default AccountPictureSection;
