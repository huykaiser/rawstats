import { FunctionComponent, useState } from "react"
import { cn } from "../lib/utils";

let tabMenuList = [
    {
        title: "Top Player",
        isClicked: true
    },
    {
        title: "All Players",
        isClicked: false
    }
];

let playerDetails = [
    {
        id: 1,
        title: "Matches played",
        info: 8
    },
    {
        id: 2,
        title: "Goals scored",
        info: 6
    },
    {
        id: 3,
        title: "Assists given",
        info: 3
    },
    {
        id: 4,
        title: "expected Goals",
        info: 22
    },
    {
        id: 5,
        title: "Fouls made",
        info: 2
    },
];

let playerStats = [
    {
        title: "Matches played",
        info: 8
    },
    {
        title: "Average rating",
        info: 7.1
    },
    {
        title: "Event goals",
        info: 12
    },
    {
        title: "Event assists",
        info: 4
    },
];

const PlayerBox: FunctionComponent = () => {
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
        <div className="rounded-3xs bg-darkslategray-300 w-full h-[200px] flex flex-col items-center justify-between text-center font-inter">
            <div className="w-[270px] flex flex-row items-center justify-between p-[5px] box-border text-left font-montserrat">
                <div className="shrink-0 flex flex-row items-center justify-start py-0 px-2.5 border-b-[1px] border-solid border-darkslategray-300">
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

            <div className="w-[250px] flex flex-row items-end justify-between text-5xs">
                <div className="relative w-[120px] h-[120px] overflow-hidden shrink-0">
                    <img
                        className="absolute top-[-5px] left-[-13px] w-36 h-[125px] object-cover"
                        alt=""
                        src="/images/witsel-1@2x.png"
                    />
                </div>

                <div className="w-[120px] h-[120px]  shrink-0 flex flex-col items-center justify-between py-2.5 px-0 box-border">
                    <div className="h-[86px] flex flex-col items-center justify-center">
                        {playerDetails.map((item) => (
                            <div key={item.id} className="box-border w-[115px] shrink-0 flex flex-row items-center justify-between border-b-[1px] border-solid border-darkslategray-100">
                                <div className="relative leading-[24px] font-medium">{item.title}</div>
                                <i className="relative text-xs leading-[24px] font-black text-mediumslateblue">{item.info}</i>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full rounded-3xs bg-slateblue flex flex-row flex-wrap items-center justify-between py-0 px-5 box-border">
                {playerStats.map((item) => (
                    <div key={item.title} className="h-[38px] shrink-0 flex flex-col items-center justify-center">
                        <i className="relative text-[14px] font-bold">{item.info}</i>
                        <b className="relative text-[8px] leading-[5px]">
                            <p className="m-0">{item.title}</p>
                            {/* <p className="m-0">played</p> */}
                        </b>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PlayerBox
