import { useState, useContext } from "react";
import { FiUpload, FiCamera, FiX } from "react-icons/fi";
import AuthContext from "../../../../context/auth/authContext";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import Avatar from "../../../shared/Avatar/Avatar";
// import Avatar from "react-avatar";

const PictureModal = ({ active, setActive }) => {
  const pictureTypeConstant = {
    file: 0,
    camera: 1,
    clear: 2,
  };
  const { user, updatePicture } = useContext(AuthContext);
  const [pictureType, setPictureType] = useState(null);
  const [picture, setPicture] = useState(null);
  const [renderPicture, setRenderPicture] = useState(user.picture);
  const [takePictureActive, setTakePictureActive] = useState(false);

  const saveClickHandler = async () => {
    if (pictureType !== null) {
      const data = new FormData();
      data.append("picture", picture);
      data.append("pictureType", pictureType);
      await updatePicture(data);
      setActive(false);
    }
  };

  const fileChangeHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files);
      var reader = new FileReader();

      reader.onload = function (e) {
        console.log(e);
        setRenderPicture(e.target.result);
      };

      reader.readAsDataURL(event.target.files[0]);
      setTakePictureActive(false);
      setPicture(event.target.files[0]);
      setPictureType(pictureTypeConstant.file);
    }
  };

  function takePhotoHandler(dataUri) {
    setTakePictureActive(false);
    setRenderPicture(dataUri);
    setPicture(dataUri);
    setPictureType(pictureTypeConstant.camera);
  }

  function clearPictureHandler() {
    setRenderPicture("");
    setPicture("");
    setPictureType(pictureTypeConstant.clear);
  }
  return (
    <div className="fixed bottom-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
      <div className="flex flex-col items-center w-1/3 py-5 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        {takePictureActive ? (
          <Camera isImageMirror={false} onTakePhoto={takePhotoHandler} />
        ) : null}
        <Avatar
          src={renderPicture}
          alt={user.full_name}
          className="w-64 h-64"
        />
        {/* <Avatar
          src={renderPicture}
          name={"Raynaldo Sutisna"}
          maxInitials={2}
          round={true}
          size="200"
        /> */}
        <input
          accept="image/*"
          className="hidden"
          id="input-image"
          type="file"
          name="newPhoto"
          onChange={fileChangeHandler}
        />
        <div className="flex flex-row justify-center py-5 space-x-4">
          <label
            htmlFor="input-image"
            className="flex flex-col items-center flex-grow cursor-pointer"
          >
            <FiUpload className="w-10 h-10" />
            <div>Upload</div>
          </label>
          <button
            className="flex flex-col items-center flex-grow"
            onClick={() => setTakePictureActive(!takePictureActive)}
          >
            <FiCamera className="w-10 h-10" />
            <div>Camera</div>
          </button>
          <button
            className="flex flex-col items-center flex-grow"
            onClick={() => clearPictureHandler()}
          >
            <FiX className="w-10 h-10" />
            <div>Clear</div>
          </button>
        </div>
        <div className="flex flex-row space-x-3">
          <button
            className="w-full px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
            type="submit"
            onClick={saveClickHandler}
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
};

export default PictureModal;
