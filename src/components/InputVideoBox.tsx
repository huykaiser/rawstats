import { FunctionComponent } from "react"

const InputVideoBox: FunctionComponent = () => {
    return (
        <div className="h-full shrink-0 flex flex-col items-center justify-between text-xs">
            <div className="rounded-3xs bg-darkslategray-300 w-full h-full overflow-hidden shrink-0 flex flex-col items-start justify-between p-2.5 box-border gap-[10px]">
                <div className="w-full flex flex-row items-start justify-between text-sm">
                    <div className="w-full h-7 flex flex-row items-start justify-start py-0 px-2.5 box-border">
                        <div className="box-border w-[125px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid border-mediumslateblue">
                            <div className="relative flex items-center w-[120px] shrink-0">Live</div>
                        </div>

                        <div className="box-border w-[125px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid border-darkgray">
                            <div className="relative flex items-center w-[120px] shrink-0">Highlight</div>
                        </div>

                        <div className="box-border w-[125px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid border-darkgray">
                            <div className="relative flex items-center w-[120px] shrink-0">Technical</div>
                        </div>
                    </div>

                    {/* 3 DOTS */}
                    <div className="shrink-0 flex flex-col items-end justify-center gap-[1px]">
                        <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                        <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                        <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                    </div>
                </div>

                <div className="w-[96%] rounded-8xs bg-darkslategray-100 flex flex-row items-center justify-start py-[7px] px-3 gap-[22px] text-darkgray">
                    <div className="relative font-light">{`https://www.google.com/search?q=fifa23+minimap&tbm=isch&vedh=91....`}</div>
                    <img
                        className="relative w-[11.86px] h-4 object-cover"
                        alt=""
                        src="/vector@2x.png"
                    />
                    <img
                        className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                        alt=""
                        src="/copy@2x.png"
                    />
                </div>

                <img
                    className="relative rounded-8xs w-full h-[295.31px] object-cover"
                    alt=""
                    src="/video@2x.png"
                />

                <div className="flex flex-col items-start justify-start gap-[1px]">
                    <div className="relative font-black">Paris Saint Germain</div>
                    <div className="relative text-[10px] font-light">
                        999 Viewers
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputVideoBox
