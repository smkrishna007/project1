const axios = require("axios");

const API_KEY = "84b2afe13e18494ad06e7a6ac2b48213";
const URL = "http://api.weatherstack.com/current";

async function getWeather(city) {
    try {
        const response = await axios.get(URL, {
            params: {
                access_key: API_KEY,
                query: city
            }
        });
        const data = response.data;
        if(data.success === false){
            console.log("error: " ,data.error.info);
        }else{
            console.log(`Weather in ${data.location.name}, ${data.location.country}: `);
            console.log(`Temperature: ${data.current.temperature} *C`);
            console.log(`Temperature_Description: ${data.current.weather_descriptions.join(',')}`);
        }
    } catch (error){
        console.error(error);
    }
}

getWeather("Hyderabad");