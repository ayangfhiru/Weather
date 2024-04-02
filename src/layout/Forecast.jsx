import { forecastHook } from "../hooks/forecastHook";
import { convertDay } from "../utils/convertDay";
import { convertTime } from "../utils/convertTime";
import { tempScale } from "../utils/tempScale";

const Forcast = (props) => {
    const { temp, forecast } = props;
    const date = forecastHook()

    return (
        <>
            <h2 className="font-semibold text-xl text-white mb-3 mt-5 ml-5 md:mt-0 md:ml-0">17 Hour Forecast</h2>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {
                    forecast.list.filter((data) => data.dt >= date.start && data.dt <= date.end)
                        .map((data, i) => {
                            return (
                                <div key={i} className="bg-gray-300 box-border py-2 flex flex-col items-center justify-between rounded-lg w-[168px] sm:w-[183px] h-36 md:w-40 md:h-40">
                                    <p className="font-semibold">{convertDay(data.dt)}</p>
                                    <p className="text-sm">{convertTime(data.dt)}</p>
                                    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Sunrise" className="backdrop-blur-sm mx-auto w-12 bg-gray-500/50 rounded-3xl md:w-20" />
                                    <p className="text-sm">{tempScale(temp, data.main.temp)} {temp ? <span>&#8457;</span> : <span>&#8451;</span>}</p>
                                </div>
                            )
                        })
                }
            </div>
        </>
    )
}

export default Forcast