import { FunctionComponent, useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import UserSettingsComponent from "../components/UserSettingsComponent";

const AccountSettingsPage: FunctionComponent = () => {
  const [isAtTopBar, setIsAtTopBar] = useState(true);

  useEffect(() => {
    const handleWindowMouseMove = (event:any) => {
      // console.log("x,y: ", event.clientX,event.clientY);

      if(event.clientY >= 47 ){
        setIsAtTopBar(false);
        // console.log("false");
      }else{
        setIsAtTopBar(true);
      }
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleWindowMouseMove,
      );
    };
  }, [isAtTopBar]);

  return (
    <div className="flex bg-darkslategray-100 w-full h-full overflow-hidden text-left text-[10px] text-white font-montserrat">
      <div className="basis-1/8 relative">
        <SideBar />
      </div>

      <div className="basis-7/8 w-full h-full">
        {isAtTopBar && <TopBar />}
        <UserSettingsComponent/>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
