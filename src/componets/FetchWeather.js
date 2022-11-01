import axios from "axios";
import { useState } from "react";
import '../style/FetchWeather.css'
export default function FetchWeather() {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';
    const API_KEY = '39d05024f5534d83d0ebea3c3e682057';
    const units = 'metric';

    const URL = `${baseURL}q=${location}&units=${units}&appid=${API_KEY}`;
    const searchLocation = (e) => {
        if (e.key === 'Enter') {
            console.log('Funcionando!!')
            
            axios.get(URL).then((res => {
                setData(res.data)
                console.log(res.data)
            }))
            setLocation(e.target.value)
            console.log(location)
            
        }
    }
    
    return (
        <div>
            <input className="search bi bi-search"
                placeholder="Search..."
                onKeyPress={searchLocation}
                value={location}
                onChange={e => setLocation(e.target.value)}
            />

            <div className="container">
                <div className="top">
                    <div className="location">
                        <p>{data.name}</p>
                    </div>
                    <div className="temp">
                        {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
                    </div>
                    <div className="description">
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>
            </div>


        </div>
    )
}