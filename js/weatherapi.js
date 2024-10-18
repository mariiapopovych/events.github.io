document.addEventListener("DOMContentLoaded", function() {
    const apiKey = '3e45d35bcb574f6315b5ff37df23b8ea'; 
    const city = 'Bern';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Handle the case where the API response contains an error
            if (data.cod !== 200) {
                console.error("Error fetching weather data:", data.message);
                return;
            }

            // Extract relevant data
            const temperature = data.main.temp;
            const weatherDescription = data.weather[0].description;
            const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

            // Display weather info in DOM elements
            document.querySelector('#weather .temp').innerHTML = `${temperature}°C`;
            document.querySelector('#icon').src = icon;
            document.querySelector('#icon').alt = weatherDescription;
            document.querySelector('#weather .desc').innerHTML = weatherDescription;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
