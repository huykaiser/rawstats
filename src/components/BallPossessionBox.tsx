import { FunctionComponent, useState } from "react"
import { cn } from "../lib/utils";

let tabMenuList = [
    {
        title: "Ball Possession",
        isClicked: true
    },
    {
        title: "Played Passes",
        isClicked: false
    }
];

const BallPossessionBox: FunctionComponent = () => {
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
        <div className="rounded-3xs bg-darkslategray-300 w-full h-[200px] overflow-hidden shrink-0 flex flex-col items-center justify-between">
            <div className="w-[270px] flex flex-row items-center justify-between p-[5px] box-border">
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
            
            <div className="flex-1 flex flex-row items-center justify-center py-0 pr-[0.017708083614706993px] pl-[0.017692307010293007px] box-border max-w-[314.2200012207031px]">
                <img
                    className="relative w-[220px] h-[120px] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/images/641cbce7fad2b35b97fb1a71-totalsessionsgraphdashdarkwebflowtemplatesvg@2x.png"
                />
            </div>
        </div>
    )
}

export default BallPossessionBox
