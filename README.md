## Introduction

Sample Weather App created using ReactJS + TS using [OpenWeather](https://openweathermap.org/api).

The app supports following:

- Show weather by current location (requires allowed use of location in your browser)

- Toggling favorite city.

- Implement search by city name.

## Requirements

You need to have node.js installed. If you do not, please visit [node.js](https://nodejs.org/en/) website before taking next steps.

## Setup & Startup

1. Clone the repo

   ```sh
   git clone https://github.com/mikaeljan/weather-app-react-ts.git
   ```

2. Navigate to project directory
3. Install NPM packages

   ```sh
   npm install
   ```

4. Create an account @[OpenWeather](https://openweathermap.org/api) and subscribe to Free plan to obtain your API key. This is necessary in next step as the app consumes its [Weather API](https://openweathermap.org/api)
5. In root directory, create .env file and replace following values with values from [OpenWeather](https://openweathermap.org)

    ```
    REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
    REACT_APP_API_KEY = Paste your API key here.
    REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'
    ```

6. Run the app in the development mode (open [http://localhost:3000](http://localhost:3000) to view it in the browser.)
    `npm run start`

## Usage

1. If prompted please allow your browser to access your location as it uses coordinates to display the first result

2. Enter city name and press <em>Enter</em> key to fetch a Weather information relevant to your query

3. If you would like to favorite your City, click the <strong>+</strong> icon in your search result

4. Favorite Cities can be removed by clicking  <strong>-</strong> on their cards

5. Clicking the Favorite card updates your currently selected query

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Project Link: [https://github.com/mikaeljan/weather-app-react-ts](https://github.com/mikaeljan/weather-app-react-ts)
