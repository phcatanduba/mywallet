import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Assets from '../Assets/Assets';
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp';
import './Fonts/Fonts.css'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Assets />} />
        </Routes>      
    </BrowserRouter>)
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lexend Deca', sans-serif;
    background-color: #f5f5f5;
  }
`;
