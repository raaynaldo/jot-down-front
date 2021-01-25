const Avatar = (props) => {
  return (
    <div className={props.className}>
      <div className="relative flex items-center justify-center w-full h-full overflow-hidden bg-gray-200 rounded-full shadow-inner">
        {props.src === "" ? (
          <span className="font-bold text-black" style={{ fontSize: "10vw" }}>
            {props.alt}
          </span>
        ) : (
          <img
            src={props.src}
            alt="lovely avatar"
            className="object-cover object-center w-full h-full"
          />
        )}
      </div>
    </div>
  );
};

export default Avatar;
