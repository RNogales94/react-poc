import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';


const LocationList = ({ cities }) => {
    console.log(cities);
    return(<div>
        <WeatherLocation city="Granada,es"/>
        <WeatherLocation city="Praha,cz"/>
        <WeatherLocation city="Roma,it"/>
        <WeatherLocation city="Valencia,es"/>
        <WeatherLocation city="Madrid,es"/>

    </div>);
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;