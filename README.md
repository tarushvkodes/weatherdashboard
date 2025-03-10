# Weather Dashboard

A simple and responsive weather dashboard that shows current weather conditions and a 3-day forecast using the WeatherAPI.com service.

## Features

- Current weather conditions including temperature, humidity, and wind speed
- Feels-like temperature
- 3-day weather forecast
- Responsive design that works on desktop and mobile devices

## Setup

1. Clone this repository:
```bash
git clone https://github.com/tarushvkodes/weatherdashboard
```

2. Get your API key:
   - Sign up at [WeatherAPI.com](https://www.weatherapi.com/)
   - Get your free API key from your account dashboard

3. Configure your API key:
   - Rename `config.template.js` to `config.js`
   - Open `config.js` and replace `'YOUR_API_KEY_HERE'` with your actual API key

4. Open `index.html` in your web browser to use the weather dashboard

## Usage

- Enter a ZIP code in the search box (default is 20105)
- Click "Get Weather" to see the current conditions and forecast
- The dashboard will display:
  - Current temperature
  - Weather condition with icon
  - Humidity
  - Wind speed
  - Feels-like temperature
  - 3-day forecast with high/low temperatures

## Note

Make sure to keep your API key private and never commit your actual `config.js` file to public repositories. The `config.template.js` file is provided as a template for configuration.
