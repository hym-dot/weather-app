import axios from "axios"
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

export const fetchCoordinates = async (city) => {

    const res = await axios.get('https://api.openweathermap.org/geo/1.0/direct', {
        params: {
            q: city,
            limit: 1,
            appid: API_KEY
        }
    })
    if (!Array.isArray(res.data) || res.data.length === 0) {
        throw new Error('City not found.')
    }

    const { lat, lon, name, country } = res.data[0]

    return { lat, lon, name, country }
}