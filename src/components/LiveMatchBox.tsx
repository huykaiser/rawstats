import { FunctionComponent } from "react"

const LiveMatchBox: FunctionComponent = () => {
    return (
        <div className="rounded-3xs bg-darkslategray-300 w-full h-full overflow-hidden shrink-0 flex flex-col items-center justify-between p-2.5 box-border">
            <div className="flex flex-row items-start justify-center">
                <div className="w-60 flex flex-col items-center justify-center">
                    <div className="self-stretch relative flex items-center justify-center h-[19.6px] shrink-0">
                        Live Match
                    </div>
                    <div className="self-stretch relative font-black text-mediumblue flex items-center justify-center h-[17.43px] shrink-0">
                        62 : 24
                    </div>
                </div>
                <div className="shrink-0 flex flex-col items-end justify-end gap-[1px]">
                    <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                    <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                    <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                </div>
            </div>
            <div className="w-60 flex flex-row items-center justify-center gap-[25px] text-mediumslateblue">
                <img
                    className="relative rounded-[31.47px] w-10 h-10 object-cover"
                    alt=""
                    src="/image@2x.png"
                />
                <div className="rounded-8xs bg-lightsteelblue-200 box-border w-16 shrink-0 flex flex-row items-center justify-center py-1.5 px-4 gap-[8px] border-[1px] border-solid border-mediumslateblue">
                    <div className="flex-1 relative font-black">1</div>
                    <div className="flex-1 relative font-black">-</div>
                    <div className="flex-1 relative font-black">2</div>
                </div>
                <img
                    className="relative rounded-[31.47px] w-10 h-10 object-cover"
                    alt=""
                    src="/image@2x.png"
                />
            </div>
            <div className="flex flex-col items-center justify-start text-xs">
                <div className="shrink-0 flex flex-col items-center justify-center">
                    <div className="relative">Shoot on Target</div>
                    <div className="w-[220px] shrink-0 flex flex-row items-center justify-between mt-[-15px] text-left text-mediumblue">
                        <div className="shrink-0 flex flex-col items-start justify-start gap-[4.72px]">
                            <div className="self-stretch relative font-black">7</div>
                            <div className="relative w-[105px] h-[3.15px]">
                                <div className="absolute top-[0px] left-[0px] rounded-[2.36px] bg-slateblue w-[105px] h-[3.15px]" />
                                <div className="absolute top-[0px] left-[33.29px] rounded-[2.36px] bg-mediumblue w-[71.71px] h-[3.15px]" />
                            </div>
                        </div>
                        <div className="self-stretch shrink-0 flex flex-col items-end justify-center gap-[4.72px] text-right text-mediumslateblue">
                            <div className="self-stretch relative font-black">3</div>
                            <div className="relative w-[105px] h-[3.15px]">
                                <div className="absolute top-[0px] left-[0px] rounded-[2.36px] bg-crimson-200 w-[105px] h-[3.15px]" />
                                <div className="absolute top-[0px] left-[0px] rounded-[2.36px] bg-mediumslateblue w-[34.15px] h-[3.15px]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shrink-0 flex flex-col items-center justify-center">
                    <div className="relative">Shoot</div>
                    <div className="w-[220px] shrink-0 flex flex-row items-center justify-between mt-[-15px] text-left text-mediumblue">
                        <div className="w-[100.8px] h-[22.73px] flex flex-col items-start justify-start gap-[4.72px]">
                            <div className="self-stretch relative font-black">12</div>
                            <div className="relative w-[105px] h-[3.15px]">
                                <div className="absolute top-[0px] left-[0px] rounded-[2.36px] bg-slateblue w-[105px] h-[3.15px]" />
                                <div className="absolute top-[0px] left-[16.22px] rounded-[2.36px] bg-mediumblue w-[88.78px] h-[3.15px]" />
                            </div>
                        </div>
                        <div className="w-[100.8px] h-[22.73px] flex flex-col items-end justify-center gap-[4.72px] text-right text-mediumslateblue">
                            <div className="self-stretch relative font-black">7</div>
                            <div className="relative w-[105px] h-[3.15px]">
                                <div className="absolute top-[0px] left-[0px] rounded-[2.36px] bg-crimson-200 w-[105px] h-[3.15px]" />
                                <div className="absolute top-[0px] left-[0px] rounded-[2.36px] bg-mediumslateblue w-[55.49px] h-[3.15px]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shrink-0 flex flex-col items-center justify-center">
                    <div className="relative">Fouls</div>
                    <div className="w-[220px] shrink-0 flex flex-row items-center justify-between mt-[-15px] text-left text-mediumblue">
                        <div className="w-[100.8px] h-[22.73px] flex flex-col items-start justify-start gap-[4.72px]">
                            <div className="self-stretch relative font-black">9</div>
                            <div className="relative w-[105px] h-[3.16px]">
                                <div className="absolute top-[0px] left-[0px] rounded-[2.36px] bg-slateblue w-[104.76px] h-[3.15px]" />
                                <div className="absolute top-[0.01px] left-[29.23px] rounded-[2.36px] bg-mediumblue w-[75.77px] h-[3.15px]" />
                            </div>
                        </div>
                        <div className="w-[100.8px] h-[22.73px] flex flex-col items-end justify-center gap-[4.72px] text-right text-mediumslateblue">
                            <div className="self-stretch relative font-black">4</div>
                            <div className="relative w-[105px] h-[3.15px]">
                                <div className="absolute top-[0px] left-[0px] rounded-[2.36px] bg-crimson-200 w-[105px] h-[3.15px]" />
                                <div className="absolute top-[0px] left-[0px] rounded-[2.36px] bg-mediumslateblue w-[37.06px] h-[3.15px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveMatchBox
