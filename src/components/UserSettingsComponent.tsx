import { FunctionComponent, useState } from "react";
import UserSettingsDetail from "./UserSettingsDetail";
import { Button } from "./ui/button";
import CompanySettingsDetail from "./CompanySettingsDetail";

export const UserSettingsComponent: FunctionComponent = (): JSX.Element => {
    const [isOpenedUserSettings, setIsOpenedUserSettings] = useState(true);

    const handleUserOrCompanySettingsToggle = (openUserSettings: boolean) => {
        setIsOpenedUserSettings(openUserSettings);
    }

    return (
        <div className="flex flex-col w-[1280px] h-[930px] items-start gap-[5px] p-[10px] relative overflow-hidden">
            <div className="relative w-[210px] h-[29px] mt-[-1.00px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-[20px] tracking-[0] leading-[normal]">
                Account Settings
            </div>

            <div className="flex w-[450px] h-[28px] items-start relative">
                <div className="flex w-[150px] h-[22px] items-center gap-[15px] relative border-b-2 [border-bottom-style:solid] border-[#979797]">
                    <div className="relative [font-family:'Inter-Medium',Helvetica] font-medium text-[#ffffff] text-[15px] leading-[normal] w-[150px] tracking-[0]">
                        <Button onClick={() => handleUserOrCompanySettingsToggle(false)}>Company Settings</Button>
                    </div>
                </div>

                <div className="flex w-[150px] h-[22px] items-center gap-[15px] relative border-b-2 [border-bottom-style:solid] border-[#6c72ff]">
                    <div className="relative [font-family:'Inter-Medium',Helvetica] font-medium text-[#ffffff] text-[15px] leading-[normal] w-[150px] tracking-[0]">
                        <Button onClick={() => handleUserOrCompanySettingsToggle(true)}>User Settings</Button>
                    </div>
                </div>
            </div>

            {/* Upload your photo */}
            <div className="inline-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]">
                <div className="relative w-[90px] h-[14px] mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#d9d9d9] text-[9.9px] tracking-[0] leading-[normal]">
                    Your Profile&nbsp;&nbsp;Picture
                </div>

                <div className="relative w-[80.09px] h-[86.88px] bg-[#d9d9d9] rounded-[11.09px] border-[0.62px] border-dashed border-[#4c535f]">
                    <div className="relative w-[58px] h-[55px] top-[16px] left-[10px]">
                        <div className="relative w-[60px] h-[55px]">
                            <div className="absolute w-[58px] top-[34px] left-0 [font-family:'Manrope-Medium',Helvetica] font-medium text-[#4c535f] text-[7.4px] text-center tracking-[0] leading-[normal]">
                                Upload your photo
                            </div>
                            <img className="absolute w-[22px] h-[24px] top-0 left-[18px]" alt="Gallery add" src="gallery-add.png" />
                        </div>
                    </div>
                </div>
            </div>

            {
                isOpenedUserSettings &&
                <UserSettingsDetail />
            }

            {
                !isOpenedUserSettings &&
                <CompanySettingsDetail />
            }

        </div>
    );
};


export default UserSettingsComponent
