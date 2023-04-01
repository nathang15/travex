import axios from "axios";


const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (ne, sw) => {
    try {
        const response = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_TRAVEL_ADVISOR_KEY,
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        })
        return response.data
    } catch (err) {
        console.log(err)
    }
}