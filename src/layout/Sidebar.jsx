import { Chat, ChatTeardropText, SignOut, UserCircle } from "@phosphor-icons/react";
import DarkModeSwitcher from "../components/DarkModeSwitcher";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NAVIGATION = [
  {
    key: 0,
    title: "DMs",
    icon: <Chat size={24} />,
    path: "/dashboard",
  },
 
  {
    key: 1,
    title: "Profile",
    icon: <UserCircle size={24} />,
    path: "/dashboard/profile",
  },

];

export default function Sidebar() {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(0);

  const handleClick = (key) => {
    navigate(NAVIGATION[key].path)
    setSelected(key);
  };
  return (
    <div className="flex flex-col border-r border-stroke p-2 dark:border-strokedark  dark:bg-boxdark-2">
      <ChatTeardropText size={34} weight="bold" className="text-primary "/>

      <div className="flex flex-col items-center space-y-5">
        

        {NAVIGATION.map(({ icon, key, title }) => (<div key={key} className="space-y-2 flex flex-col text-center hover:cursor-pointer hover:text-primary" onClick={() => { handleClick(key) }}>

          <div
            className={`mx-auto border rounded-md border-stroke p-2 dark:border-strokedark ${selected === key && "bg-primary bg-opacity-90 text-white"
              } hover:border-primary dark:hover:border-primary`}
          >


            {icon}
          </div>
          <span className={`font-medium text-sm ${selected === key && 'text-primary'}`}
          >{title}</span>
        </div>))}
      </div>

      <div className="flex flex-col grow"></div>

      {/* Dark Mode Toggle and Sign Out */}
      <div className="space-y-4.5">
        <div className="flex flex-row items-center justify-center">
          <DarkModeSwitcher />
        </div>  
        
        <div className="flex flex-row items-center justify-center border rounded-md border-stroke p-2 dark:border-strokedark hover:bg-stone-100 hover:cursor-pointer">
          <SignOut size={24} />
        </div>
      </div>
    </div >
  );
}