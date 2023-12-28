import { FunctionComponent, useState } from "react";
import UserSettingsDetail from "./UserSettingsDetail";
import { Button } from "./ui/button";
import CompanySettingsDetail from "./CompanySettingsDetail";
import { cn } from "../lib/utils";

let tabMenuList = [
    {
        title: "Company Settings",
        isClicked: false
    },
    {
        title: "User Settings",
        isClicked: true
    }
];

export const UserSettingsComponent: FunctionComponent = (): JSX.Element => {
    const [isOpenedUserSettings, setIsOpenedUserSettings] = useState(true);
    const [itemList, setItemList] = useState(() => tabMenuList);

    const handleClicked = (itemMenu: any) => {
        const clickedItem = itemMenu.target.outerText;

        tabMenuList = itemList.map(item => {
            if (item.title === clickedItem) {
                item.isClicked = true;
                setIsOpenedUserSettings(item.isClicked);
                return { ...item };
            } else {
                item.isClicked = false;
                setIsOpenedUserSettings(item.isClicked);
                return item;
            }
        });

        setItemList(tabMenuList);
    }

    return (
        <div className="flex flex-col w-full h-full items-start gap-[5px] pt-[10px] pl-[10px] overflow-auto">
            <div className="w-[210px] h-[29px] mt-[-1.00px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-[20px] tracking-[0] leading-[normal]">Account Settings</div>

            <div className="flex w-[450px] h-[28px] items-start">
                {itemList.map((item) => (
                    <div key={item.title} className={cn("box-border w-[125px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid", item.isClicked ? " border-mediumslateblue" : "border-darkgray")} onClick={(item) => handleClicked(item)}>
                        <div className="relative flex items-center w-[120px] shrink-0">{item.title}</div>
                    </div>
                ))}
            </div>

            {/* Upload your photo */}
            <div className="inline-flex flex-col items-start gap-[10px] relative">
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
                !isOpenedUserSettings &&
                <CompanySettingsDetail />
            }

            {
                isOpenedUserSettings &&
                <UserSettingsDetail />
            }
        </div>
    );
};


export default UserSettingsComponent
