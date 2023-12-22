import { FunctionComponent } from "react"

const PlayerBox: FunctionComponent = () => {
    return (
        <div className="rounded-3xs bg-darkslategray-300 w-full h-[200px] flex flex-col items-center justify-between text-center font-inter">
            <div className="w-[270px] flex flex-row items-center justify-between p-[5px] box-border text-left font-montserrat">
                <div className="shrink-0 flex flex-row items-center justify-start py-0 px-2.5 border-b-[1px] border-solid border-darkslategray-300">
                    <div className="box-border w-[125px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid border-mediumslateblue">
                        <div className="relative font-black flex items-center w-[120px] shrink-0">
                            Top Player
                        </div>
                    </div>
                    <div className="box-border w-[125px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid border-darkgray">
                        <div className="relative flex items-center w-[120px] shrink-0">
                            All Players
                        </div>
                    </div>
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
                        src="/witsel-1@2x.png"
                    />
                </div>
                <div className="w-[120px] h-[120px] overflow-hidden shrink-0 flex flex-col items-center justify-between py-2.5 px-0 box-border">
                    <div className="h-[86px] flex flex-col items-center justify-center">
                        <div className="box-border w-[115px] shrink-0 flex flex-row items-center justify-between border-b-[1px] border-solid border-darkslategray-100">
                            <div className="relative leading-[24px] font-medium">
                                Matches played
                            </div>
                            <i className="relative text-xs leading-[24px] font-black text-mediumslateblue">
                                8
                            </i>
                        </div>
                        <div className="box-border w-[115px] shrink-0 flex flex-row items-center justify-between border-b-[1px] border-solid border-darkslategray-100">
                            <div className="relative leading-[24px] font-medium">
                                Goals scored
                            </div>
                            <i className="relative text-xs leading-[24px] font-black text-mediumslateblue">
                                6
                            </i>
                        </div>
                        <div className="box-border w-[115px] shrink-0 flex flex-row items-center justify-between border-b-[1px] border-solid border-darkslategray-100">
                            <div className="relative leading-[24px] font-medium">
                                Assists given
                            </div>
                            <i className="relative text-xs leading-[24px] font-black text-mediumslateblue">
                                3
                            </i>
                        </div>
                        <div className="box-border w-[115px] shrink-0 flex flex-row items-center justify-between border-b-[1px] border-solid border-darkslategray-100">
                            <div className="relative leading-[24px] font-medium">
                                expected Goals/90
                            </div>
                            <i className="relative text-xs leading-[24px] font-black text-mediumslateblue">
                                1.22
                            </i>
                        </div>
                        <div className="box-border w-[115px] shrink-0 flex flex-row items-center justify-between border-b-[1px] border-solid border-darkslategray-100">
                            <div className="relative leading-[24px] font-medium">
                                Fouls made
                            </div>
                            <i className="relative text-xs leading-[24px] font-black text-mediumslateblue">
                                2
                            </i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-3xs bg-slateblue w-[270px] flex flex-row flex-wrap items-center justify-between py-0 px-5 box-border">
                <div className="h-[38px] shrink-0 flex flex-col items-center justify-center">
                    <i className="relative leading-[10px] font-bold">14</i>
                    <b className="relative text-8xs leading-[5px]">
                        <p className="m-0">Matches</p>
                        <p className="m-0">played</p>
                    </b>
                </div>
                <div className="h-[38px] shrink-0 flex flex-col items-center justify-center">
                    <i className="relative leading-[10px] font-bold">7,1</i>
                    <b className="relative text-8xs leading-[5px]">
                        <p className="m-0">Average</p>
                        <p className="m-0">rating</p>
                    </b>
                </div>
                <div className="h-[38px] shrink-0 flex flex-col items-center justify-center">
                    <i className="relative leading-[10px] inline-block font-bold w-[15px]">
                        12
                    </i>
                    <b className="relative text-8xs leading-[5px]">
                        <p className="m-0">Event</p>
                        <p className="m-0">goals</p>
                    </b>
                </div>
                <div className="h-[38px] shrink-0 flex flex-col items-center justify-center">
                    <i className="relative leading-[10px] font-bold">4</i>
                    <b className="relative text-8xs leading-[5px]">
                        <p className="m-0">Event</p>
                        <p className="m-0">assists</p>
                    </b>
                </div>
            </div>
        </div>
    )
}

export default PlayerBox
