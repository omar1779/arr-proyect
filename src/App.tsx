import './App.css'
import {Routes , Route} from 'react-router-dom'
import Home from './page/Home'
import Contact from './page/Contact'
import Navbar from './components/Navbar/Navbar'
function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
