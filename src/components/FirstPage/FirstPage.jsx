import './FirstPage.css'
import umbrellaImage from '../../assets/Gemini_Generated_Image_b3pvmfb3pvmfb3pv-removebg-preview.png'
import { FaUmbrella } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function FirstPage({size}) {
    const navigate = useNavigate()
    
    return (
        <div className='content'>
            <img
                src={umbrellaImage}
                width={size} 
                height={size}
                alt='Umbrella Image'
                className='umbrella-image'>
            </img>
            <div className='first-info'>
                <FaUmbrella size='30px'/>
                <h1 id='clima-title'>Clima</h1>
                <p className='p-grey' id='first-p'>Weather App</p>
                <button onClick={() => navigate('/weather')} className='btn btn-primary'>Get Started</button>
            </div>
        </div>
    )
}

export default FirstPage