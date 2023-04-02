import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  
    try {
        const { data: {data} } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': 'c3b53d3676msh7d00342da604d69p113ed4jsn4639ac550a6b',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });

        return data
    }

    catch (error) {
        console.log(error)
    }
}