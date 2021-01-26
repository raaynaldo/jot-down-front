import user from "../../../content/user.png";
const Avatar = (props) => {
  return (
    <div className={props.className}>
      <div className="relative flex items-center justify-center w-full h-full overflow-hidden bg-gray-200 rounded-full shadow-inner">
        {props.src === "" ? (
          // <span className="font-bold text-black" style={{ fontSize: "10vw" }}>
          //   {props.alt}
          // </span>
          <img
            src={user}
            alt="lovely avatar"
            className="object-cover object-center w-1/2 h-1/2"
          />
        ) : (
          <img
            src={props.src}
            alt="lovely avatar"
            className="object-cover object-center w-full h-full"
          />
        )}
        {/* <img
          src={props.src ? props.src : user}
          alt="lovely avatar"
          className="object-cover object-center w-1/2 h-1/2"
        /> */}
      </div>
    </div>
  );
};

export default Avatar;
