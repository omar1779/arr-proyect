import './App.css'
import {Routes , Route} from 'react-router-dom'
import Home from './page/Home/Home'
import Question from './page/Question/Question'
import Start from './page/Start/Start'
import Navbar from './components/Navbar/Navbar'
import logoarifa from './logoarifa.jpg'
function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Question' element={<Question/>}/>
		    <Route path='/Start' element={<Start/>}/>
      </Routes>
    </div>
  )
}
export const imagen = [logoarifa]
export default App
