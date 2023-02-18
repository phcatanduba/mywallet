import './Header.css'
import RoundedButton from '../../../Components/RoundedButton/RoundedButton';
import Logo from '../../../App/Images/home-icon.png'

function Header() {
    return (
        <header>
            <RoundedButton text= "SIMULADORES"/>
            <img className="logo" src={Logo} alt="logo"/>
            <RoundedButton text= "MINHA CONTA"/>
        </header>
    );
}

export default Header;

