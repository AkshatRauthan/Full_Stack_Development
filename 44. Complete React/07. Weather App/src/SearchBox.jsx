import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({setWeatherInfo}) {
    let [city, setCity] = useState("");
    let newAPI = 'RFDUUZ9BWZJULQ77CXSGZG8YB';
    let weatherApi = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&include=current&key=${newAPI}&contentType=json`
    
    let getWeatherInfo = async () => {
        let weatherData = await fetch(weatherApi);
        let weatherInfo = await weatherData.json();
        weatherInfo = weatherInfo.days[0];
        let result = {
            temp : weatherInfo.temp,
            humidity : weatherInfo.humidity,
            temp_min : weatherInfo.tempmin,
            temp_max : weatherInfo.tempmax,
            feelsLike : weatherInfo.feelslike,
            description : weatherInfo.description,
            city : city,
            icon : weatherInfo.icon
        };
        setWeatherInfo({...result});
    }

    let cityHandler = (event) => {
        setCity((prevCity) => {
            return event.target.value;
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(city);
        getWeatherInfo();
        setCity("");
    }

    return (
        <div className='SearchBox'>
            <h2>Weather App </h2>
            <form onSubmit={handleSubmit}>
                <TextField id="cityName" label="City Name" variant="outlined"
                 value={city} onChange={cityHandler} required/><br />
                <br />
                <Button variant="contained" type='submit'> Search</Button>
            </form>
        </div>
    )
}