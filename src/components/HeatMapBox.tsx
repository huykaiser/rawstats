import { FunctionComponent, useState } from "react"
import { cn } from "../lib/utils";

let tabMenuList = [
    {
        title: "Heat",
        isClicked: true
    },
    {
        title: "Map",
        isClicked: false
    }
];

const HeatMapBox: FunctionComponent = () => {
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
        <div className="shrink-0 flex flex-col items-start justify-start relative gap-[10px] text-left text-xs h-full">
            <div className="relative rounded-3xs bg-darkslategray-300 w-full h-full z-[0]" />
            <div className="my-0 mx-[!important] absolute top-[11px] left-[0px] box-border w-[270px] h-7 flex flex-row items-start justify-start py-0 px-2.5 z-[1] border-b-[1px] border-solid border-darkslategray-300">
                {itemList.map((item) => (
                            <div key={item.title} className={cn("box-border w-[50px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid", item.isClicked ? " border-mediumslateblue" : "border-darkgray")} onClick={(item) => handleClicked(item)}>
                                <div className="relative flex items-center w-[120px] shrink-0">{item.title}</div>
                            </div>
                        ))}
            </div>

            <div className="my-0 mx-[!important] absolute top-[49px] left-[22.5px] w-[225px] h-[140px] flex flex-row flex-wrap items-center justify-center gap-[10px] z-[2] text-5xs text-lightsteelblue-100 font-inter">
                <div className="relative w-[106.84px] h-[18.48px]">
                    <div className="absolute top-[0px] left-[88.77px] leading-[14px] flex items-center w-[17.91px]">47%</div>
                    <div className="absolute h-[calc(100%_-_14.48px)] w-[99.85%] top-[14.48px] right-[0%] bottom-[0px] left-[0.15%] rounded-3xs bg-darkslategray-200" />
                    <div className="absolute h-[calc(100%_-_14.48px)] w-[52.7%] top-[14.48px] right-[47.07%] bottom-[0px] left-[0.22%] rounded-3xs bg-mediumslateblue" />
                    <div className="absolute top-[2px] left-[0px] leading-[14px] flex items-center w-[54.51px]">Map coverage</div>
                </div>

                <div className="rounded-sm bg-mediumseagreen-200 flex flex-row items-center justify-center py-[3px] px-[5px] gap-[1.99px] text-[9px] text-mediumseagreen-100 border-[1px] border-solid border-mediumseagreen-200">
                    <div className="shrink-0 flex flex-row items-center justify-start py-0 pr-[0.0000019073486328125px] pl-0 gap-[4px]">
                        <div className="relative rounded bg-mediumseagreen-100 w-1 h-1 min-w-[4px] max-w-[4px] min-h-[4px] max-h-[4px]" />
                        <div className="shrink-0 flex flex-row items-start justify-start py-0 pr-[1.6299991607666016px] pl-0">
                            <div className="relative leading-[14px] font-medium">8.5%</div>
                        </div>
                    </div>

                    <div className="shrink-0 flex flex-row items-start justify-start">
                        <div className="w-[9.02px] h-[9px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[1.0530000925064087px] pb-[1.0530003309249878px] pr-[2.1160006523132324px] pl-[0.010000193491578102px] box-border">
                            <img
                                className="relative w-[6.89px] h-[6.89px] object-cover"
                                alt=""
                                src="/up-arrow.svg"
                            />
                        </div>
                    </div>
                </div>
                
                <div className="relative w-[175px] h-[110.95px] flex items-center justify-center">
                    <img
                        className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.09)]"
                        alt=""
                        src="/images/screenshot-20230711-121248-2@2x.png"
                    />
                </div>
            </div>
        </div>
    )
}

export default HeatMapBox
