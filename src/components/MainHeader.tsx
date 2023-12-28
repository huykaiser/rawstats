import { FunctionComponent } from "react"
import { Button } from "./ui/button"
import { ArrowDownToLine } from "lucide-react"

const MainHeader: FunctionComponent = () => {
    return (
        <div className="self-stretch flex flex-row items-center justify-between mb-[10px]">
            <div className=" w-[420px] h-[29px] flex">
                <div className="flex flex-row items-center justify-between">
                    <img
                        className="rounded-[50%] w-6 h-6 object-cover mr-4"
                        alt=""
                        src="/images/ellipse-4@2x.png"
                    />
                    <div className="font-black flex items-center w-[210px] h-[29px] shrink-0 text-[20px]">RAW Cup</div>
                </div>

                <div className="text-darkgray text-[16px] w-[150px] h-7">
                    <div className="flex items-center w-[150px]">
                        <span className="w-full">
                            <p className="m-0">{`Argentina vs. Italy `}</p>
                            <p className="m-0 text-5xs">[RAW-000078]</p>
                        </span>
                    </div>
                </div>
            </div>

            {/* EXPORT DATA BUTTON */}
            <div className="relative h-[30px] text-center text-xs">
                <Button className="hover:bg-secondary hover:text-secondary-foreground">Export data <ArrowDownToLine/></Button>
            </div>
        </div>
    )
}

export default MainHeader
