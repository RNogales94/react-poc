

import {
 api_key,
 url_base_weather,
} from '../constants/api_url';


export const getUrlWeatherByCity = city => {
    return `${url_base_weather}/weather?q=${city}&appid=${api_key}`
}

export const getUrlForecastByCity = city => {
    return `${url_base_weather}/forecast?q=${city}&appid=${api_key}`
}



