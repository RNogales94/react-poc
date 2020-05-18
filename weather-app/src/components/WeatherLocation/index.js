import React, { Component } from 'react';
import { CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types'


import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather'
import { getUrlWeatherByCity } from '../../services/openWeatherAPI'


import './styles.css'


class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props;


        this.state = {
            city,
            data: null,
        }
        //console.log("constructor")
    } 

    componentDidMount() {
        //console.log("componentDidMount")
        this.handleUpdateClick();

    }
    
    componentDidUpdate(prevProps, prevState) {
        //console.log("componentDidUpdate");

    }
    
    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city) 
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then( data => {
            //console.log(`Fetch api_weather ${this.state.city}`)
            //console.log(data)

            const new_weather = transformWeather(data);
            this.setState({
                data: new_weather
            });

        });
    }
    

    render(){
        const { onWeatherLocationClick } = this.props
        const { city, data } = this.state
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick} >
                <Location city={city}/> 
                {data ? 
                    <WeatherData data={data}/> : 
                    <CircularProgress color="secondary" size={50}/>
                }
            </div>
        );
    } 
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func.isRequired,

}
    

export default WeatherLocation; 