const Sidebar = (props) => {
    const { getMyLocation, temp, weather } = props;

    const convertTime = (epoch) => {
        const date = new Date(epoch * 1000);
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const formatDate = hours >= 12 ? 'PM' : 'AM'
        hours = (hours % 12) || 12
        return `${hours}:${minutes} ${formatDate}`;
    }

    const setTemperature = (data) => {
        let temperature;
        if (temp == true) {
            temperature = ((data - 273.15) * 9 / 5 + 32).toFixed(2)
        } else {
            temperature = (data - 273.15).toFixed(2)
        }
        return temperature;
    }

    return (
        <div className="relative w-1/5 h-screen bg-gray-500 py-3 px-5 box-border">
            <span className="inline-block w-full">
                <button onClick={getMyLocation} className="float-end bg-gray-100 right-3 top-3 rounded-full flex justify-center p-1">
                    <span className="material-symbols-outlined">my_location</span>
                </button>
            </span>
            <div className="flex flex-col items-center">
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="weather" className="backdrop-blur-sm mx-auto w-4/5 bg-white/20 rounded-3xl" />
                <p className="font-semibold text-white">{weather.weather[0].main}</p>
            </div>
            <div className="gap-y-7 flex flex-col">
                <div className="mt-8 items-start w-full px-3">
                    <h3 className="text-5xl font-light text-white">{setTemperature(weather.main.temp)}{temp ? <span>&#8457;</span> : <span>&#8451;</span>}</h3>
                    <p className="mt-5 text-2xl text-white">{convertTime(weather.dt)}</p>
                </div>
                <span className="py-[0.5px] w-full bg-white inline-block" />
                <div className="px-3 flex flex-col gap-y-1">
                    <span className="flex items-center gap-x-2">
                        <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="weather" className="w-10 backdrop-blur-sm bg-white/20 rounded-xl" />
                        <div className="text-xs font-semibold text-white">{weather.weather[0].description}</div>
                    </span>
                    <span className="flex items-center gap-x-2">
                        <img src="https://openweathermap.org/img/wn/50n@2x.png" alt="weather" className="w-10 backdrop-blur-sm bg-white/20 rounded-xl" />
                        <div className="text-xs font-semibold text-white">clouds {weather.clouds.all}%</div>
                    </span>
                    <div className="h-20 w-full bg-city bg-cover bg-no-repeat bg-center flex justify-center items-center rounded-xl shadow-lg shadow-white/50">
                        <p className="px-2 text-base font-semibold text-center underline underline-offset-2 decoration-2 decoration-green-700 text-gray-700">{weather.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar