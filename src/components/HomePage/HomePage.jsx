import "./HomePage.css";
import SideBar from "../SideBar";
import WeatherIcon from "../WeatherIcon";
import SearchBar from "../SearchBar";
import SevenDayForecast from "../SevenDayForecast";
import ForecastToday from "../ForecastToday";
import { FaSun } from "react-icons/fa"; // UV Index
import { FaWind } from "react-icons/fa"; // Wind
import { WiHumidity } from "react-icons/wi"; // Humidity
import { MdVisibility } from "react-icons/md"; // Visibility
import { FaThermometerHalf } from "react-icons/fa"; // Feels Like
import { WiRaindrop } from "react-icons/wi"; // Chance of rain
import { IoIosSpeedometer } from "react-icons/io"; // Pressure
import { GiSunset } from "react-icons/gi"; // Sunset
import { FaCircleArrowLeft } from "react-icons/fa6";
import { fetchCityData } from "../../services/api.js";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchCityData("Kigali");
      setCityData(data);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <>
      <SideBar />
      <SearchBar />
      <main className="w-main-content">
        {loading ? (
        <>
            <CityCard name="Kigali" className="w-city-card" currentTemp='...' description='...' />
            <div id="w-properties">
                <PropertyCard type="uv" name="UV Index" value="..." />
                <PropertyCard type="wind" name="Wind" value="..." />
                <PropertyCard type="humidity" name="Humidity" value="..." />
                <PropertyCard type="visibility" name="Visibility" value="..." />
                <PropertyCard type="feelsLike" name="Feels like" value="..." />
                <PropertyCard type="rainChance" name="Chance of rain" value="..." />
                <PropertyCard type="pressure" name="Pressure" value="..." />
                <PropertyCard type="sunset" name="Sunset" value="..." />
            </div>
        </>
        ) : (
        <>
            <CityCard name="Kigali" className="w-city-card" currentTemp={cityData.currentTemp+'°'} description={cityData.condition} />
            <div id="w-properties">
                <PropertyCard
                type="uv"
                name="UV Index"
                value={cityData.uvIndex || "..."}
                />
                <PropertyCard
                type="wind"
                name="Wind"
                value={cityData.windSpeed || "..."}
                />
                <PropertyCard
                type="humidity"
                name="Humidity"
                value={cityData.humidity || "..."}
                />
                <PropertyCard
                type="visibility"
                name="Visibility"
                value={cityData.visibility || "..."}
                />
                <PropertyCard
                type="feelsLike"
                name="Feels like"
                value={cityData.feelsLike || "..."}
                />
                <PropertyCard
                type="rainChance"
                name="Chance of rain"
                value={cityData.rainChance || "..."}
                />
                <PropertyCard
                type="pressure"
                name="Pressure"
                value={cityData.pressure}
                />
                <PropertyCard
                type="sunset"
                name="Sunset"
                value={new Date(cityData.sunset * 1000).toLocaleTimeString()}
                />
            </div>
        </>
        )}

        <div id="home-add">
          <ForecastToday />
          <SevenDayForecast />
        </div>
        <DetailsPane />
      </main>
    </>
  );
}

function CityCard({ name, description, currentTemp }) {
  return (
    <div className="w-city-card">
      <div>
        <h2>{name}</h2>
        <p className="p-grey">Description: {description}</p>
        <h1>{currentTemp}</h1>
      </div>
      <div className="w-icon">
        <WeatherIcon type="sunny" id="w-icon-type" />
      </div>
    </div>
  );
}

function PropertyCard({ name, value, type }) {
  const propertyIcons = {
    uv: <FaSun className="w-p-icon" />,
    wind: <FaWind className="w-p-icon" />,
    humidity: <WiHumidity className="w-p-icon" />,
    visibility: <MdVisibility className="w-p-icon" />,
    feelsLike: <FaThermometerHalf className="w-p-icon" />,
    rainChance: <WiRaindrop className="w-p-icon" />,
    pressure: <IoIosSpeedometer className="w-p-icon" />,
    sunset: <GiSunset className="w-p-icon" />,
  };

  return (
    <div className="w-property-card">
      <div className="w-p-icon-div">{propertyIcons[type]}</div>
      <div>
        <h3>{name}</h3>
        <h3 className="w-h3-grey">{value}</h3>
      </div>
    </div>
  );
}

function DetailsPane() {
  return (
    <div className="h-details-pane">
      <FaCircleArrowLeft />
    </div>
  );
}
