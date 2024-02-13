import { useState, useEffect } from "react"
import AirQuality from "./AirQuality"
import Card from "./Card"
import Humidity from "./Humidity"
import Sun from "./Sun"
import Temperature from "./Temperature"
import UvIndex from "./UvIndex"
import Visibility from "./Visibility"
import Forcast from "./Forcast"
import Wind from "./Wind"

const Content = (props) => {
    const { sendDataToParent, temp, weather, airPollution, forcast } = props;

    return (
        <div className="w-full px-2 pb-4 bg-gray-500 md:w-4/5 md:px-8 md:bg-transparent">
            <header className="flex justify-end py-2 w-full px-3">
                <Temperature sendDataToParent={sendDataToParent} />
            </header>
            <h2 className="font-semibold text-xl text-white ml-5 md:ml-0">Today Details</h2>
            <div className="flex justify-center flex-wrap mt-2 gap-2 md:gap-3">
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
                <span className="py-[0.5px] hidden w-full bg-white md:inline-block"></span>
            </div>
            <h2 className="font-semibold text-xl text-white mb-3 mt-5 ml-5 md:mt-0 md:ml-0">17 Hour Forecast</h2>
            <Forcast temp={temp} forcast={forcast} />
        </div>
    )
}

export default Content