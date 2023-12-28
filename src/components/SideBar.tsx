import { AlignJustify } from "lucide-react"
import { FunctionComponent, useState } from "react"
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

const SideBar: FunctionComponent = () => {
    // const viewHeight = window.outerHeight;
    // console.log("viewHeight: ", viewHeight);
    const [isOpened, setIsOpened] = useState(false);
    const [isToggled, setIsToggled] = useState(false);

    const handleToggleMenuBar = () => {
        setIsOpened(!isOpened);
    }

    const handleToggleBtn = () => {
        setIsToggled(!isToggled);
    }

    return (
        <>
            {
                !isOpened &&
                <div className={`bg-darkslategray-300 w-full h-full`}>
                    <div className={`w-[70px] h-full flex flex-col items-center justify-start gap-[30px] z-[0] pt-[20px] pb-[100%] px-[10px] bg-darkslategray-300`}>
                        <div className="flex flex-row items-center justify-center">
                            <Link to="/">
                                <img
                                    className=" w-10 h-[41.25px] object-cover hover:scale-[1.5] transition duration-500"
                                    alt=""
                                    src="/images/rawskillLogoLila.png"
                                />
                            </Link>
                        </div>

                        <div className="h-full flex flex-col items-center justify-start gap-[30px]">
                            <AlignJustify className="hover:scale-[1.5] transition duration-500" onClick={handleToggleMenuBar} />

                            <img
                                className="relative w-[30px] h-10 object-cover hover:scale-[1.5] transition duration-500"
                                alt=""
                                src="/images/fire.svg"
                            />
                            <img
                                className="relative max-h-full w-10 object-cover"
                                alt=""
                                src="/images/line-96@2x.png"
                            />
                            <img
                                className=" w-[30px] h-[30px] object-cover hover:scale-[1.5] transition duration-500"
                                alt=""
                                src="/images/lemon.svg"
                            />
                            <img
                                className="relative w-[30px] h-[30px] object-cover hover:scale-[1.5] transition duration-500"
                                alt=""
                                src="/images/table-tennis.svg"
                            />
                        </div>

                        <div className="h-full flex flex-col items-center justify-start gap-[30px]">
                            {/* TOGGLE BUTTON */}
                            <div className="relative w-[50px] h-6" onClick={handleToggleBtn}>
                                <div className="absolute top-[0px] left-[0px] rounded-xl bg-lightsteelblue-100 w-[50px] h-6" />                               
                                <div className={cn("absolute top-[2px] rounded-[50%] bg-darkslategray-200 w-5 h-5", !isToggled ? "left-[3px]" : "left-[27px]")} />
                            </div>

                            <div className="relative box-border w-[43px] h-[3px] border-t-[3px] border-solid border-darkslategray-200" />

                            <Link to="/account-settings" >
                                <img
                                    className="relative w-[30px] h-[28.8px] object-cover hover:scale-[1.5] transition duration-500"
                                    alt="account-settings"
                                    src="/images/puzzle.svg"
                                />
                            </Link>

                            <img
                                className="relative w-[30px] h-[30px] object-cover hover:scale-[1.5] transition duration-500"
                                alt="rawstats-support"
                                src="/images/support.svg"
                            />
                        </div>
                    </div>
                </div>
            }

            {
                isOpened &&
                <div className={`w-[300px] h-full absolute top-0 left-0 z-[2] transition duration-1000 ease-in-out border-r-2 border-black border-solid`}>
                    <div className="fixed w-[300px] h-[1024px] top-0 left-0 bg-[#303237]">
                        <div className="relative w-[240px] h-[644px] top-[24px] left-[31px]">
                            <div className="absolute w-[237px] h-[24px] top-[165px] left-px">
                                <img className="absolute w-[24px] h-[24px] top-0 left-0 object-cover" alt="Ellipse" src="/images/ellipse-3.svg" />
                                <div className="absolute w-[195px] h-[20px] top-[2px] left-[40px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
                                    Vallhala Cup
                                </div>
                            </div>

                            <div className="absolute w-[232px] h-[17px] top-[236px] left-0">
                                <div className="absolute w-[211px] h-[17px] top-0 left-0 [font-family:'Montserrat-Light',Helvetica] font-light text-neutral-400 text-[14px] tracking-[0] leading-[normal]">
                                    FOOTBALL LEAGUE
                                </div>
                                <img className="absolute w-[13px] h-[8px] top-[4px] left-[217px]" alt="Vector" src="/images/down-arrow.svg" />
                            </div>

                            <div className="absolute w-[232px] h-[17px] top-[136px] left-0">
                                <div className="absolute w-[211px] h-[17px] top-0 left-0 [font-family:'Montserrat-Light',Helvetica] font-light text-neutral-400 text-[14px] tracking-[0] leading-[normal]">
                                    CUSTOM COMMUNITY
                                </div>
                                <img className="absolute w-[13px] h-[8px] top-[4px] left-[217px]" alt="Vector" src="/images/down-arrow.svg" />
                            </div>

                            <div className="absolute w-[237px] h-[24px] top-[265px] left-0">
                                <img className="absolute w-[24px] h-[24px] top-0 left-0 object-cover" alt="world-cup" src="/images/world-cup.svg" />
                                <div className="absolute w-[195px] h-[20px] top-[2px] left-[40px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
                                    World Cup Qatar 2022
                                </div>
                            </div>

                            <div className="absolute w-[237px] h-[24px] top-[313px] left-0">
                                <img className="absolute w-[24px] h-[24px] top-0 left-0 object-cover" alt="champion-league-1" src="/images/champion-league-1.svg" />
                                <div className="absolute w-[195px] h-[20px] top-[2px] left-[40px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
                                    Champions League
                                </div>
                            </div>

                            <div className="absolute w-[237px] h-[24px] top-[361px] left-0">
                                <img className="absolute w-[24px] h-[24px] top-0 left-0 object-cover" alt="premier-league" src="/images/premier-league.svg" />
                                <div className="absolute w-[195px] h-[20px] top-[2px] left-[40px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
                                    Premier League
                                </div>
                            </div>

                            <div className="absolute w-[237px] h-[24px] top-[409px] left-0">
                                <img className="absolute w-[24px] h-[24px] top-0 left-0 object-cover" alt="laliga" src="/images/laliga.svg" />
                                <div className="absolute w-[195px] h-[20px] top-[2px] left-[40px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
                                    La Liga
                                </div>
                            </div>

                            <div className="absolute w-[237px] h-[24px] top-[457px] left-0">
                                <img className="w-[24px] h-[24px] object-cover absolute top-0 left-0" alt="ligue-1" src="/images/ligue-1.png" />
                                <div className="absolute w-[195px] h-[20px] top-[2px] left-[40px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
                                    Ligue 1
                                </div>
                            </div>

                            <div className="absolute w-[235px] h-[17px] top-[553px] left-px [font-family:'Montserrat-Light',Helvetica] font-light text-neutral-400 text-[14px] tracking-[0] leading-[normal]">
                                FAVORITE CLUB
                            </div>

                            <div className="absolute w-[236px] h-[24px] top-[620px] left-px">
                                <img className="absolute w-[15px] h-[14px] top-[4px] left-[219px]" alt="star" src="/images/star.svg" />
                                <img className="absolute w-[24px] h-[24px] top-0 left-0 object-cover" alt="manchester-city" src="/images/manchester-city.svg" />
                                <div className="absolute h-[20px] top-[2px] left-[40px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
                                    Manchester City
                                </div>
                            </div>

                            <div className="absolute w-[236px] h-[24px] top-[577px] left-0">
                                <div className="absolute h-[20px] top-[2px] left-[40px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
                                    Bayern Munchen
                                </div>
                                <img className="absolute w-[15px] h-[14px] top-[4px] left-[219px]" alt="star" src="/images/star.svg" />
                                <img className="absolute w-[24px] h-[24px] top-0 left-0 object-cover" alt="chelsea" src="/images/chelsea.svg" />
                            </div>

                            <div className="absolute w-[225px] h-[36px] top-0 left-0">
                                <img className="w-[200px] h-[36px] absolute top-0 left-0 hover:scale-[1.5] transition duration-500" alt="Image" src="/images/rawstats-logo.png" />
                                <AlignJustify className="absolute top-[5.5px] left-[218px] hover:scale-[1.5] transition duration-500" onClick={handleToggleMenuBar} />
                            </div>

                            <div className="absolute w-[235px] h-[32px] top-[82px] left-px [font-family:'Montserrat-Black',Helvetica] font-black text-white text-[26px] tracking-[0] leading-[normal]">
                                EA SPORTS FC
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default SideBar
