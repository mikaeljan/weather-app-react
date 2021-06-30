import React from 'react';
import FavoriteItem from '../model/FavoriteItem';
import { MONTHS, DAYS } from './dates';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCloud,
    faBolt,
    faCloudRain,
    faCloudShowersHeavy,
    faSnowflake,
    faSun,
    faSmog,
} from '@fortawesome/free-solid-svg-icons';

const createWeatherInfo = (result) => {
    const currentDate = new Date();
    const date = `${DAYS[currentDate.getDay()]} ${currentDate.getDate()} ${MONTHS[currentDate.getMonth()]}`;
    return {
        id: result.id,
        city: result.name,
        country: result.sys.country,
        date,
        feelsLike: Math.floor(result.main.feels_like),
        visibility: result.visibility,
        description: result.weather[0].description,
        main: result.weather[0].main,
        temp: Math.floor(result.main.temp),
        humidity: result.main.humidity,
        wind: result.wind.speed,
    };
};
const createFavoriteItem = (result): FavoriteItem => {
    const currentDate = new Date();
    const date = `${DAYS[currentDate.getDay()]} ${currentDate.getDate()} ${MONTHS[currentDate.getMonth()]}`;
    return {
        id: result.id,
        city: result.city,
        country: result.country,
        date,
        description: result.description,
        main: result.main,
        temp: result.temp,
    };
};
const createWeatherIcon = (weatherType: string) => {
    if (weatherType === 'Thunderstorm') {
        return <FontAwesomeIcon icon={faBolt} />;
    } else if (weatherType === 'Drizzle') {
        return <FontAwesomeIcon icon={faCloudRain} />;
    } else if (weatherType === 'Rain') {
        return <FontAwesomeIcon icon={faCloudShowersHeavy} />;
    } else if (weatherType === 'Snow') {
        return <FontAwesomeIcon icon={faSnowflake} />;
    } else if (weatherType === 'Clear') {
        return <FontAwesomeIcon icon={faSun} />;
    } else if (weatherType === 'Clouds') {
        return <FontAwesomeIcon icon={faCloud} />;
    } else {
        return <FontAwesomeIcon icon={faSmog} />;
    }
};

const removeByAttr = function (arr, attr, value) {
    let i = arr.length;
    while (i--) {
        if (arr[i] && arr[i].hasOwnProperty(attr) && arguments.length > 2 && arr[i][attr] === value) {
            arr.splice(i, 1);
        }
    }
    return arr;
};

export { createWeatherInfo, createFavoriteItem, createWeatherIcon, removeByAttr };
