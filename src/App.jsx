import { WeatherDetails } from "./components/WeatherDetails";
import { Header } from "./components/Header";
import { Article } from "./components/Article";
import { Aside } from "./components/Aside";
import { useState } from "react";
import "./App.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const [input, setInput] = useState("");
  const [cityName, setCityName] = useState("");
  const [DaysForecast, setDaysForecast] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const API_KEY = "7f182e674047a8e18333b5c592e56c65";

  function getWeatherDetails(cityName, lat, lon) {
    const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(WEATHER_API_URL)
      .then((res) => res.json())
      .then((data) => {
        const uniqueForecastDays = [];
        const fourDaysForecast = data.list.filter((forecast) => {
          const forecastDate = new Date(forecast.dt_txt).getDate();
          if (!uniqueForecastDays.includes(forecastDate)) {
            return uniqueForecastDays.push(forecastDate);
          }
        });
        setDaysForecast(fourDaysForecast);
        setIsFetching((prev) => !prev);
      })
      .catch((err) => console.error(err));
  }

  async function getWeather(e) {
    e.preventDefault();

    let cityName = input.toLowerCase().trim();
    if (!cityName) return;

    const GEO_API = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
    await fetch(GEO_API)
      .then((res) => res.json())
      .then((data) => {
        if (!data.length) return alert(`No coordinates found for ${cityName}`);
        const { name, lat, lon } = data[0];
        getWeatherDetails(name, lat, lon);
        setCityName(cityName);
      })
      .catch((err) => {
        console.error(err);
        alert(`An error occured when fetching the coordinates!`);
      });
      setInput("");
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-sky-100 text-white">
        <Header />
        <Article>
          <Aside
            getWeather={getWeather}
            input={input}
            setInput={setInput}
            getWeatherDetails={getWeatherDetails}
            API_KEY={API_KEY}
            DaysForecast={DaysForecast}
          />
          <WeatherDetails 
            cityName={cityName}
            isFetching={isFetching}
            DaysForecast={DaysForecast}
            getWeather={getWeather}
          />
        </Article>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
