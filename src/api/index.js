import axios from "axios";

const URL1 = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getRestaurantsData = async (ne, sw) => {
    try {
        const response = await axios.get(URL1, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': 'f6ae5a8bb5mshd7225698491358cp130c20jsne6c9a0f5b1fb',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        })
        return response.data
    } catch (err) {
        console.log(err)
    }
}

const URL2 = 'https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary'

export const getAttractionsData = async (ne, sw) => {
    try {
        const response = await axios.get(URL2, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': 'f6ae5a8bb5mshd7225698491358cp130c20jsne6c9a0f5b1fb',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        })
        return response.data
    } catch (err) {
        console.log(err)
    }
}

const URL3 = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'
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
                'X-RapidAPI-Key': 'f6ae5a8bb5mshd7225698491358cp130c20jsne6c9a0f5b1fb',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        })
        return response.data
    } catch (err) {
        console.log(err)
    }
}