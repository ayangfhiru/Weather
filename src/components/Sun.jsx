import { convertTime } from "../utils/convertTime"

const Sun = (props) => {
    const { weather } = props

    const convertSun = (data) => {
        const sun = convertTime(data)
        if (sun != null) return sun
    }

    return (
        <>
            <h3 className="text-sm">Sunrise & Sunset</h3>
            <div className="flex flex-col justify-center px-0 md:px-4">
                <span className="flex items-center gap-3">
                    <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="Sunrise" className="w-14" />
                    <p className="text-lg md:text-xl font-semibold">{convertSun(weather.sys.sunrise)}</p>
                </span>
                <span className="flex items-center gap-3">
                    <img src="https://openweathermap.org/img/wn/02n@2x.png" alt="Sunrise" className="w-14" />
                    <p className="text-md md:text-xl font-semibold">{convertSun(weather.sys.sunset)}</p>
                </span>
            </div>
        </>
    )
}

export default Sun