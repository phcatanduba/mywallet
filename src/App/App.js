import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Home/Login/Login'
import SignUp from '../Pages/SignUp';
import './Fonts/Fonts.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>      
      </BrowserRouter>)
}

export default App;
