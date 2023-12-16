import { FunctionComponent } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import MainComponent from "../components/MainComponent";

const HomeDashboard: FunctionComponent = () => {
  return (
    <div className="relative bg-darkslategray-100 w-full h-full overflow-hidden text-left text-[26px] text-white font-montserrat">
      <TopBar/>
      <MainComponent/>
      <SideBar/>
    </div>
  );
};

export default HomeDashboard;
