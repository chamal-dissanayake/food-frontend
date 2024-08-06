import { useState } from "react";
import DesktopNav from "./DesktopNav";
import logo from "/logo.png";
import MobileNavBar from "./MobileNavBar";

const Header = () => {
  const [hiddenLeft, setHiddenLeft] = useState("-left-[1000px]");
  const menuItems = ["recipes", "resoures", "about", "contact"];

  const onOpen = () => {
    setHiddenLeft("left-0");
  };

  const onClose = () => {
    setHiddenLeft("-left-[1000px]");
  };
  return (
    <>
      <div className=" max-[900px]:hidden">
        <DesktopNav menuItems={menuItems} logo={logo} />
      </div>
      <div className=" min-[900px]:hidden">
        <MobileNavBar
          menuItems={menuItems}
          logo={logo}
          onClose={onClose}
          onOpen={onOpen}
          hiddenLeft={hiddenLeft}
        />
      </div>
    </>
  );
};

export default Header;
