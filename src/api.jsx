import axios from "axios"

export const getWeather = async (lat, lon) => {
    const weather = await axios.get(`${import.meta.env.VITE_BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`)
    return weather.data
}

export const getForecast = async (lat, lon) => {
    const forecast = await axios.get(`${import.meta.env.VITE_BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`)
    return forecast.data
}

export const getAirPollution = async (lat, lon) => {
    const weather = await axios.get(`${import.meta.env.VITE_BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`)
    return weather.data
}

export const getLocationIp = async () => {
    const location = await axios.get(import.meta.env.VITE_BASE_IP_URL);
    const lat = location.data.lat
    const lon = location.data.lon
    return {lat, lon}
}