const API_KEY = CONFIG.API_KEY;
const API_URL = 'https://api.weatherapi.com/v1/forecast.json';

// Load weather data when the page loads
document.addEventListener('DOMContentLoaded', () => {
    getWeather();
});

async function getWeather() {
    const location = document.getElementById('location').value;
    try {
        const response = await fetch(`${API_URL}?key=${API_KEY}&q=${location}&days=3&aqi=yes`);
        const data = await response.json();
        
        if (response.ok) {
            updateCurrentWeather(data);
            updateForecast(data);
        } else {
            alert('Error: ' + data.error.message);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Failed to fetch weather data. Please try again.');
    }
}

function updateCurrentWeather(data) {
    const current = data.current;
    const location = data.location;

    // Update weather icon
    document.getElementById('weather-icon').src = 'https:' + current.condition.icon;
    
    // Update temperature
    document.getElementById('temperature').textContent = `${current.temp_f}°F`;
    
    // Update condition
    document.getElementById('condition').textContent = current.condition.text;
    
    // Update location name
    document.getElementById('location-name').textContent = `${location.name}, ${location.region}`;
    
    // Update additional info
    document.getElementById('humidity').textContent = `Humidity: ${current.humidity}%`;
    document.getElementById('wind').textContent = `Wind: ${current.wind_mph} mph`;
    document.getElementById('feels-like').textContent = `Feels like: ${current.feelslike_f}°F`;
}

function updateForecast(data) {
    const forecastContainer = document.getElementById('forecast-container');
    forecastContainer.innerHTML = '';

    data.forecast.forecastday.forEach(day => {
        const date = new Date(day.date);
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
        
        const forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-item';
        forecastItem.innerHTML = `
            <div>${dayOfWeek}</div>
            <img src="https:${day.day.condition.icon}" alt="${day.day.condition.text}">
            <div>${day.day.maxtemp_f}°F / ${day.day.mintemp_f}°F</div>
            <div>${day.day.condition.text}</div>
        `;
        
        forecastContainer.appendChild(forecastItem);
    });
}