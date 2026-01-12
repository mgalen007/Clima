import { FaUmbrella } from 'react-icons/fa'
import { FaCloudSunRain } from 'react-icons/fa'
import { FaTreeCity } from 'react-icons/fa6'
import { FaMapMarkedAlt } from 'react-icons/fa'
import './SideBar.css'

function SideBar() {
    return (
        <aside className='sidebar'>
            <FaUmbrella size={25} />
            <section className='sb-pages'>
                <FaCloudSunRain size={25} id='weather-icon' />
                <span className='sb-small'>Weather</span>
                <FaTreeCity size={25} />
                <span className='sb-small'>Cities</span>
                <FaMapMarkedAlt size={25} />
                <span className='sb-small'>Map</span>
            </section>
        </aside>
    )
}

export default SideBar