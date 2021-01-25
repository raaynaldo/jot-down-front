import { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import FullNameSection from "./FullNameSection/FullNameSection";
import AccountPictureSection from "./AccountPictureSection/AccountPictureSection";
import Avatar from "react-avatar";
// import PasswordSection from "./PasswordSection/PasswordSection";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="flex items-center justify-center text-gray-900 bg-gray-300 main__container dark:text-white dark:bg-gray-700 svg">
      <div className="flex flex-col w-2/6 space-y-4 bg-white shadow-lg px-7 py-7 rounded-3xl h-3/4 dark:bg-gray-800">
        <div className="flex items-center space-x-4">
          {/* <div className="flex-shrink-0 w-24 h-24 overflow-hidden border-2 border-gray-900 rounded-full">
            <img
              src={user.picture}
              className="object-cover w-full h-full"
              alt="avatar"
            />
          </div> */}
          <Avatar
            src={user.picture}
            name={user.full_name}
            maxInitials={2}
            round={true}
            size="70"
            className="flex-shrink-0"
          />
          <div className="flex-shrink-1">
            <p className="text-2xl font-bold">{user.full_name}</p>
            <p>{user.email}</p>
          </div>
        </div>

        <AccountPictureSection />

        <FullNameSection />

        {/* <PasswordSection /> */}
      </div>
    </div>
  );
};

export default Profile;
