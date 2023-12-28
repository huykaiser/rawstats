import { FunctionComponent, useState } from "react"
import { cn } from "../lib/utils";

let tabMenuList = [
    {
        title: "Compare Stats",
        isClicked: true
    },
    {
        title: "Line-up",
        isClicked: false
    }
];

let comparisonItemsList = [
    {
        title: "POSSESSION",
        team1: "70%",
        team2: "30%"
    },
    {
        title: "SHOTS",
        team1: "70%",
        team2: "30%"
    },
    {
        title: "PASSES",
        team1: "30%",
        team2: "70%"
    },
    {
        title: "SUCCESSFUL DRIBBLINGS",
        team1: "30%",
        team2: "70%"
    },
    {
        title: "TACKLES",
        team1: "70%",
        team2: "30%"
    },
    {
        title: "SUCCESSFUL TACKLES",
        team1: "30%",
        team2: "70%"
    },
    {
        title: "OFFSIDE",
        team1: "30%",
        team2: "70%"
    },
    {
        title: "CORNERS",
        team1: "70%",
        team2: "30%"
    }
];

const ComparisonBox: FunctionComponent = () => {
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
        <div className="h-full shrink-0 flex flex-col items-center justify-between">
            <div className="rounded-3xs bg-darkslategray-300 w-full h-full overflow-auto shrink-0 flex flex-col items-center justify-between py-2.5 px-5 box-border">
                <div className="w-[445px] flex flex-row items-center justify-between p-[5px] box-border">
                    <div className="shrink-0 flex flex-row items-center justify-start py-0 px-2.5 border-b-[1px] border-solid border-darkslategray-300">
                        {itemList.map((item) => (
                            <div key={item.title} className={cn("box-border w-[125px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid", item.isClicked ? " border-mediumslateblue" : "border-darkgray")} onClick={(item) => handleClicked(item)}>
                                <div className=" flex items-center w-[120px] shrink-0">{item.title}</div>
                            </div>
                        ))}
                    </div>

                    {/* 3 DOTS */}
                    <div className="shrink-0 flex flex-col items-end justify-center gap-[1px]">
                        <div className=" rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                        <div className=" rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                        <div className=" rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                    </div>
                </div>

                <div className="w-full flex-1 flex flex-col items-center justify-between py-2.5 px-0 text-mediumblue">
                    {comparisonItemsList.map((item) => (
                        <div key={item.title} className="self-stretch shrink-0 flex flex-row flex-wrap items-start justify-center gap-[6px]">
                            <div className="shrink-0 flex flex-row items-start justify-start gap-[94px]">
                                <div className=" font-black inline-block w-[32.18px] h-[17.29px] shrink-0">
                                    {item.team1}
                                </div>
                                <div className=" text-white text-center inline-block w-[180px] h-[16.73px] shrink-0">
                                    {item.title}
                                </div>
                                <div className=" font-black text-mediumslateblue text-right inline-block w-[36.18px] h-[17.85px] shrink-0">
                                    {item.team2}
                                </div>
                            </div>

                            <div className="w-[90%] shrink-0 flex flex-row items-start justify-center gap-[6px]">
                                <div className={`rounded-xl  bg-mediumblue w-[${item.team1}] h-[5px]`} /> 
                                <div className={`rounded-xl  bg-mediumslateblue w-[${item.team2}] h-[5px]`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ComparisonBox
