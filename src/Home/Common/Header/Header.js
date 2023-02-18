import './Header.css'
import RoundedButton from '../../../Components/RoundedButton/RoundedButton';
import Logo from '../../../App/Images/logo.png'
import HeaderStrings from './Strings';

function Header() {
    return (
        <header>
            <RoundedButton text={ HeaderStrings.simulators }/>
            <img className="logo" src={Logo} alt="logo"/>
            <RoundedButton text={ HeaderStrings.myAccount }/>
        </header>
    );
}

export default Header;

