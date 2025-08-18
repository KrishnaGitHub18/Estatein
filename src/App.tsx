import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import './App.css'
import Navbar from './components/Navbar'
import Properties from './screens/Properties'
import PropertyDetails from './screens/PropertyDetails'
import Services from './screens/Services'

function App() {
  return (
    <div className='bg-[#1A1A1A]'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/details" element={<PropertyDetails />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}


export default App
