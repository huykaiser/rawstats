import { FunctionComponent, useState } from "react"
import { cn } from "../lib/utils";

let tabMenuList = [
    {
        title: "Matches",
        isClicked: true
    },
    {
        title: "Standings",
        isClicked: false
    }
];

let matchesList = [
    {
        id: 1,
        date: "2023/06/30",
        time: "5:00pm",
        score:{
            team1: "1",
            team2: "2"
        },
        team1: {
            name: "Argentina",
            winLose: ["W", "L", "L"],
            imageUrl: "/images/argentina.png"
        },
        team2: {
            name: "Italy",
            winLose: ["W", "D", "L"],
            imageUrl: "/images/italy.png"
        },
    },
    {
        id: 2,
        date: "2023/06/30",
        time: "5:00pm",
        score:{
            team1: "4",
            team2: "4"
        },
        team1: {
            name: "Portugal",
            winLose: ["W", "W", "L"],
            imageUrl: "/images/portugal.png"
        },
        team2: {
            name: "Belgium",
            winLose: ["D", "W", "L"],
            imageUrl: "/images/belgium.png"
        },
    },
    {
        id: 3,
        date: "2023/06/30",
        time: "5:00pm",
        score:{
            team1: "0",
            team2: "0"
        },
        team1: {
            name: "Uruguay",
            winLose: ["D", "W", "L"],
            imageUrl: "/images/uruguay.png"
        },
        team2: {
            name: "Poland",
            winLose: ["W", "W", "L"],
            imageUrl: "/images/poland.png"
        },
    },
    {
        id: 4,
        date: "2023/06/30",
        time: "5:00pm",
        score:{
            team1: "1",
            team2: "2"
        },
        team1: {
            name: "Argentina",
            winLose: ["W", "L", "L"],
            imageUrl: "/images/argentina.png"
        },
        team2: {
            name: "Italy",
            winLose: ["W", "D", "L"],
            imageUrl: "/images/italy.png"
        },
    },
    {
        id: 5,
        date: "2023/06/30",
        time: "5:00pm",
        score:{
            team1: "4",
            team2: "4"
        },
        team1: {
            name: "Portugal",
            winLose: ["W", "W", "L"],
            imageUrl: "/images/portugal.png"
        },
        team2: {
            name: "Belgium",
            winLose: ["D", "W", "L"],
            imageUrl: "/images/belgium.png"
        },
    },
    {
        id: 6,
        date: "2023/06/30",
        time: "5:00pm",
        score:{
            team1: "0",
            team2: "0"
        },
        team1: {
            name: "Uruguay",
            winLose: ["D", "W", "L"],
            imageUrl: "/images/uruguay.png"
        },
        team2: {
            name: "Poland",
            winLose: ["W", "W", "L"],
            imageUrl: "/images/poland.png"
        },
    },
    {
        id: 7,
        date: "2023/06/30",
        time: "5:00pm",
        score:{
            team1: "1",
            team2: "2"
        },
        team1: {
            name: "Argentina",
            winLose: ["W", "L", "L"],
            imageUrl: "/images/argentina.png"
        },
        team2: {
            name: "Italy",
            winLose: ["W", "D", "L"],
            imageUrl: "/images/italy.png"
        },
    },
];

const MatchesBox: FunctionComponent = () => {
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
        <div className="h-full shrink-0 flex flex-col items-start justify-between text-sm">
            <div className="rounded-3xs bg-darkslategray-300 w-full h-full overflow-hidden shrink-0 flex flex-col items-center justify-between">
                <div className="w-[445px] flex flex-row items-center justify-between p-[5px] box-border">
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

                <div className="flex-1 w-full flex flex-col items-start justify-between p-2.5 box-border text-center text-5xs">
                    {matchesList.map((item) => (
                        <div key={item.id} className="self-stretch overflow-hidden flex flex-row items-center justify-between py-[5px] pr-[5px] pl-0 border-b-[1px] border-solid border-darkslategray-100">
                            <div className="relative w-11 h-5 text-mediumslateblue font-light">
                                <p className="m-0">{item.date}</p>
                                <p className="m-0">{item.time}</p>
                            </div>

                            <div className="shrink-0 flex flex-row items-center justify-start gap-[7px]">
                                {item.team1.winLose.map((winLoseItem, index) => (
                                    <div key={index} className="relative w-[15px] h-[15px] rounded-[5px] bg-mediumslateblue flex items-center justify-center">{winLoseItem}</div>
                                ))}
                            </div>

                            <div className="shrink-0 flex flex-row items-center justify-start gap-[15px] text-left text-xs">
                                <div className="w-20 shrink-0 flex flex-row items-center justify-start gap-[5px]">
                                    <img
                                        className=" rounded-13xl w-5 h-5 object-cover"
                                        alt={item.team1.name}
                                        src={item.team1.imageUrl}
                                    />
                                    <div className="flex items-center justify-start shrink-0">{item.team1.name}</div>
                                </div>

                                <div className="rounded-8xs bg-lightsteelblue-100 shrink-0 flex flex-row items-center justify-center p-0.5 gap-[2px] text-center text-mediumslateblue border-[1px] border-solid border-mediumslateblue">
                                    <div className="relative font-black flex items-center justify-center w-2.5 shrink-0">{item.score.team1}</div>
                                    <div className="relative font-black flex items-center justify-center w-2.5 shrink-0">-</div>
                                    <div className="relative font-black flex items-center justify-center w-2.5 shrink-0">{item.score.team2}</div>

                                </div>

                                <div className="w-20 shrink-0 flex flex-row items-center justify-end gap-[5px] text-right">
                                    <div className=" flex items-center justify-end shrink-0">{item.team2.name}</div>
                                    <img
                                        className=" rounded-13xl w-5 h-5 object-cover"
                                        alt={item.team2.imageUrl}
                                        src={item.team2.imageUrl}
                                    />
                                </div>
                            </div>

                            <div className="shrink-0 flex flex-row items-center justify-start gap-[7px]">
                                {item.team2.winLose.map((winLoseItem, index) => (
                                    <div key={index} className="relative w-[15px] h-[15px] rounded-[5px] bg-mediumslateblue flex items-center justify-center">{winLoseItem}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MatchesBox
