
/*export const Conection = async (query) => {

    const URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = '39d05024f5534d83d0ebea3c3e682057';
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    const data = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Miami&appid=39d05024f5534d83d0ebea3c3e682057&units=metric')

    return data;
}*/

import axios from "axios";
import { useState } from "react";

export default function FetchWeather() {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    const [prueba, setPrueba] = useState('')

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=39d05024f5534d83d0ebea3c3e682057`;

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

    const test = (event) => {
        if(event.key === 'Enter'){
            console.log('OK')            
            setPrueba(event.target.value)
            console.log(prueba)
        }
    }
    
    return (
        <div>
            <input className="search"
                placeholder="Search..."
                onKeyPress={searchLocation}
                value={location}
                onChange={e => setLocation(e.target.value)}
                
                />
            <h3>Location: {location}</h3>

            <input onKeyPress={test} value={prueba} onChange={event => setPrueba(event.target.value)}/>
            <h3>Prueba: {prueba}</h3>

        </div>
    )
}