import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        temp : 24.56,
        humidity : 38,
        temp_min : 16.54,
        temp_max : 27.68,
        feelsLike : 21.48,
        description : "hazy and cloudy",
        city : "Delhi",
        icon : "cloudy"
    });

    return (
    <div className="WeatherApp">
        <div className="SearchBoxContainer">{<SearchBox setWeatherInfo={setWeatherInfo}/>}</div>
        <div className="InfoBoxContainer">{<InfoBox result={weatherInfo} />}</div><br />
    </div>
)};