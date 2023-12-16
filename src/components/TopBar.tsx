import { FunctionComponent } from "react"

const TopBar: FunctionComponent = () => {
  return (
    <>
      <div className="absolute w-full top-[0px] left-[-3px] bg-darkslategray-300 flex flex-row items-center justify-end py-2 px-[9px] box-border gap-[15px] text-sm text-lightsteelblue-100 font-inter">
        <img
          className="relative w-5 h-[19.99px] object-cover"
          alt=""
          src="/vector@2x.png"
        />
        <div className="relative font-medium">Search for...</div>
        <div className="relative w-[225px] h-[60px] text-white">
          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-darkslategray-300 w-[225px] h-[60px]" />
          <div className="absolute top-[10px] left-[9px] rounded-[50%] bg-gainsboro w-10 h-10" />
          <div className="absolute top-[13px] left-[60px] font-black">
            Rob Bets
          </div>
          <div className="absolute top-[33px] left-[60px]">RawStats</div>
        </div>
      </div>
    </>
  )
}

export default TopBar
