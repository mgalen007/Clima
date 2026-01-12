function WeatherIcon({type, size, id}) {
    const weatherIcons = {
        sunny: '☀️',
        cloudy: '☁️',
        rainy: '🌧️',
        clear: '🌤️'
    }
    return <p id={id}>{weatherIcons[type]}</p>
}

export default WeatherIcon