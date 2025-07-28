import Burger from "../../assets/Burger.svg";
import Info from "../../assets/Info-square.svg";
import Setting from "../../assets/Settings.svg";
import Plus from "../../assets/Plus.svg";
import { useState } from "react";

function Sidebar() {
  const [collapseMenu, setCollapseMenu] = useState(false);

  const handleCollapseMenu = () => {
    setCollapseMenu(!collapseMenu);
  };

  const bottomOptions = [
    {
      name: "Help",
      icon: Info,
    },
    {
      name: "Activity",
      icon: Info,
    },
    {
      name: "Settings",
      icon: Setting,
    },
  ];

  return (
    <div
      className={`bg-(--lightdark) border-r border-dashed border-white/10 h-screen flex-col justify-between py-5 hidden md:flex ${
        collapseMenu === true ? "w-40" : "w-64"
      }`}
    >
      <div>
        <div className="border-b border-dotted border-white/10 mb-5">
          <div className="mb-5 flex justify-between items-center px-5">
            <span className="text-2xl font-medium">ChatMax</span>
            <img
              src={Burger}
              alt="menu"
              className="cursor-pointer"
              onClick={handleCollapseMenu}
            />
          </div>
        </div>

        {/* New Chat Plus Icon */}
        <div className="px-5">
          <div>
            <span className="flex gap-2 rounded-full bg-[#1e1e20] py-2 px-4 cursor-pointer">
              <img src={Plus} alt="plus icon" /> New Chat
            </span>
          </div>

          {/* Recent tab */}
          <div className="flex flex-col gap-2 mt-5">
            <div>
              <span className="text-xl font-semibold">Recent</span>
            </div>

            <div>
              <span>What is React?</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5">
        <ul className="flex flex-col gap-2">
          {bottomOptions.map((menu, index) => (
            <li key={index} className="flex items-center gap-2 cursor-pointer">
              <img src={menu.icon} alt={menu.name} />
              {menu.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
