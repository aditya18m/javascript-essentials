function showweatherDetails(event){
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY';
    const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;
     fetch(geoUrl)
        .then(response => response.json())
        .then(data => {
        const lat = data[0].lat;
        const lon = data[0].lon;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            const tempCelsius = data.main.temp - 273;
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${tempCelsius} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
            });
        });
}
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
