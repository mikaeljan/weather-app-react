import React from 'react';
import WeatherIcon from '../ResultDetail/WeatherIcon';
import './FavoriteList.modules.scss';
import { createWeatherIcon } from '../../utils/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import FavoriteItem from '../../model/FavoriteItem';

type FavoriteListProps = {
    items: FavoriteItem[];
    selectCurrent: (value: string) => void;
    removeFavorite: (id: number) => void;
};
const FavoriteList: React.FC<FavoriteListProps> = ({ items, removeFavorite, selectCurrent }) => {
    return (
        <div>
            <h2 className="list-header">Favorites</h2>
            <div className="list">
                {items.map((item) => {
                    const weatherIcon = createWeatherIcon(item.main);
                    return (
                        <div className="card-wrapper" key={item.id}>
                            <FontAwesomeIcon
                                onClick={() => {
                                    removeFavorite(item.id);
                                }}
                                className={'card-item-remove'}
                                color={'white'}
                                icon={faMinusCircle}
                            />
                            <div
                                className="card"
                                onClick={() => {
                                    selectCurrent(item.city);
                                }}
                            >
                                <div className="card-item card-item-header">
                                    <span className="">
                                        {item.city}, {item.country}
                                    </span>
                                </div>
                                <span className="card-item">{item.date}</span>
                                <WeatherIcon>{weatherIcon}</WeatherIcon>
                                <h4 className="card-item">{item.temp}&deg;C</h4>
                                <p className="card-item">{item.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FavoriteList;
