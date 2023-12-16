import { FunctionComponent } from "react"

const SideBar: FunctionComponent = () => {
  return (
    <>
      <div className="absolute top-[0px] left-[0px] inset-y-0 bg-darkslategray-300 w-20 h-full flex flex-col items-start justify-start">
        <div className="my-0 mx-[!important] absolute top-[22px] left-[15px] w-[50px] h-full flex flex-col items-center justify-start gap-[30px] z-[0]">
          <div className="flex flex-row items-center justify-center">
            <img
              className="relative w-10 h-[41.25px] object-cover"
              alt=""
              src="/rlogolila-1@2x.png"
            />
          </div>

          <div className="h-[500px] flex flex-col items-center justify-start gap-[30px]">
            <img
              className="relative w-[30px] h-10 object-cover"
              alt=""
              src="/vector@2x.png"
            />
            <img
              className="relative max-h-full w-10 object-cover"
              alt=""
              src="/line-96@2x.png"
            />
            <img
              className="relative w-[30px] h-[30px] object-cover"
              alt=""
              src="/vector@2x.png"
            />
            <img
              className="relative w-[30px] h-[30px] object-cover"
              alt=""
              src="/vector@2x.png"
            />
          </div>

          <div className="h-[250px] flex flex-col items-center justify-start gap-[30px]">
            <div className="relative w-[50px] h-6">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-lightsteelblue-100 w-[50px] h-6" />
              <div className="absolute top-[2px] left-[3px] rounded-[50%] bg-darkslategray-200 w-5 h-5" />
            </div>
            <div className="relative box-border w-[43px] h-[3px] border-t-[3px] border-solid border-darkslategray-200" />
            <img
              className="relative w-[30px] h-[28.8px] object-cover"
              alt=""
              src="/vector@2x.png"
            />
            <img
              className="relative w-[30px] h-[30px] object-cover"
              alt=""
              src="/vector@2x.png"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar
