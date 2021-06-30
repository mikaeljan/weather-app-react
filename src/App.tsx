import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ResultDetail from './components/ResultDetail/ResultDetail';
import NoResultsFound from './components/NoResultsFound/NoResultsFound';
import FavoriteList from './components/FavoriteList/FavoriteList';
import { createWeatherInfo, removeByAttr } from './utils/helpers';
import FavoriteItem from './model/FavoriteItem';
import './App.scss';

const App: React.FC = () => {
    const [data, setData] = useState<any>();
    const [lat, setLat] = useState<number>();
    const [long, setLong] = useState<number>();
    const [city, setCity] = useState<string>('');
    const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
    const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            if (!lat && !long) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    setLat(position.coords.latitude);
                    setLong(position.coords.longitude);
                });
            }
            const rawResponse = await fetch(
                `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`,
            );
            const result = await rawResponse.json();
            if (result.cod == 200) {
                const weatherInfo = createWeatherInfo(result);
                setData(weatherInfo);
            } else {
                console.warn('Oops');
            }
        };
        fetchData();
    }, [lat, long]);

    const fetchDataByCity = (city: string) => {
        const fetchData = async () => {
            const rawResponse = await fetch(
                `${process.env.REACT_APP_API_URL}/weather/?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`,
            );
            const result = await rawResponse.json();
            if (result.cod == 200) {
                const weatherInfo = createWeatherInfo(result);
                setData(weatherInfo);
                console.log({ weatherInfo });
            } else {
                console.warn('Oops');
                setData(null);
            }
        };
        fetchData();
    };
    const searchByCity = (city: string) => {
        console.log({ city });
        setCity(city);
        fetchDataByCity(city);
    };

    const addFavorite = (selectedItem: FavoriteItem) => {
        const localFavIds = [...favoriteIds];
        const localFavs = [...favorites];
        if (localFavIds.includes(selectedItem.id)) {
        } else {
            localFavs.push(selectedItem);
            localFavIds.push(selectedItem.id);
            setFavoriteIds(localFavIds);
            setFavorites(localFavs);
        }
    };

    const removeFavorite = (id: number) => {
        const localFavIds = [...favoriteIds];
        const localFavs = [...favorites];
        const idIndex = localFavIds.indexOf(id);
        localFavIds.splice(idIndex, 1);
        const newFavs = removeByAttr(localFavs, 'id', id);
        setFavoriteIds(localFavIds);
        setFavorites(newFavs);
    };

    return (
        <div className="App">
            <header className="App-header">
                <SearchBar change={setCity} submit={searchByCity} value={city} showResult={false} />
            </header>
            {data ? <ResultDetail weatherData={data} addFavorite={addFavorite} /> : <NoResultsFound />}
            {favorites.length > 0 ? (
                <FavoriteList
                    items={favorites}
                    selectCurrent={(userInput) => searchByCity(userInput)}
                    removeFavorite={removeFavorite}
                />
            ) : null}
        </div>
    );
};

export default App;
