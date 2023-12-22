import { FunctionComponent } from "react"

const TopBar: FunctionComponent = () => {
    return (
        <div className="bg-darkslategray-300 w-full flex justify-end items-center gap-[20px] py-[10px] text-lightsteelblue-100 font-inter text-sm">
            <img
                className="h-[19.99px] object-cover hover:scale-[1.5] transition duration-500"
                alt="search"
                src="/look.svg"
            />

            <div className="font-medium">Search for...</div>

            <div className=" rounded-8xs bg-darkslategray-300" />
                <div className=" rounded-[50%] bg-gainsboro w-10 h-10" />

                <div className="p-[10px] mr-32">
                    <div className=" font-black">Rob Bets</div>
                    <div className="">RawStats</div>
                </div>
        </div>
    )
}

export default TopBar
