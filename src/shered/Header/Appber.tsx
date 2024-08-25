import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { Button } from "@/components/ui/button";
import { routes } from "@/utils/route";
import Logo from "./Logo/Logo";

const Appber = () => {
    return (
      <div className="bg-second">
      <div className="max-w-screen-xl min-h-20 mx-auto flex items-center justify-between px-3 ">
        {/* Logo */}
        <Link to="/">
          <Logo />
        </Link>

        {/* Mobile device menus */}
        <MobileMenu />

        {/* Navigation menu */}
        <div className="md:flex items-center gap-8 hidden">
          {routes.map((route) => (
            <NavLink
              key={route.path}
              className={({ isActive }) =>
                `font-medium text-gray-100 hover:text-orange-500 uppercase ${
                  isActive && "text-orange-500"
                }`
              }
              to={route.path}
            >
              {route.name}
            </NavLink>
          ))}
          <Link to="/login">
            <Button className="text-gray-100 bg-orange-500 hover:bg-orange-600">
              LOGIN
            </Button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default Appber;