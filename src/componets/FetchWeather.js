import axios from "axios";
import { useState } from "react";
import "../style/FetchWeather.css";
export default function FetchWeather() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState("");

    const baseURL = "https://api.openweathermap.org/data/2.5/weather?";
    const API_KEY = "39d05024f5534d83d0ebea3c3e682057";
    const units = "metric";

    const URL = `${baseURL}q=${location}&units=${units}&appid=${API_KEY}`;
    const searchLocation = (e) => {
        if (e.key === "Enter") {
            axios.get(URL).then((res) => {
                setData(res.data);
                console.log(res.data);
            });
            setLocation(e.target.value);
            console.log(location);
        }
    };
    return (
        <div>
            <div className="title">
                <h1>Weather App</h1>
            </div>
            <div className="container">
                <input
                    className="search"
                    placeholder="search by country or city "
                    onKeyPress={searchLocation}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>
            <div className="weather">
                <div className="top">
                    <div>
                        <p className="city">{data.city}</p>
                        <p className="weather-name">{data.name}</p>
                    </div>
                </div>
                {data.main ? (
                    <div className="bottom">
                        <ion-icon name="thermometer-outline"></ion-icon>
                        <p className="temperature">{data.main.temp.toFixed()}°C </p>
                        <div className="details">
                            <div className="parameter-row" id="details">
                                <span className="parameter-label">Details</span>
                            </div>
                            <div className="parameter-row">
                                <span className="parameter-label">Feels like</span>
                                <span className="parameter-value">
                                    {data.main.feels_like.toFixed()}°C
                                </span>
                            </div>
                            <div className="parameter-row">
                                <span className="parameter-label">Wind</span>
                                <span className="parameter-value">{data.wind.speed} m/s</span>
                            </div>
                            <div className="parameter-row">
                                <span className="parameter-label">Humidity</span>
                                <span className="parameter-value">{data.main.humidity}%</span>
                            </div>
                            <div className="parameter-row">
                                <span className="parameter-label">Pressure</span>
                                <span className="parameter-value">
                                    {data.main.pressure} hPa
                                </span>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
