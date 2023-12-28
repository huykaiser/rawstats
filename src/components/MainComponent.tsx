import { FunctionComponent, useEffect } from "react"
import MainHeader from "./MainHeader"
import MainStats2 from "./MainStats2"

const MainComponent: FunctionComponent = () => {
  return (
    <>
      <div className="w-full h-full overflow-auto flex flex-col items-start justify-start mt-[20px] px-2.5 box-border gap-[10px]">
        {/* MAIN HEADER */}
        <MainHeader />

        {/* MAIN STATS */}
        <MainStats2 />
      </div>
    </>

  )
}

export default MainComponent
