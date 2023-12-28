import { FunctionComponent, useEffect, useState } from "react"
import { cn } from "../lib/utils"
import { Input } from "./ui/input";

let tabMenuList = [
    {
        title: "Live",
        isClicked: true
    },
    {
        title: "Highlight",
        isClicked: false
    },
    {
        title: "Technical",
        isClicked: false
    }
];

const InputVideoBox: FunctionComponent = () => {
    const [itemList, setItemList] = useState(() => tabMenuList);

    const handleClicked = (itemMenu: any) => {
        const clickedItem = itemMenu.target.outerText;
        // console.log("titel: ", clickedItem);

        tabMenuList = itemList.map(item => {
            if (item.title === clickedItem) {
                item.isClicked = true;
                return { ...item };
            } else {
                item.isClicked = false;
                return item;
            }
        });

        setItemList(tabMenuList);
    }

    return (
        <div className="h-full shrink-0 flex flex-col items-center justify-between text-xs">
            <div className="rounded-3xs bg-darkslategray-300 w-full h-full overflow-hidden shrink-0 flex flex-col items-start justify-between p-2.5 box-border gap-[10px]">
                <div className="w-full flex flex-row items-start justify-between text-sm">
                    <div className="w-full h-7 flex flex-row items-start justify-start py-0 px-2.5 box-border">
                        {itemList.map((item) => (
                            <div key={item.title} className={cn("box-border w-[125px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid", item.isClicked ? " border-mediumslateblue" : "border-darkgray")} onClick={(item) => handleClicked(item)}>
                                <div className="relative flex items-center w-[120px] shrink-0">{item.title}</div>
                            </div>
                        ))}
                    </div>

                    {/* 3 DOTS */}
                    <div className="shrink-0 flex flex-col items-end justify-center gap-[1px]">
                        <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                        <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                        <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                    </div>
                </div>

                {/* VIDEO LINK INPUT */}
                <div className="w-full rounded-8xs bg-darkslategray-100 flex flex-row items-center justify-start py-[7px] px-3 gap-[22px] text-darkgray">
                    <Input/>

                    {/* <img
                        className="relative w-[11.86px] h-4 object-cover"
                        alt=""
                        src="/vector@2x.png"
                    /> */}
                    <img
                        className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                        alt="copy-icon"
                        src="/images/copy@2x.png"
                    />
                </div>

                {/* VIDEO FIELD */}
                <img
                    className="relative rounded-8xs w-full h-[295.31px] object-cover"
                    alt=""
                    src="/images/video@2x.png"
                />

                <div className="flex flex-col items-start justify-start gap-[1px]">
                    <div className="relative font-black">Paris Saint Germain</div>
                    <div className="relative text-[10px] font-light">999 Viewers</div>
                </div>
            </div>
        </div>
    )
}

export default InputVideoBox
