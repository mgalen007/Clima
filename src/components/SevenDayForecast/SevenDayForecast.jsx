import './SevenDayForecast.css'
import WeatherIcon from '../WeatherIcon'

function SevenDayForecast() {
    return (
        <div className='d-forecast'>
            <h3 className='df-h3'>7-DAY FORECAST</h3>
            <div className="df-days-section">
                <DayCard day='Today' weather='Sunny' />
                <DayCard day='Tue' weather='Sunny' />
                <DayCard day='Wed' weather='Sunny' />
                <DayCard day='Thu' weather='Cloudy' />
                <DayCard day='Fri' weather='Cloudy' />
                <DayCard day='Sat' weather='Rainy' />
                <DayCard day='Sun' weather='Sunny' />
            </div>
        </div>
    )
}

function DayCard({day, weather}) {
    return (
        <section className='df-day'>
            <span className='df-day-name'>{day}</span>
            <div>
                <WeatherIcon type={weather.toLowerCase()} size='20px' id={weather} />
                <span className='df-weather-name'>{weather}</span>
            </div>
            <span className='df-day-num'><span className='bold'>37</span>/22</span>
        </section>
    )
}

export default SevenDayForecast