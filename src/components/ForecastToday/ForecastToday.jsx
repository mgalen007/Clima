import './ForecastToday.css'
import WeatherIcon from '../WeatherIcon'

function ForecastToday() {
    return (
        <>
        <div className='t-forecast'>
            <h3 className='tf-h3'>TODAY'S FORECAST</h3>
            <div className='tf-cards'>
                <section className='tf-section tf-spec'>
                    <h3 className='tf-h3'>6:00 AM</h3>
                    <WeatherIcon type='cloudy' size='20px' id='tf-icon-1' />
                    <h2 className='tf-h2'>25°</h2>
                </section>
                <section className='tf-section tf-spec'>
                    <h3 className='tf-h3'>9:00 AM</h3>
                    <WeatherIcon type='clear' size='20px' id='tf-icon-2' />
                    <h2 className='tf-h2'>28°</h2>
                </section>
                <section className='tf-section'>
                    <h3 className='tf-h3'>12:00 PM</h3>
                    <WeatherIcon type='sunny' size='20px' id='tf-icon-3' />
                    <h2 className='tf-h2'>33°</h2>
                </section>
            </div>
        </div>
        </>
    )
}

export default ForecastToday