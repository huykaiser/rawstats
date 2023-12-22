import { FunctionComponent } from "react"


const MatchesBox: FunctionComponent = () => {
    return (
        <div className="h-full shrink-0 flex flex-col items-start justify-between text-sm">
            <div className="rounded-3xs bg-darkslategray-300 w-full h-full overflow-hidden shrink-0 flex flex-col items-center justify-between">
                <div className="w-[445px] flex flex-row items-center justify-between p-[5px] box-border">
                    <div className="shrink-0 flex flex-row items-center justify-start py-0 px-2.5 border-b-[1px] border-solid border-darkslategray-300">
                        <div className="box-border w-[125px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid border-mediumslateblue">
                            <div className="relative flex items-center w-[120px] shrink-0">
                                Matches
                            </div>
                        </div>
                        <div className="box-border w-[125px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid border-darkgray">
                            <div className="relative flex items-center w-[120px] shrink-0">
                                Standings
                            </div>
                        </div>
                    </div>
                    <div className="shrink-0 flex flex-col items-end justify-center gap-[1px]">
                        <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                        <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                        <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                    </div>
                </div>
                <div className="flex-1 w-[450px] flex flex-col items-start justify-between p-2.5 box-border text-center text-5xs">
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-[5px] pr-[5px] pl-0 border-b-[1px] border-solid border-darkslategray-100">
                        <div className="relative w-11 h-5 text-mediumslateblue">
                            <div className="absolute top-[0px] left-[0px] [text-decoration:underline] font-light">
                                <p className="m-0">2023/06/30</p>
                                <p className="m-0">5:00pm</p>
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[7px]">
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumslateblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    W
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    L
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    L
                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[15px] text-left text-xs">
                            <div className="w-20 shrink-0 flex flex-row items-center justify-start gap-[5px]">
                                <img
                                    className="relative rounded-13xl w-5 h-5 object-cover"
                                    alt=""
                                    src="/frame-26@2x.png"
                                />
                                <div className="relative [text-decoration:underline] flex items-center w-[120px] shrink-0">
                                    Argentina
                                </div>
                            </div>
                            <div className="rounded-8xs bg-lightsteelblue-100 shrink-0 flex flex-row items-center justify-center p-0.5 gap-[2px] text-center text-mediumslateblue border-[1px] border-solid border-mediumslateblue">
                                <div className="relative [text-decoration:underline] font-black flex items-center justify-center w-2.5 shrink-0">
                                    1
                                </div>
                                <div className="relative [text-decoration:underline] font-black flex items-center justify-center w-2.5 shrink-0">
                                    -
                                </div>
                                <div className="relative [text-decoration:underline] font-black flex items-center justify-center w-2.5 shrink-0">
                                    2
                                </div>
                            </div>
                            <div className="w-20 shrink-0 flex flex-row items-center justify-end gap-[5px] text-right">
                                <div className="relative [text-decoration:underline] flex items-center w-[120px] shrink-0">
                                    Italy
                                </div>
                                <img
                                    className="relative rounded-13xl w-5 h-5 object-cover"
                                    alt=""
                                    src="/frame-27@2x.png"
                                />
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[7px]">
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumslateblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    W
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-darkslategray-100 w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    D
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    L
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-[5px] pr-[5px] pl-0 font-inter border-b-[1px] border-solid border-darkslategray-100">
                        <div className="relative w-[46px] h-5 text-mediumslateblue">
                            <div className="absolute top-[0px] left-[0px] [text-decoration:underline]">
                                <p className="m-0">2023/06/30</p>
                                <p className="m-0">5:00pm</p>
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[7px] font-montserrat">
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumslateblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    W
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumslateblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    W
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    L
                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[15px] text-left text-xs">
                            <div className="w-20 shrink-0 flex flex-row items-center justify-start gap-[5px]">
                                <img
                                    className="relative rounded-13xl w-5 h-5 object-cover"
                                    alt=""
                                    src="/frame-27@2x.png"
                                />
                                <div className="relative [text-decoration:underline] flex items-center w-[120px] shrink-0">
                                    Portugal
                                </div>
                            </div>
                            <div className="rounded-8xs bg-lightsteelblue-100 shrink-0 flex flex-row items-center justify-center p-0.5 gap-[2px] text-center text-mediumslateblue font-montserrat border-[1px] border-solid border-mediumslateblue">
                                <div className="relative [text-decoration:underline] font-black flex items-center justify-center w-2.5 shrink-0">
                                    4
                                </div>
                                <div className="relative [text-decoration:underline] font-black flex items-center justify-center w-2.5 shrink-0">
                                    -
                                </div>
                                <div className="relative [text-decoration:underline] font-black flex items-center justify-center w-2.5 shrink-0">
                                    4
                                </div>
                            </div>
                            <div className="w-20 shrink-0 flex flex-row items-center justify-end gap-[5px] text-right">
                                <div className="relative [text-decoration:underline] flex items-center w-[120px] shrink-0">
                                    Belgium
                                </div>
                                <img
                                    className="relative rounded-13xl w-5 h-5 object-cover"
                                    alt=""
                                    src="/frame-26@2x.png"
                                />
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[7px] font-montserrat">
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-darkslategray-100 w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    D
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumslateblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    W
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    L
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-[5px] pr-[5px] pl-0 border-b-[1px] border-solid border-darkslategray-100">
                        <div className="relative w-[45px] h-5 text-mediumslateblue">
                            <div className="absolute top-[0px] left-[0px] [text-decoration:underline] font-medium">
                                <p className="m-0">2023/06/30</p>
                                <p className="m-0">5:00pm</p>
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[7px]">
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-darkslategray-100 w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    D
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumslateblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    W
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    L
                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[15px] text-left text-xs">
                            <div className="w-20 shrink-0 flex flex-row items-center justify-start gap-[5px]">
                                <img
                                    className="relative rounded-13xl w-5 h-5 object-cover"
                                    alt=""
                                    src="/frame-26@2x.png"
                                />
                                <div className="relative [text-decoration:underline] flex items-center w-[120px] shrink-0">
                                    Uruguay
                                </div>
                            </div>
                            <div className="rounded-8xs bg-lightsteelblue-100 shrink-0 flex flex-row items-center justify-start p-0.5 gap-[2px] text-center text-mediumslateblue border-[1px] border-solid border-mediumslateblue">
                                <div className="relative [text-decoration:underline] font-black flex items-center justify-center w-2.5 shrink-0">
                                    0
                                </div>
                                <div className="relative [text-decoration:underline] font-black flex items-center justify-center w-2.5 shrink-0">
                                    -
                                </div>
                                <div className="relative [text-decoration:underline] font-black flex items-center justify-center w-2.5 shrink-0">
                                    0
                                </div>
                            </div>
                            <div className="w-20 shrink-0 flex flex-row items-center justify-end gap-[5px] text-right">
                                <div className="relative [text-decoration:underline] flex items-center w-[120px] shrink-0">
                                    Poland
                                </div>
                                <img
                                    className="relative rounded-13xl w-5 h-5 object-cover"
                                    alt=""
                                    src="/frame-27@2x.png"
                                />
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[7px]">
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumslateblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    W
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumslateblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    W
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    L
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-[5px] pr-[5px] pl-0 border-b-[1px] border-solid border-darkslategray-100">
                        <div className="relative w-11 h-5 text-mediumslateblue">
                            <div className="absolute top-[0px] left-[0px] [text-decoration:underline] font-light">
                                <p className="m-0">2023/06/30</p>
                                <p className="m-0">5:00pm</p>
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[7px]">
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumslateblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    W
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    L
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    L
                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[15px] text-left text-xs">
                            <div className="w-20 shrink-0 flex flex-row items-center justify-start gap-[5px]">
                                <img
                                    className="relative rounded-13xl w-5 h-5 object-cover"
                                    alt=""
                                    src="/frame-26@2x.png"
                                />
                                <div className="relative [text-decoration:underline] flex items-center w-[120px] shrink-0">
                                    Argentina
                                </div>
                            </div>
                            <div className="rounded-8xs bg-lightsteelblue-100 shrink-0 flex flex-row items-center justify-center p-0.5 gap-[2px] text-center text-mediumslateblue border-[1px] border-solid border-mediumslateblue">
                                <div className="relative [text-decoration:underline] font-black flex items-center justify-center w-2.5 shrink-0">
                                    1
                                </div>
                                <div className="relative [text-decoration:underline] font-black flex items-center justify-center w-2.5 shrink-0">
                                    -
                                </div>
                                <div className="relative [text-decoration:underline] font-black flex items-center justify-center w-2.5 shrink-0">
                                    2
                                </div>
                            </div>
                            <div className="w-20 shrink-0 flex flex-row items-center justify-end gap-[5px] text-right">
                                <div className="relative [text-decoration:underline] flex items-center w-[120px] shrink-0">
                                    Italy
                                </div>
                                <img
                                    className="relative rounded-13xl w-5 h-5 object-cover"
                                    alt=""
                                    src="/frame-27@2x.png"
                                />
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[7px]">
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumslateblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    W
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-darkslategray-100 w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    D
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    L
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-[5px] pr-[5px] pl-0 font-inter border-b-[1px] border-solid border-darkslategray-100">
                        <div className="relative w-[46px] h-5 text-mediumslateblue">
                            <div className="absolute top-[0px] left-[0px] [text-decoration:underline]">
                                <p className="m-0">2023/06/30</p>
                                <p className="m-0">5:00pm</p>
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[7px] font-montserrat">
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumslateblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    W
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumslateblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    W
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    L
                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[15px] text-left text-xs">
                            <div className="w-20 shrink-0 flex flex-row items-center justify-start gap-[5px]">
                                <img
                                    className="relative rounded-13xl w-5 h-5 object-cover"
                                    alt=""
                                    src="/frame-27@2x.png"
                                />
                                <div className="relative [text-decoration:underline] flex items-center w-[120px] shrink-0">
                                    Portugal
                                </div>
                            </div>
                            <div className="rounded-8xs bg-lightsteelblue-100 shrink-0 flex flex-row items-center justify-center p-0.5 gap-[2px] text-center text-mediumslateblue font-montserrat border-[1px] border-solid border-mediumslateblue">
                                <div className="relative [text-decoration:underline] font-black flex items-center justify-center w-2.5 shrink-0">
                                    4
                                </div>
                                <div className="relative [text-decoration:underline] font-black flex items-center justify-center w-2.5 shrink-0">
                                    -
                                </div>
                                <div className="relative [text-decoration:underline] font-black flex items-center justify-center w-2.5 shrink-0">
                                    4
                                </div>
                            </div>
                            <div className="w-20 shrink-0 flex flex-row items-center justify-end gap-[5px] text-right">
                                <div className="relative [text-decoration:underline] flex items-center w-[120px] shrink-0">
                                    Belgium
                                </div>
                                <img
                                    className="relative rounded-13xl w-5 h-5 object-cover"
                                    alt=""
                                    src="/frame-26@2x.png"
                                />
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[7px] font-montserrat">
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-darkslategray-100 w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    D
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumslateblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    W
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    L
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-[5px] pr-[5px] pl-0 border-b-[1px] border-solid border-darkslategray-100">
                        <div className="relative w-[45px] h-5 text-mediumslateblue">
                            <div className="absolute top-[0px] left-[0px] [text-decoration:underline] font-medium">
                                <p className="m-0">2023/06/30</p>
                                <p className="m-0">5:00pm</p>
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[7px]">
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-darkslategray-100 w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    D
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumslateblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    W
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    L
                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[15px] text-left text-xs">
                            <div className="w-20 shrink-0 flex flex-row items-center justify-start gap-[5px]">
                                <img
                                    className="relative rounded-13xl w-5 h-5 object-cover"
                                    alt=""
                                    src="/frame-26@2x.png"
                                />
                                <div className="relative [text-decoration:underline] flex items-center w-[120px] shrink-0">
                                    Uruguay
                                </div>
                            </div>
                            <div className="rounded-8xs bg-lightsteelblue-100 shrink-0 flex flex-row items-center justify-start p-0.5 gap-[2px] text-center text-mediumslateblue border-[1px] border-solid border-mediumslateblue">
                                <div className="relative [text-decoration:underline] font-black flex items-center justify-center w-2.5 shrink-0">
                                    0
                                </div>
                                <div className="relative [text-decoration:underline] font-black flex items-center justify-center w-2.5 shrink-0">
                                    -
                                </div>
                                <div className="relative [text-decoration:underline] font-black flex items-center justify-center w-2.5 shrink-0">
                                    0
                                </div>
                            </div>
                            <div className="w-20 shrink-0 flex flex-row items-center justify-end gap-[5px] text-right">
                                <div className="relative [text-decoration:underline] flex items-center w-[120px] shrink-0">
                                    Poland
                                </div>
                                <img
                                    className="relative rounded-13xl w-5 h-5 object-cover"
                                    alt=""
                                    src="/frame-27@2x.png"
                                />
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[7px]">
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumslateblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    W
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumslateblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    W
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    L
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-[5px] pr-[5px] pl-0 border-b-[1px] border-solid border-darkslategray-100">
                        <div className="relative w-11 h-5 text-mediumslateblue">
                            <div className="absolute top-[0px] left-[0px] [text-decoration:underline] font-light">
                                <p className="m-0">2023/06/30</p>
                                <p className="m-0">5:00pm</p>
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[7px]">
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumslateblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    W
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    L
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    L
                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[15px] text-left text-xs">
                            <div className="w-20 shrink-0 flex flex-row items-center justify-start gap-[5px]">
                                <img
                                    className="relative rounded-13xl w-5 h-5 object-cover"
                                    alt=""
                                    src="/frame-26@2x.png"
                                />
                                <div className="relative [text-decoration:underline] flex items-center w-[120px] shrink-0">
                                    Argentina
                                </div>
                            </div>
                            <div className="rounded-8xs bg-lightsteelblue-100 shrink-0 flex flex-row items-center justify-center p-0.5 gap-[2px] text-center text-mediumslateblue border-[1px] border-solid border-mediumslateblue">
                                <div className="relative [text-decoration:underline] font-black flex items-center justify-center w-2.5 shrink-0">
                                    1
                                </div>
                                <div className="relative [text-decoration:underline] font-black flex items-center justify-center w-2.5 shrink-0">
                                    -
                                </div>
                                <div className="relative [text-decoration:underline] font-black flex items-center justify-center w-2.5 shrink-0">
                                    2
                                </div>
                            </div>
                            <div className="w-20 shrink-0 flex flex-row items-center justify-end gap-[5px] text-right">
                                <div className="relative [text-decoration:underline] flex items-center w-[120px] shrink-0">
                                    Italy
                                </div>
                                <img
                                    className="relative rounded-13xl w-5 h-5 object-cover"
                                    alt=""
                                    src="/frame-27@2x.png"
                                />
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[7px]">
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumslateblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    W
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-darkslategray-100 w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    D
                                </div>
                            </div>
                            <div className="relative w-2.5 h-[10.1px]">
                                <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumblue w-2.5 h-2.5" />
                                <div className="absolute top-[0.1px] left-[0px] [text-decoration:underline] font-black flex items-center justify-center w-2.5 h-2.5">
                                    L
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MatchesBox
