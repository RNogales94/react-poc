

import moment from 'moment'
import 'moment/locale/es'
import transformWeather from './transformWeather'

const transformForecast = (data) => {
    data = data.list.filter( x => (
        moment.unix(x.dt).utc().hour() === 6 ||
        moment.unix(x.dt).utc().hour() === 12 ||
        moment.unix(x.dt).utc().hour() === 18 
        ))
    data = data.map( x => (
        {
            weekDay: moment.unix(x.dt).format('ddd'),
            hour: moment.unix(x.dt).hour(),
            data: transformWeather(x)   
        }
    ))

    return data
}

export default transformForecast 