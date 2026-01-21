
import './App.css'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'


function App() {

  return (
    <div>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Homepage/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
