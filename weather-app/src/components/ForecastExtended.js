import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { getUrlForecastByCity } from '../services/openWeatherAPI'
import transformForecast from '../services/transformForecast'
import ForecastItem from './ForecastItem'
import './styles.css'


class ForecastExtended extends Component {


    constructor(){
        super();
        this.state = { forecastData: null }
    }

    renderForecastItemDays(forecastData){
        //return <div>Render Items</div>
        return forecastData.map( forecast => <ForecastItem 
                                    key={`${forecast.weekDay}${forecast.hour}`} 
                                    weekDay={forecast.weekDay} 
                                    hour={forecast.hour}
                                    data={forecast.data}/>)
                                    
    }

    renderProgress = () => {
        return "Cargando Pronóstico extendido..."
    }

    updateCity = city => {
        const url_forecast = getUrlForecastByCity(city)
        
        fetch(url_forecast)
        .then(data => (data.json()))
        .then(weather_data => {
            const forecastData = transformForecast(weather_data);
            this.setState({ forecastData });
        })
    }


    componentDidMount(){
        this.updateCity(this.props.city)
    }


    componentWillReceiveProps(nextProps){
        if (nextProps.city !== this.props.city){
            this.setState({ forecastData: null })
            this.updateCity(this.props.city)
        }
    }
    

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;

        return (<div>
                <h2 className="forecast-title">
                    Pronóstico Extendido para {city}
                </h2> 
                {forecastData ?
                    this.renderForecastItemDays(forecastData):
                    this.renderProgress()
                }
            </div>) 
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;