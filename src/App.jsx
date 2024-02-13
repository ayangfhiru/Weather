import { useEffect, useState } from "react"
import Content from "./components/Content"
import Sidebar from "./components/Sidebar"
import { getAirPollution, getForecast, getLocationIp, getWeather } from "./api";

function App() {
  const [status, setStatus] = useState(false);
  const [temp, setTemp] = useState(null);
  const [weather, setWeather] = useState([]);
  const [forcast, setForecast] = useState([]);
  const [airPollution, setAirPollution] = useState();

  const handleChildTemp = (data) => {
    setTemp(data);
  }

  const getLocIp = async () => {
    console.log("Use Location Ip");
    try {
      getLocationIp().then((res) => {
        console.log(res);
        getDataWeather(res.lat, res.lon)
      })
    } catch (error) {
      console.log(error);
    }
  }

  const getMyLocation = async () => {
    if (navigator.geolocation) {
      console.log("Use Geolocator");
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        getDataWeather(lat, lon)
      })
    } else {
      alert("Geolocation is not supported by this browser")
      getLocIp()
    }
  }

  const getDataWeather = async (lat, lon) => {
    console.log("get DataWeather");
    try {
      await getWeather(lat, lon)
        .then((res) => {
          setWeather(res);
        })
      await getAirPollution(lat, lon)
        .then((res) => {
          setAirPollution(res);
        })
      await getForecast(lat, lon)
        .then((res) => {
          setForecast(res);
        })

      setStatus(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMyLocation();
  }, [])

  return (
    <div className="flex flex-col md:flex-row">
      {
        status ?
          <Sidebar
            getMyLocation={getMyLocation}
            temp={temp}
            weather={weather}
          />
          : null
      }

      {
        status ?
          <Content
            sendDataToParent={handleChildTemp}
            temp={temp}
            weather={weather}
            airPollution={airPollution}
            forcast={forcast}
          />
          : null
      }
    </div>
  )
}

export default App