import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='bg-app'>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}></Route>
          <Route path='/contato' exact Component={Contact}></Route>
        </Routes>
      <Footer />
      </Router>
    </div>
  )
}

export default App
