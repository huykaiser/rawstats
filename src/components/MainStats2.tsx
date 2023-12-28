import { FunctionComponent, useEffect } from "react"
import InputVideoBox from "./InputVideoBox"
import ComparisonBox from "./ComparisonBox"
import LiveMatchBox from "./LiveMatchBox"
import HeatMapBox from "./HeatMapBox"
import BallPossessionBox from "./BallPossessionBox"
import PassBox from "./PassBox"
import PlayerBox from "./PlayerBox"
import GameLogBox from "./GameLogBox"
import MatchesBox from "./MatchesBox"
import "./mainstats2.css"

const MainStats2: FunctionComponent = () => {

    return (
        <div className="w-full home ">
            <div className="box box1">
                <InputVideoBox />
            </div>

            <div className="box box2">
                <LiveMatchBox />
            </div>

            <div className="box box3">
                <ComparisonBox />
            </div>

            <div className="box box4">
                <HeatMapBox />
            </div>

            <div className="box box5">
                <BallPossessionBox />
            </div>

            <div className="box box6">
                <PassBox />
            </div>

            <div className="box box7">
                <PlayerBox />
            </div>

            <div className="box box8">
                <MatchesBox />
            </div>

            <div className="box box9">
                <GameLogBox />
            </div>
        </div>
    )
}

export default MainStats2
