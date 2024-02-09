export function WeatherDetails({ DaysForecast, cityName, isFetching }) {
  return (
    <main className="mt-8 md:col-span-2">
      {!isFetching ? (
        DaysForecast.map((weatherItem, index) => {
          if (index === 0) {
            return (
              <section
                key={weatherItem.dt_txt}
                className="flex items-center justify-items-start rounded-md  bg-sky-600 p-8 md:justify-between"
              >
                <div className="flex w-4/5 flex-col gap-3">
                  <span className="text-2xl md:text-4xl">
                    {cityName.toUpperCase()} ({" "}
                    {weatherItem.dt_txt.split(" ")[0]} )
                  </span>
                  <span>Temperature: {weatherItem.main.temp} °C</span>
                  <span>
                    Wind: {(weatherItem.wind.speed - 273.15).toFixed(2)} M/S
                  </span>
                  <span>Humidity: {weatherItem.main.humidity} %</span>
                </div>
                <div className="flex flex-col items-center justify-start">
                  <img
                    src={`https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png`}
                    alt=""
                    className="h-auto md:w-auto"
                  />
                  <h2 className="text-lg font-light">
                    {weatherItem.weather[0].main.toUpperCase()}
                  </h2>
                </div>
              </section>
            );
          }
        })
      ) : (
        <section className="flex items-center justify-items-start rounded-md  bg-sky-600 p-8 md:justify-between">
          <div className="flex w-4/5 flex-col gap-3">
            <span className="text-2xl md:text-4xl">____( ____ )</span>
            <span>Temperature: ___ °C</span>
            <span>Wind: ___ M/S</span>
            <span>Humidity: ___ %</span>
          </div>
          <div className="flex flex-col items-center justify-start">
            <img src={null} alt="" className="h-auto md:w-auto" />
            <h2 className="text-lg font-light">_ _ _ _ </h2>
          </div>
        </section>
      )}

      <section>
        <h2 className="mt-4 text-2xl font-bold text-black">
          {DaysForecast.length - 1}-Day Forecast
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {isFetching ? (
            <>
              <div className="flex flex-col gap-3 rounded-md bg-gray-600 p-4 py-4 md:px-8">
                <h2 className="text-xl">( ___ )</h2>
                <img src={null} alt="" className="h-auto w-1/2" />
                <span>
                  <h2 className="text-lg font-light">( ____ )</h2>
                </span>
                <span>Temp: ( ___ ) _ °C</span>
                <span>Wind: ____ M/S</span>
                <span>Humidity: ____ %</span>
              </div>
              <div className="flex flex-col gap-3 rounded-md bg-gray-600 px-8 py-4">
                <h2 className="text-xl">( ___ )</h2>
                <img src={null} alt="" className="h-auto w-1/2" />
                <span>
                  <h2 className="text-lg font-light">( ____ )</h2>
                </span>
                <span>Temp: ( ___ ) _ °C</span>
                <span>Wind: ____ M/S</span>
                <span>Humidity: ____ %</span>
              </div>
              <div className="flex flex-col gap-3 rounded-md bg-gray-600 px-8 py-4">
                <h2 className="text-xl">( ___ )</h2>
                <img src={null} alt="" className="h-auto w-1/2" />
                <span>
                  <h2 className="text-lg font-light">( ____ )</h2>
                </span>
                <span>Temp: ( ___ ) _ °C</span>
                <span>Wind: ____ M/S</span>
                <span>Humidity: ____ %</span>
              </div>
              <div className="flex flex-col gap-3 rounded-md bg-gray-600 px-8 py-4">
                <h2 className="text-xl">( ___ )</h2>
                <img src={null} alt="" className="h-auto w-1/2" />
                <span>
                  <h2 className="text-lg font-light">( ____ )</h2>
                </span>
                <span>Temp: ( ___ ) _ °C</span>
                <span>Wind: ____ M/S</span>
                <span>Humidity: ____ %</span>
              </div>
              <div className="flex flex-col gap-3 rounded-md bg-gray-600 px-8 py-4">
                <h2 className="text-xl">( ___ )</h2>
                <img src={null} alt="" className="h-auto w-1/2" />
                <span>
                  <h2 className="text-lg font-light">( ____ )</h2>
                </span>
                <span>Temp: ( ___ ) _ °C</span>
                <span>Wind: ____ M/S</span>
                <span>Humidity: ____ %</span>
              </div>
            </>
          ) : (
            DaysForecast.map((weatherItem, index) => {
              if (index >= 1) {
                return (
                  <div
                    key={weatherItem.dt_txt}
                    className="flex flex-col gap-3 rounded-md bg-gray-600 px-4 py-8"
                  >
                    <h2 className="text-xl">
                      ( {weatherItem.dt_txt.split(" ")[0]} )
                    </h2>
                    <img
                      src={`https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png`}
                      alt=""
                      className="h-auto w-1/2"
                    />
                    <span>
                      <h2 className="text-lg font-light">
                        {weatherItem.weather[0].description.toUpperCase()}
                      </h2>
                    </span>
                    <span>Temp: {weatherItem.main.temp} °C</span>
                    <span>
                      Wind: {(weatherItem.wind.speed - 273.15).toFixed(2)} M/S
                    </span>
                    <span>Humidity: {weatherItem.main.humidity} %</span>
                  </div>
                );
              }
            })
          )}
        </div>
      </section>
    </main>
  );
}
