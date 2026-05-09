import logo from "../assets/logo.jpeg";

const Logo = () => {
  return (
    <>
      <div className="h-16 w-20 overflow-hidden  ">
        <img
          src={logo}
          alt="German Sprach Akademic"
          className="h-full w-full object-contain"
        />
      </div>
    </>
  );
};

export default Logo;
