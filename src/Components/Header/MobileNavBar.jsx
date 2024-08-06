import { HiBars3BottomRight } from "react-icons/hi2";
import { RiCloseCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const MobileNavBar = ({ menuItems, onOpen, onClose, logo, hiddenLeft }) => {
  return (
    <div className=" h-16 flex justify-between items-center px-6 lg:px-12">
      <a href="/">
        <img src={logo} alt="logo" className=" h-16" />
      </a>
      <button onClick={onOpen} className=" border border-primary rounded">
        <HiBars3BottomRight className=" w-7 h-7" />
      </button>
      <div
        className={`transition-opacity w-full h-full fixed bg-primary z-50 top-0 ${hiddenLeft} flex justify-center items-center`}
      >
        <button onClick={onClose} className=" absolute right-6 top-4">
          <RiCloseCircleLine className=" w-7 h-7" />
        </button>
        <div>
          <ul className=" flex flex-col gap-5">
            {menuItems?.map((menu, index) => (
              <li key={index}>
                <Link
                  to={menu}
                  className=" font-medium capitalize text-secondry text-2xl"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
          {/* <ul className=" flex items-center gap-2 font-medium mt-10 ">
            <li>
              <button className=" text-secondry px-4 py-2 rounded border">
                Log in
              </button>
            </li>
            <li>
              <button className=" text-secondry px-4 py-2 rounded border">
                Sign up
              </button>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
