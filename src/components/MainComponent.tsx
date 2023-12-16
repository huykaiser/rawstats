import React from 'react'

const MainComponent = () => {
  return (
    <>
      <div className="absolute top-[78px] left-[80px] w-[1357px] h-[946px] overflow-hidden flex flex-col items-start justify-start p-2.5 box-border gap-[10px]">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="relative w-[420px] h-[29px]">
            <div className="absolute top-[0px] left-[0px] w-[250px] flex flex-row items-center justify-between">
              <img
                className="relative rounded-[50%] w-6 h-6 object-cover"
                alt=""
                src="/ellipse-4@2x.png"
              />
              <div className="relative font-black flex items-center w-[210px] h-[29px] shrink-0">
                RAW Cup
              </div>
            </div>
            <div className="absolute top-[0.5px] left-[270px] w-[150px] h-7 text-[16px] text-darkgray">
              <div className="absolute top-[0px] left-[0px] flex items-center w-[150px]">
                <span className="w-full">
                  <p className="m-0">{`Argentina vs. Italy `}</p>
                  <p className="m-0 text-5xs">[RAW-000078]</p>
                </span>
              </div>
            </div>
          </div>
          <div className="relative w-[100px] h-[30px] text-center text-xs">
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumslateblue w-[100px] h-[30px]" />
            <div className="absolute top-[8px] left-[calc(50%_-_47px)] leading-[14px] font-medium">
              Export data
            </div>
            <img
              className="absolute h-[33.33%] w-[1.2%] top-[33.33%] right-[14.99%] bottom-[33.33%] left-[83.81%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/vector@2x.png"
            />
            <img
              className="absolute h-[13.64%] w-[8.18%] top-[53.03%] right-[12.1%] bottom-[33.34%] left-[79.72%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/vector@2x.png"
            />
          </div>
        </div>
        <div className="w-[1316px] flex flex-row items-center justify-center gap-[20px] text-sm">
          <div className="h-[420px] shrink-0 flex flex-col items-center justify-between text-xs">
            <div className="rounded-3xs bg-darkslategray-300 w-[556px] h-[420px] overflow-hidden shrink-0 flex flex-col items-start justify-between p-2.5 box-border">
              <div className="w-[530px] flex flex-row items-start justify-between text-sm">
                <div className="w-[450px] h-7 flex flex-row items-start justify-start py-0 px-2.5 box-border">
                  <div className="box-border w-[125px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid border-mediumslateblue">
                    <div className="relative flex items-center w-[120px] shrink-0">
                      Live
                    </div>
                  </div>
                  <div className="box-border w-[125px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid border-darkgray">
                    <div className="relative flex items-center w-[120px] shrink-0">
                      Highlight
                    </div>
                  </div>
                  <div className="box-border w-[125px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid border-darkgray">
                    <div className="relative flex items-center w-[120px] shrink-0">
                      Technical
                    </div>
                  </div>
                </div>
                <div className="shrink-0 flex flex-col items-end justify-center gap-[1px]">
                  <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                  <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                  <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                </div>
              </div>
              <div className="rounded-8xs bg-darkslategray-100 flex flex-row items-center justify-start py-[7px] px-3 gap-[22px] text-darkgray">
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
                className="relative rounded-8xs w-[525px] h-[295.31px] object-cover"
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
          <div className="h-[420px] shrink-0 flex flex-col items-center justify-between text-center">
            <div className="rounded-3xs bg-darkslategray-300 w-[270px] h-[200px] overflow-hidden shrink-0 flex flex-col items-center justify-between p-2.5 box-border">
              <div className="self-stretch flex flex-row items-start justify-end">
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
            <div className="shrink-0 flex flex-col items-start justify-start relative gap-[10px] text-left text-xs">
              <div className="relative rounded-3xs bg-darkslategray-300 w-[270px] h-[200px] z-[0]" />
              <div className="my-0 mx-[!important] absolute top-[11px] left-[0px] box-border w-[270px] h-7 flex flex-row items-start justify-start py-0 px-2.5 z-[1] border-b-[1px] border-solid border-darkslategray-300">
                <div className="box-border w-[50px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid border-mediumslateblue">
                  <div className="relative flex items-center w-[120px] shrink-0">
                    Heat
                  </div>
                </div>
                <div className="box-border w-[50px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid border-darkgray">
                  <div className="relative flex items-center w-[120px] shrink-0">
                    Map
                  </div>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[49px] left-[22.5px] w-[225px] h-[140px] flex flex-row flex-wrap items-center justify-center gap-[10px] z-[2] text-5xs text-lightsteelblue-100 font-inter">
                <div className="relative w-[106.84px] h-[18.48px]">
                  <div className="absolute top-[0px] left-[88.77px] leading-[14px] flex items-center w-[17.91px]">
                    47%
                  </div>
                  <div className="absolute h-[calc(100%_-_14.48px)] w-[99.85%] top-[14.48px] right-[0%] bottom-[0px] left-[0.15%] rounded-3xs bg-darkslategray-200" />
                  <div className="absolute h-[calc(100%_-_14.48px)] w-[52.7%] top-[14.48px] right-[47.07%] bottom-[0px] left-[0.22%] rounded-3xs bg-mediumslateblue" />
                  <div className="absolute top-[2px] left-[0px] leading-[14px] flex items-center w-[54.51px]">
                    Map coverage
                  </div>
                </div>
                <div className="rounded-sm bg-mediumseagreen-200 flex flex-row items-center justify-center py-[3px] px-[5px] gap-[1.99px] text-[9px] text-mediumseagreen-100 border-[1px] border-solid border-mediumseagreen-200">
                  <div className="shrink-0 flex flex-row items-center justify-start py-0 pr-[0.0000019073486328125px] pl-0 gap-[4px]">
                    <div className="relative rounded bg-mediumseagreen-100 w-1 h-1 min-w-[4px] max-w-[4px] min-h-[4px] max-h-[4px]" />
                    <div className="shrink-0 flex flex-row items-start justify-start py-0 pr-[1.6299991607666016px] pl-0">
                      <div className="relative leading-[14px] font-medium">
                        8.5%
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-row items-start justify-start">
                    <div className="w-[9.02px] h-[9px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[1.0530000925064087px] pb-[1.0530003309249878px] pr-[2.1160006523132324px] pl-[0.010000193491578102px] box-border">
                      <img
                        className="relative w-[6.89px] h-[6.89px] object-cover"
                        alt=""
                        src="/vector@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative w-[175px] h-[110.95px] flex items-center justify-center">
                  <img
                    className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.09)]"
                    alt=""
                    src="/screenshot-20230711-121248-2@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[410px] shrink-0 flex flex-col items-center justify-between">
            <div className="rounded-3xs bg-darkslategray-300 w-[450px] h-[410px] overflow-hidden shrink-0 flex flex-col items-center justify-between py-2.5 px-5 box-border">
              <div className="w-[445px] flex flex-row items-center justify-between p-[5px] box-border">
                <div className="shrink-0 flex flex-row items-center justify-start py-0 px-2.5 border-b-[1px] border-solid border-darkslategray-300">
                  <div className="box-border w-[125px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid border-mediumslateblue">
                    <div className="relative flex items-center w-[120px] shrink-0">
                      Compare stats
                    </div>
                  </div>
                  <div className="box-border w-[125px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid border-darkgray">
                    <div className="relative flex items-center w-[120px] shrink-0">
                      Line-up
                    </div>
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
        </div>
        <div className="w-[1316px] flex flex-row items-center justify-center gap-[20px] text-xs">
          <div className="flex-1 h-[410px] flex flex-col items-center justify-between">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="rounded-3xs bg-darkslategray-300 w-[270px] h-[200px] overflow-hidden shrink-0 flex flex-col items-center justify-between">
                <div className="w-[270px] flex flex-row items-center justify-between p-[5px] box-border">
                  <div className="shrink-0 flex flex-row items-center justify-start py-0 px-2.5 border-b-[1px] border-solid border-darkslategray-300">
                    <div className="box-border w-[125px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid border-mediumslateblue">
                      <div className="relative font-black flex items-center w-[120px] shrink-0">
                        Ball Possession
                      </div>
                    </div>
                    <div className="box-border w-[125px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid border-darkgray">
                      <div className="relative flex items-center w-[120px] shrink-0">
                        Played passes
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-col items-end justify-center gap-[1px]">
                    <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                    <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                    <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-0 pr-[0.017708083614706993px] pl-[0.017692307010293007px] box-border max-w-[314.2200012207031px]">
                  <img
                    className="relative w-[220px] h-[120px] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/641cbce7fad2b35b97fb1a71-totalsessionsgraphdashdarkwebflowtemplatesvg@2x.png"
                  />
                </div>
              </div>
              <div className="rounded-3xs bg-darkslategray-300 w-[270px] h-[200px] overflow-hidden shrink-0 flex flex-col items-center justify-between">
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
              <div className="rounded-3xs bg-darkslategray-300 w-[270px] h-[200px] flex flex-col items-center justify-between text-center font-inter">
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
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-sm">
              <div className="self-stretch rounded-3xs bg-darkslategray-300 overflow-hidden flex flex-col items-start justify-start">
                <div className="rounded-xl shadow-[0px_2px_7px_rgba(20,_20,_43,_0.06)] box-border w-[847px] h-[200px] overflow-hidden shrink-0 flex flex-col items-center justify-between p-px border-[1px] border-solid border-darkslategray-200">
                  <div className="w-[830px] flex flex-row items-center justify-between py-[5px] px-0 box-border">
                    <div className="h-7 flex flex-row items-center justify-start py-0 px-2.5 box-border">
                      <div className="box-border w-[125px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid border-mediumslateblue">
                        <div className="relative font-black flex items-center w-[120px] shrink-0">
                          Game Log
                        </div>
                      </div>
                      <div className="box-border w-[125px] h-[22px] flex flex-row items-center justify-start border-b-[2px] border-solid border-darkgray">
                        <div className="relative flex items-center w-[120px] shrink-0">
                          Tech Log
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 flex flex-col items-end justify-center gap-[1px]">
                      <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                      <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                      <div className="relative rounded-[50%] bg-darkslategray-100 w-1 h-1" />
                    </div>
                  </div>
                  <div className="w-[848px] h-[175px] overflow-hidden shrink-0 flex flex-col items-center justify-center pt-0 px-0 pb-[0.010009765625px] box-border text-xs">
                    <div className="relative box-border w-[848px] h-12 min-w-[400px] min-h-[48px] border-b-[1px] border-solid border-darkslategray-100">
                      <div className="absolute w-[calc(100%_-_709.34px)] top-[16.5px] right-[681.34px] left-[28px] flex flex-row items-center justify-start py-0 pr-[95.21000671386719px] pl-0 box-border">
                        <div className="shrink-0 flex flex-row items-start justify-start py-0 pr-1.5 pl-0 box-border min-w-[18px] min-h-[12px]">
                          <div className="relative rounded-3xs bg-darkslategray-300 shadow-[0px_1px_6px_rgba(20,_20,_43,_0.06)] box-border w-3 h-3 min-w-[12px] min-h-[12px] border-[1px] border-solid border-lightsteelblue-100" />
                        </div>
                        <div className="shrink-0 flex flex-row items-start justify-start py-0 pr-[1.4500007629394531px] pl-0">
                          <div className="relative leading-[14px]">
                            A. Witsel passed the ball into the last third of the
                            pitch
                          </div>
                        </div>
                      </div>
                      <div className="absolute w-[calc(100%_-_722.2px)] top-[17px] right-[220.2px] left-[502px] flex flex-row items-start justify-start">
                        <div className="relative leading-[14px] inline-block max-w-[128.8000030517578px]">
                          2:34 minutes played
                        </div>
                      </div>
                      <div className="absolute w-[calc(100%_-_794px)] top-[14px] right-[30px] left-[764px] rounded-sm bg-slateblue box-border flex flex-row items-center justify-center py-[3px] pr-[4.999998092651367px] pl-[5px] text-mediumslateblue border-[1px] border-solid border-mediumslateblue">
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative rounded bg-mediumslateblue w-1 h-1 min-w-[4px] max-w-[4px] min-h-[4px] max-h-[4px]" />
                          <div className="shrink-0 flex flex-row items-start justify-start py-0 pr-[0.2800006866455078px] pl-0">
                            <div className="relative leading-[14px]">Pass</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative box-border w-[845px] h-12 min-w-[400px] min-h-[48px] mt-[-0.6px] border-b-[1px] border-solid border-darkslategray-100">
                      <div className="absolute w-[calc(100%_-_706.34px)] top-[16.9px] right-[678.34px] left-[28px] flex flex-row items-center justify-start py-0 pr-[96.8800048828125px] pl-0 box-border">
                        <div className="shrink-0 flex flex-row items-start justify-start py-0 pr-1.5 pl-0 box-border min-w-[18px] min-h-[12px]">
                          <div className="relative rounded-3xs bg-darkslategray-300 shadow-[0px_1px_6px_rgba(20,_20,_43,_0.06)] box-border w-3 h-3 min-w-[12px] min-h-[12px] border-[1px] border-solid border-lightsteelblue-100" />
                        </div>
                        <div className="shrink-0 flex flex-row items-start justify-start py-0 pr-[0.7800006866455078px] pl-0">
                          <div className="relative leading-[14px]">
                            A. Griezman dribbles for a distance of approx. 34
                            metres
                          </div>
                        </div>
                      </div>
                      <div className="absolute w-[calc(100%_-_719.2px)] top-[16.6px] right-[217.2px] left-[502px] flex flex-row items-start justify-start">
                        <div className="relative leading-[14px] inline-block max-w-[128.8000030517578px]">
                          2:14 minutes played
                        </div>
                      </div>
                      <div className="absolute w-[calc(100%_-_765px)] top-[14px] right-[27px] left-[738px] rounded-sm bg-crimson-100 box-border flex flex-row items-center justify-center py-[3px] pr-[4.130001068115234px] pl-[5px] border-[1px] border-solid border-orange">
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative rounded bg-white w-1 h-1 min-w-[4px] max-w-[4px] min-h-[4px] max-h-[4px]" />
                          <div className="shrink-0 flex flex-row items-start justify-start">
                            <div className="relative leading-[14px]">
                              Dribbling
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative box-border w-[845px] h-12 min-w-[400px] min-h-[48px] mt-[-0.6px] border-b-[1px] border-solid border-darkslategray-100">
                      <div className="absolute w-[calc(100%_-_706.34px)] top-[16.9px] right-[678.34px] left-[28px] flex flex-row items-center justify-start py-0 pr-[96.8800048828125px] pl-0 box-border">
                        <div className="shrink-0 flex flex-row items-start justify-start py-0 pr-1.5 pl-0 box-border min-w-[18px] min-h-[12px]">
                          <div className="relative rounded-3xs bg-darkslategray-300 shadow-[0px_1px_6px_rgba(20,_20,_43,_0.06)] box-border w-3 h-3 min-w-[12px] min-h-[12px] border-[1px] border-solid border-lightsteelblue-100" />
                        </div>
                        <div className="shrink-0 flex flex-row items-start justify-start py-0 pr-[0.7800006866455078px] pl-0">
                          <div className="relative leading-[14px]">
                            Pass by Ndidi to Griezman from first half of pitch
                          </div>
                        </div>
                      </div>
                      <div className="absolute w-[calc(100%_-_719.2px)] top-[16.6px] right-[217.2px] left-[502px] flex flex-row items-start justify-start">
                        <div className="relative leading-[14px] inline-block max-w-[128.8000030517578px]">
                          2:00 minutes played
                        </div>
                      </div>
                      <div className="absolute w-[calc(100%_-_765px)] top-[14px] right-[27px] left-[738px] rounded-sm bg-crimson-100 box-border flex flex-row items-center justify-center py-[3px] pr-[4.130001068115234px] pl-[5px] border-[1px] border-solid border-orange">
                        <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                          <div className="relative rounded bg-white w-1 h-1 min-w-[4px] max-w-[4px] min-h-[4px] max-h-[4px]" />
                          <div className="shrink-0 flex flex-row items-start justify-start">
                            <div className="relative leading-[14px]">Pass</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[420px] shrink-0 flex flex-col items-start justify-between text-sm">
            <div className="rounded-3xs bg-darkslategray-300 w-[450px] h-[420px] overflow-hidden shrink-0 flex flex-col items-center justify-between">
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
        </div>
      </div>
    </>
  )
}

export default MainComponent
