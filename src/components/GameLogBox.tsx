import { FunctionComponent, useState } from "react"
import { cn } from "../lib/utils";

let tabMenuList = [
    {
        title: "Game Log",
        isClicked: true
    },
    {
        title: "Tech Log",
        isClicked: false
    }
];

let logsList = [
    {
        text: "A. Witsel passed the ball into the last third of the pitch",
        timePlay: "2:34 minutes played",
        textBtn: "Pass"
    },
    {
        text: "A. Griezman dribbles for a distance of approx. 34 metres",
        timePlay: "2:14 minutes played",
        textBtn: "Dribbling"
    },
    {
        text: "Pass by Ndidi to Griezman from first half of pitch",
        timePlay: "2:00 minutes played",
        textBtn: "Pass"
    },
];

const GameLogBox: FunctionComponent = () => {
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
        <div className="self-stretch flex flex-col items-start justify-start text-sm">
            <div className="self-stretch rounded-3xs bg-darkslategray-300 overflow-hidden flex flex-col items-start justify-start">
                <div className="rounded-3xs shadow-[0px_2px_7px_rgba(20,_20,_43,_0.06)] box-border w-full h-[200px] overflow-hidden shrink-0 flex flex-col items-center justify-between p-px border-[1px] border-solid border-darkslategray-200">
                    <div className="w-[830px] flex flex-row items-center justify-between py-[5px] px-0 box-border">
                        <div className="h-7 flex flex-row items-center justify-start py-0 px-2.5 box-border">
                            {itemList.map((item) => (
                                <div key={item.title} className={cn("box-border w-[125px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid", item.isClicked ? " border-mediumslateblue" : "border-darkgray")} onClick={(item) => handleClicked(item)}>
                                    <div className="relative flex items-center w-[120px] shrink-0">{item.title}</div>
                                </div>
                            ))}
                        </div>

                        <div className="shrink-0 flex flex-col items-end justify-center gap-[1px]">
                            <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                            <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                            <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                        </div>
                    </div>

                    <div className="w-[848px] h-[175px] overflow-hidden shrink-0 flex flex-col items-center justify-center pt-0 px-0 pb-[0.010009765625px] box-border text-xs">
                        {logsList.map(item => (
                            <div key={item.timePlay} className="flex flex-row justify-between items-center box-border w-full h-12 min-w-[400px] min-h-[48px] border-b-[1px] border-solid border-darkslategray-100">
                                <div className="basis-2/3 flex flex-row items-center justify-start py-0 pr-[95.21000671386719px] pl-0 box-border">
                                    <div className="shrink-0 flex flex-row items-start justify-start py-0 pr-1.5 pl-0 box-border min-w-[18px] min-h-[12px]">
                                        <div className=" rounded-3xs bg-darkslategray-300 shadow-[0px_1px_6px_rgba(20,_20,_43,_0.06)] box-border w-3 h-3 min-w-[12px] min-h-[12px] border-[1px] border-solid border-lightsteelblue-100" />
                                    </div>

                                    <div className="shrink-0 flex flex-row items-start justify-start py-0 pr-[1.4500007629394531px] pl-0">
                                        <div className=" leading-[14px]">{item.text}</div>
                                    </div>
                                </div>

                                <div className="basis-1/6 flex flex-row items-start justify-start">
                                    <div className=" leading-[14px] inline-block max-w-[128.8000030517578px]">{item.timePlay}</div>
                                </div>

                                <div className="basis-1/6 w-[80px] rounded-sm bg-slateblue box-border flex flex-row items-center justify-center py-[3px] pr-[4.999998092651367px] pl-[5px] text-mediumslateblue border-[1px] border-solid border-mediumslateblue">
                                    <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                                        <div className="relative rounded bg-mediumslateblue w-1 h-1 min-w-[4px] max-w-[4px] min-h-[4px] max-h-[4px]" />
                                        <div className="shrink-0 flex flex-row items-start justify-start py-0 pr-[0.2800006866455078px] pl-0">
                                            <div className="relative leading-[14px]">{item.textBtn}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameLogBox
