import FirstPage from './components/FirstPage'
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<FirstPage size='300px' />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
