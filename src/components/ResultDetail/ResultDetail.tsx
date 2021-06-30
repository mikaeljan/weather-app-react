import React from 'react';
import './ResultDetail.modules.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import WeatherIcon from './WeatherIcon';
import { createFavoriteItem, createWeatherIcon } from '../../utils/helpers';

type ResultDetailProps = {
    weatherData: any;
    addFavorite: (weatherData: any) => void;
};

const ResultDetail: React.FC<ResultDetailProps> = ({ weatherData, addFavorite }) => {
    const weatherIcon = createWeatherIcon(weatherData.main);

    return (
        <div className="result">
            <div className="result-header">
                <h2 className="result-header-title">
                    {weatherData.city}, {weatherData.country}
                </h2>
                <FontAwesomeIcon
                    onClick={() => {
                        const favItem = createFavoriteItem(weatherData);
                        addFavorite(favItem);
                    }}
                    className={'result-header-favorite tooltip'}
                    color={'white'}
                    icon={faPlus}
                />
            </div>
            <div className="result-body-main">
                <WeatherIcon>{weatherIcon}</WeatherIcon>
                <span className="result-header-temperature">{weatherData.temp}&deg;C</span>
            </div>
            <h4>{weatherData.date}</h4>
            <div className="result-body-sub">
                <div className="result-body-sub-detail">Feels like: {weatherData.feelsLike}&deg;C </div>
                <div className="result-body-sub-detail">Wind: {weatherData.wind} km/h</div>
                <div className="result-body-sub-detail">Visibility: {weatherData.visibility / 1000} </div>
                <div className="result-body-sub-detail">Humidity: {weatherData.humidity}%</div>
            </div>
        </div>
    );
};

export default ResultDetail;
