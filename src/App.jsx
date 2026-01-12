import FirstPage from './components/FirstPage'
import WeatherPage from './components/WeatherPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<FirstPage size='300px' />} />
          <Route path='/weather' element={<WeatherPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
