import logoImage from "../../../assets/react.svg";

const Logo = () => {
    return (
      <div className={`h-8  flex items-center gap-2`}>
        <img src={logoImage} alt="Logo" className="w-full h-full" />
        <h2 className="uppercase text-2xl font-semibold text-gray-100">
          CarHub
        </h2>
      </div>
    );
  };
  
  export default Logo;
  