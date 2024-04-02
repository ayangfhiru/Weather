import axios from "axios"

export const getWeather = async (lat, lon) => {
    // const weather = await axios.get(`${import.meta.env.VITE_BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`)
    // return weather.data
    const weather = await fetch('./weather.js')
        .then(res => res.json())
    // console.log(weather[0]);
    return weather[0]
}

export const getForecast = async (lat, lon) => {
    // const forecast = await axios.get(`${import.meta.env.VITE_BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`)
    // return forecast.data
    const forecast = await fetch('./forecast.js')
        .then(res => res.json())
    // console.log(forecast[0]);
    return forecast[0]
}

export const getAirPollution = async (lat, lon) => {
    // const airPollution = await axios.get(`${import.meta.env.VITE_BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`)
    // return airPollution.data
    const airPollution = await fetch('./air_pollution.js')
    .then(res => res.json())
    // console.log(airPollution[0]);
    return airPollution[0]
}

export const getLocationIp = async () => {
    const location = await axios.get(import.meta.env.VITE_BASE_IP_URL);
    const lat = location.data.lat
    const lon = location.data.lon
    console.log({ lat, lon });
    return { lat, lon }
}