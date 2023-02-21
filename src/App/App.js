import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Home/Login/Login'
import Sign from '../Pages/Sign';
import './Fonts/Fonts.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/sign' element={<Sign />} />
        </Routes>      
      </BrowserRouter>)
}

export default App;
