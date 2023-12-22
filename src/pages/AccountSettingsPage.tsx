import { FunctionComponent } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import UserSettingsComponent from "../components/UserSettingsComponent";

const AccountSettingsPage: FunctionComponent = () => {
  return (
    // overflow-hidden
    <div className="flex bg-darkslategray-100 w-full h-full overflow-auto text-left text-[10px] text-white font-montserrat">
      <div className="basis-1/8 relative">
        <SideBar />
      </div>

      <div className="basis-7/8 w-full h-full">
        <TopBar />
        <UserSettingsComponent/>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
