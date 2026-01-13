function WeatherIcon({type, size, id}) {
    const weatherIcons = {
        sunny: '☀️',
        cloudy: '☁️',
        rainy: '🌧️',
        clear: '🌤️'
    }
    return <p id={id} className='weather-icon'>{weatherIcons[type]}</p>
}

export default WeatherIcon