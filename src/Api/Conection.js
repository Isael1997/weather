import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '39d05024f5534d83d0ebea3c3e682057';

export const Conection = async () => {
    const { data } = await axios.get(URL, {
        params: {
            q: 'Miami',
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}