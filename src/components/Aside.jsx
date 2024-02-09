export function Aside({
  getWeather,
  input,
  setInput,
  API_KEY,
  getWeatherDetails,
}) {
  function getUserCoordinates() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const REVERSE_GEOCODING_URL = `
        https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
        fetch(REVERSE_GEOCODING_URL)
          .then((res) => res.json())
          .then((data) => {
            const uniqueForecastDays = [];
            uniqueForecastDays.push(data);
            const name = uniqueForecastDays[0].name;
            console.log(name);
            getWeatherDetails(name, latitude, longitude);
          })
          .catch(() => {
            alert("An error occured while fetching the city!");
          });
      },
      (error) => {
        if (error.code == error.PERMISSION_DENIED) {
          alert(
            "Geolocation request denied. Please reset permission to grant access again.",
          );
        }
      },
    );
  }

  return (
    <aside>
      <form onSubmit={getWeather}>
        <label
          htmlFor="search"
          className="text-lg font-bold text-black hover:cursor-pointer md:text-2xl"
        >
          Enter a City Name
        </label>
        <input
          className="my-2 mb-4 block w-full rounded border-2 border-transparent p-4 font-semibold text-black focus:border-sky-600  focus:outline-none"
          type="text"
          name="search"
          id="search"
          placeholder="E.g. New York, London, Tokyo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="w-full rounded-md border-2 border-sky-600 bg-sky-600 py-4 text-lg font-semibold transition-colors duration-300 ease-out hover:bg-transparent hover:text-sky-600">
          Search
        </button>
        <div className="relative my-4 py-4">
          <span className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 bg-sky-100 p-2 text-2xl text-gray-600">
            or
          </span>
          <hr className="h-[2px] w-full bg-gray-600" />
        </div>
      </form>
      <button
        onClick={getUserCoordinates}
        className="w-full rounded-md border-2 border-gray-500 bg-gray-500 py-4 text-lg font-semibold transition-colors duration-300 ease-out hover:bg-transparent hover:text-gray-500">
        Use Current Location
      </button>
    </aside>
  );
}
