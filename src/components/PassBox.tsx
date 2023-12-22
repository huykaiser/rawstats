import { FunctionComponent } from "react"

const PassBox: FunctionComponent = () => {
    return (
        <div className="rounded-3xs bg-darkslategray-300 w-full h-[200px] overflow-hidden shrink-0 flex flex-col items-center justify-between">
            <div className="w-[270px] flex flex-row items-center justify-between p-[5px] box-border">
                <div className="shrink-0 flex flex-row items-center justify-start py-0 px-2.5 border-b-[1px] border-solid border-darkslategray-300">
                    <div className="box-border w-[125px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid border-mediumslateblue">
                        <div className="relative font-black flex items-center w-[120px] shrink-0">
                            Forward Passes
                        </div>
                    </div>
                    <div className="box-border w-[125px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid border-darkgray">
                        <div className="relative flex items-center w-[120px] shrink-0">
                            Backward passes
                        </div>
                    </div>
                </div>
                <div className="shrink-0 flex flex-col items-end justify-center gap-[1px]">
                    <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                    <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                    <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                </div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-center py-0 pr-[0.014677058905363083px] pl-[0.014680851250886917px] box-border max-w-[314.2200012207031px]">
                <img
                    className="relative w-[220px] h-[120px] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/641cbce7975fcdaf1ca3bb34-totalprofitsgraphdashdarkwebflowtemplatesvg@2x.png"
                />
            </div>
        </div>
    )
}

export default PassBox
