import { FunctionComponent, useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import MainComponent from "../components/MainComponent";

const HomeDashboardPage: FunctionComponent = () => {
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
    // overflow-hidden overflow-auto
    <div className="flex flex-row bg-darkslategray-100 w-full h-[100vh] overflow-hidden text-left text-[10px] text-white font-montserrat">
      <div className={`basis-1/8 h-[100vh]`}>
        <SideBar />
      </div>

      <div className="basis-7/8 w-full h-full">
        {isAtTopBar && <TopBar />}
        <MainComponent/>
      </div>
    </div>
  );
};

export default HomeDashboardPage;
