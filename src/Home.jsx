import { dataWeatherHook, geolocationHook, tempHook } from "./hooks/homeHook";
import Forcast from "./layout/Forecast";
import Sidebar from "./layout/Sidebar";
import TodayDetail from "./layout/TodayDetail";

function Home() {
  const { geolocation, handleGeolocation } = geolocationHook();
  const dataWeather = dataWeatherHook(geolocation.latitude, geolocation.longitude);
  const { temp, handleTemp } = tempHook();

  return (
    <div className="flex flex-col md:flex-row">
      {
        typeof dataWeather.weather !== "undefined" &&
          typeof dataWeather.forecast !== "undefined" &&
          typeof dataWeather.airPollution !== "undefined"
          ?
          <>
            <Sidebar
              temp={temp}
              getLocation={handleGeolocation}
              weather={dataWeather.weather}
            />
            <div className="w-full px-2 pb-4 bg-gray-500 md:w-4/5 md:px-8 md:bg-transparent">
              <TodayDetail
                tempToParent={handleTemp}
                weather={dataWeather.weather}
                airPollution={dataWeather.airPollution}
              />
              <Forcast
                temp={temp}
                forecast={dataWeather.forecast}
              />
            </div>
          </>
          : <h1 className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-2xl">Loading...</h1>
      }
    </div>
  )
}

export default Home