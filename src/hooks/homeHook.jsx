import { useEffect, useState } from "react"
import { getAirPollution, getForecast, getWeather } from "../services/api";

export const dataWeatherHook = (lat, lon) => {
    const [data, setData] = useState({});

    const weather = async () => {
        await getWeather(lat, lon).then(res => setData(prevState => ({
            ...prevState, weather: res
        })))
    }

    const forecast = async () => {
        await getForecast(lat, lon).then(res => setData(prevState => ({
            ...prevState, forecast: res
        })))
    }

    const airPollution = async () => {
        await getAirPollution(lat, lon).then(res => setData(prevState => ({
            ...prevState, airPollution: res
        })))
    }

    useEffect(() => {
        if (typeof lat !== "undefined" && typeof lon !== "undefined") {
            weather()
            forecast()
            airPollution()
        }
    }, [lat])

    return data
}

export const geolocationHook = () => {
    const [geolocation, setGeolocation] = useState({});
    const [handleGeo, setHandleGeo] = useState(false);

    const handleGeolocation = () => {
        setHandleGeo(prev => !prev);
    }

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }

    const success = (pos) => {
        const coords = pos.coords;
        setGeolocation(coords)
    }

    const errors = (err) => {
        console.log({ err });
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.permissions
                .query({ name: "geolocation" })
                .then(res => {
                    if (res.state == "granted") {
                        navigator.geolocation.getCurrentPosition(success, errors, options)
                    } else if (res.state == "prompt") {
                        navigator.geolocation.getCurrentPosition(success, errors, options)
                    } else if (res.state == "denied") {
                        alert("Please activated gps")
                    }
                })
        } else {
            alert("Geolocation is not supported by this browser")
        }
    }, [handleGeo])

    return { geolocation, handleGeolocation }
}

export const tempHook = () => {
    const [temp, setTemp] = useState(null);

    const handleTemp = (data) => {
        setTemp(data);
    }

    return { temp, handleTemp }
}