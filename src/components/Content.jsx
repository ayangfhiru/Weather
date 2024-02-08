import { useState, useEffect } from "react"
import AirQuality from "./AirQuality"
import Card from "./Card"
import Humidity from "./Humidity"
import Sun from "./Sun"
import Temperature from "./Temperature"
import UvIndex from "./UvIndex"
import Visibility from "./Visibility"
import Week from "./Week"
import Wind from "./Wind"

const Content = (props) => {
    const { sendDataToParent, temp, weather, airPollution, forcast } = props;

    return (
        <div className="w-4/5 px-8">
            <header className="flex justify-end py-2 w-full px-3">
                <Temperature sendDataToParent={sendDataToParent} />
            </header>
            <h2 className="font-semibold text-xl text-white">Today Details</h2>
            <div className="flex flex-wrap gap-3 mt-2">
                <Card>
                    <UvIndex />
                </Card>
                <Card>
                    <Wind weather={weather} />
                </Card>
                <Card>
                    <Sun weather={weather} />
                </Card>
                <Card>
                    <Humidity weather={weather} />
                </Card>
                <Card>
                    <Visibility weather={weather} />
                </Card>
                <Card>
                    <AirQuality airPollution={airPollution} />
                </Card>
                <span className="py-[0.5px] w-full bg-white"></span>
                <Week temp={temp} forcast={forcast} />
            </div>
        </div>
    )
}

export default Content