import './WeatherPage.css'
import SideBar from '../SideBar'
import WeatherIcon from '../WeatherIcon'
import SearchBar from '../SearchBar'
import { FaSun } from 'react-icons/fa' // UV Index
import { FaWind } from 'react-icons/fa' // Wind
import { WiHumidity } from 'react-icons/wi' // Humidity
import { MdVisibility } from 'react-icons/md' // Visibility
import { FaThermometerHalf } from 'react-icons/fa' // Feels Like
import { WiRaindrop } from 'react-icons/wi' // Chance of rain
import { IoIosSpeedometer } from 'react-icons/io' // Pressure
import { GiSunset } from 'react-icons/gi' // Sunset


export default function WeatherPage() {
    return (
        <>
            <SideBar />
            <SearchBar />
            <main className='w-main-content'>
                <CityCard name='Madrid' />
                    <div id='w-properties'>
                        <PropertyCard type='uv' name='UV Index' value='3' />
                        <PropertyCard type='wind' name='Wind' value='0.2 km/h' />
                        <PropertyCard type='humidity' name='Humidity' value='56%' />
                        <PropertyCard type='visibility' name='Visibility' value='12 km' />
                        <PropertyCard type='feelsLike' name='Feels like' value='30°' />
                        <PropertyCard type='rainChance' name='Chance of rain' value='0%' />
                        <PropertyCard type='pressure' name='Pressure' value='1008 hPa' />
                        <PropertyCard type='sunset' name='Sunset' value='20:58' />
                    </div>
            </main>
        </>
    )
}

function CityCard({name}) {
    return (
        <div className='w-city-card'>
            <div>
                <h2>{name}</h2>
                <p className='p-grey'>Chance of rain: 0%</p>
                <h1>31°</h1>
            </div>
            <div className='w-icon'>
                <WeatherIcon type='sunny' id='w-icon-type' />
            </div>
        </div>
    )
}

function PropertyCard({name, value, type}) {
    const propertyIcons = {
        uv: <FaSun className='w-p-icon' />,
        wind: <FaWind className='w-p-icon' />,
        humidity: <WiHumidity className='w-p-icon' />,
        visibility: <MdVisibility className='w-p-icon' />,
        feelsLike: <FaThermometerHalf className='w-p-icon' />, 
        rainChance: <WiRaindrop className='w-p-icon' />,
        pressure: <IoIosSpeedometer className='w-p-icon' />, 
        sunset: <GiSunset className='w-p-icon' />
    }

    return (
        <div className='w-property-card'>
            <div className='w-p-icon-div'>{propertyIcons[type]}</div>
            <div>
                <h3>{name}</h3>
                <h3 className='w-h3-grey'>{value}</h3>
            </div>
        </div>
    )
}
