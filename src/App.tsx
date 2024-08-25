import { Outlet } from "react-router-dom";

import Appber from "./shered/Header/Appber";
import { ColorTheme } from "./ColorTheme/ColorTheme";
const App = () => {
  return (
    <section className="">
      <Appber  />
      <ColorTheme defaultTheme="dark" storageKey="vite-ui-theme">
        <Outlet />
      </ColorTheme>
    </section>
  );
};

export default App;