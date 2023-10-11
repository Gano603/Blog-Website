import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import './index.css'
import Home from './pages/Home/Home'
import Page_Not_Found from './Page_Not_Found'

function App() {
  return (
    <div className='mx-32'>
      <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/*' element={<Page_Not_Found />}/>

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
