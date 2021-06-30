import React from 'react';
import './WeatherIcon.modules.scss';

const WeatherIcon: React.FC = ({ children }) => {
    return <div className="weather-icon">{children}</div>;
};

export default WeatherIcon;
