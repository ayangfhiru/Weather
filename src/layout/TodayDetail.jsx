import Card from "../components/Card"
import Sun from "../components/Sun"
import Temperature from "../components/Temperature"
import Bar from "../components/Bar"
import Visibility from "../components/Visibility"
import Wind from "../components/Wind"

const indexQuality = {
    1: "Excellent",
    2: "Good",
    3: "Fair",
    4: "Poor",
    5: "Very Poor"
}

const TodayDetail = (props) => {
    const { tempToParent, weather, airPollution } = props;

    const contentToday = [
        {
            name: "Uv Index",
            element: <Bar
                name="Uv Index"
                data={20}
                className="border-b-orange-400 border-r-orange-400" />
        },
        {
            name: "Wind Status",
            element: <Wind
                weather={weather} />
        },
        {
            name: "Sunrise & Sunset",
            element: <Sun
                weather={weather} />
        },
        {
            name: "Humidity",
            element: <Bar
                name="Humidity"
                data={weather.main.humidity}
                className="border-b-green-400 border-r-green-400" />
        },
        {
            name: "Visibility",
            element: <Visibility
                weather={weather} />
        },
        {
            name: "Air Quality",
            element: <Bar
                name="Air Quality"
                data={airPollution.list[0].components.no}
                status={indexQuality[airPollution.list[0].main.aqi]}
                className="border-b-blue-400 border-r-blue-400" />
        }
    ]

    return (
        <>
            <header className="flex justify-end py-2 w-full px-3">
                <Temperature tempToParent={tempToParent} />
            </header>
            <h2 className="font-semibold text-xl text-white ml-5 md:ml-0">Today Details</h2>
            <div className="flex justify-center flex-wrap mt-2 gap-2 md:gap-3">
                {
                    contentToday.map((e) => (
                        <Card key={e.name}>
                            {e.element}
                        </Card>
                    ))
                }
                <span className="py-[0.5px] hidden w-full bg-white md:inline-block"></span>
            </div>
        </>
    )
}

export default TodayDetail