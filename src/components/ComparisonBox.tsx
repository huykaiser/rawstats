import { FunctionComponent } from "react"

const ComparisonBox: FunctionComponent = () => {
    return (
        <div className="h-full shrink-0 flex flex-col items-center justify-between">
            <div className="rounded-3xs bg-darkslategray-300 w-full h-full overflow-hidden shrink-0 flex flex-col items-center justify-between py-2.5 px-5 box-border">
                <div className="w-[445px] flex flex-row items-center justify-between p-[5px] box-border">
                    <div className="shrink-0 flex flex-row items-center justify-start py-0 px-2.5 border-b-[1px] border-solid border-darkslategray-300">
                        <div className="box-border w-[125px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid border-mediumslateblue">
                            <div className="relative flex items-center w-[120px] shrink-0">Compare stats</div>
                        </div>
                        <div className="box-border w-[125px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid border-darkgray">
                            <div className="relative flex items-center w-[120px] shrink-0">Line-up</div>
                        </div>
                    </div>
                    <div className="shrink-0 flex flex-col items-end justify-center gap-[1px]">
                        <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                        <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                        <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-between py-2.5 px-0 text-mediumblue">
                    <div className="self-stretch shrink-0 flex flex-row flex-wrap items-start justify-start gap-[6px]">
                        <div className="shrink-0 flex flex-row items-start justify-start gap-[94px]">
                            <div className="relative font-black inline-block w-[32.18px] h-[17.29px] shrink-0">
                                51%
                            </div>
                            <div className="relative text-white text-center inline-block w-[116.76px] h-[16.73px] shrink-0">
                                POSSESSION
                            </div>
                            <div className="relative font-black text-mediumslateblue text-right inline-block w-[36.18px] h-[17.85px] shrink-0">
                                49%
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-start justify-start gap-[6px]">
                            <div className="relative rounded-xl bg-mediumblue w-[184px] h-[5px]" />
                            <div className="relative rounded-xl bg-mediumslateblue w-[184px] h-[5px]" />
                        </div>
                    </div>
                    <div className="self-stretch shrink-0 flex flex-row flex-wrap items-center justify-start gap-[6px]">
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[94px]">
                            <div className="relative font-black inline-block w-[32.18px] h-[17.29px] shrink-0">
                                29
                            </div>
                            <div className="relative text-white text-center inline-block w-[116.76px] h-[16.73px] shrink-0">
                                SHOTS
                            </div>
                            <div className="relative font-black text-mediumslateblue text-right inline-block w-[36.18px] h-[17.85px] shrink-0">
                                10
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[6px]">
                            <div className="relative rounded-xl bg-mediumblue w-[184px] h-[5px]" />
                            <div className="h-[5px] shrink-0 flex flex-col items-start justify-between">
                                <div className="relative rounded-xl bg-mediumslateblue w-[100px] h-[5px]" />
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch shrink-0 flex flex-row flex-wrap items-center justify-start gap-[6px]">
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[94px]">
                            <div className="relative font-black inline-block w-[32.18px] h-[17.29px] shrink-0">
                                661
                            </div>
                            <div className="relative text-white text-center inline-block w-[116.76px] h-[16.73px] shrink-0">
                                PASSES
                            </div>
                            <div className="relative font-black text-mediumslateblue text-right inline-block w-[36.18px] h-[17.85px] shrink-0">
                                246
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[6px]">
                            <div className="relative rounded-xl bg-mediumblue w-[184px] h-[5px]" />
                            <div className="relative rounded-xl bg-mediumslateblue w-[85px] h-[5px]" />
                        </div>
                    </div>
                    <div className="self-stretch shrink-0 flex flex-row flex-wrap items-center justify-start gap-[6px]">
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[30px]">
                            <div className="relative font-black inline-block w-10 h-[17.29px] shrink-0">
                                53%
                            </div>
                            <div className="relative text-white text-center inline-block w-[232px] h-[17px] shrink-0">
                                SUCCESSFUL DRIBBLINGS %
                            </div>
                            <div className="relative font-black text-mediumslateblue text-right inline-block w-[36.18px] h-[17.85px] shrink-0">
                                53%
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[6px]">
                            <div className="relative rounded-xl bg-mediumblue w-[184px] h-[5px]" />
                            <div className="relative rounded-xl bg-mediumslateblue w-[184px] h-[5px]" />
                        </div>
                    </div>
                    <div className="self-stretch shrink-0 flex flex-row flex-wrap items-center justify-start gap-[6px]">
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[65px]">
                            <div className="relative font-black inline-block w-[32.18px] h-[17.29px] shrink-0">
                                47
                            </div>
                            <div className="relative text-white text-center inline-block w-[175.49px] h-[16.73px] shrink-0">
                                TACKLES
                            </div>
                            <div className="relative font-black text-mediumslateblue text-right inline-block w-[36.18px] h-[17.85px] shrink-0">
                                29
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[6px]">
                            <div className="relative rounded-xl bg-mediumblue w-[184px] h-[5px]" />
                            <div className="h-[5px] shrink-0 flex flex-col items-start justify-center">
                                <div className="relative rounded-xl bg-mediumslateblue w-[111px] h-[5px]" />
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch shrink-0 flex flex-row flex-wrap items-center justify-start gap-[6px]">
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[45px]">
                            <div className="relative font-black inline-block w-[35px] h-[17.29px] shrink-0">
                                55%
                            </div>
                            <div className="relative text-white text-center inline-block w-[212px] h-[17px] shrink-0">
                                SUCCESSFUL TACKLES %
                            </div>
                            <div className="relative font-black text-mediumslateblue text-right inline-block w-[36.18px] h-[17.85px] shrink-0">
                                45%
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[6px]">
                            <div className="relative rounded-xl bg-mediumblue w-[184px] h-[5px]" />
                            <div className="relative rounded-xl bg-mediumslateblue w-[155px] h-[5px]" />
                        </div>
                    </div>
                    <div className="self-stretch shrink-0 flex flex-row flex-wrap items-center justify-start gap-[6px]">
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[65px]">
                            <div className="relative font-black inline-block w-[32.18px] h-[17.29px] shrink-0">
                                1
                            </div>
                            <div className="relative text-white text-center inline-block w-[175.49px] h-[16.73px] shrink-0">
                                OFFSIDE
                            </div>
                            <div className="relative font-black text-mediumslateblue text-right inline-block w-[36.18px] h-[17.85px] shrink-0">
                                6
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[6px]">
                            <div className="relative rounded-xl bg-mediumblue w-[50px] h-[5px]" />
                            <div className="relative rounded-xl bg-mediumslateblue w-[184px] h-[5px]" />
                        </div>
                    </div>
                    <div className="self-stretch shrink-0 flex flex-row flex-wrap items-center justify-start gap-[6px]">
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[65px]">
                            <div className="relative font-black inline-block w-[32.18px] h-[17.29px] shrink-0">
                                6
                            </div>
                            <div className="relative text-white text-center inline-block w-[175.49px] h-[16.73px] shrink-0">
                                CORNERS
                            </div>
                            <div className="relative font-black text-mediumslateblue text-right inline-block w-[36.18px] h-[17.85px] shrink-0">
                                3
                            </div>
                        </div>
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[6px]">
                            <div className="relative rounded-xl bg-mediumblue w-[184px] h-[5px]" />
                            <div className="relative rounded-xl bg-mediumslateblue w-[100px] h-[5px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComparisonBox
