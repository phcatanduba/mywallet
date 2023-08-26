import './Header.css'
import RoundedButton from '../RoundedButton/RoundedButton';
import Logo from '../../App/Images/logo.png'
import HeaderStrings from './Strings';

function Header() {
    return (
        <header>
            <RoundedButton className="header-button" text={ HeaderStrings.simulators }/>
              <img className="logo" src={Logo} alt="logo"/>
            <RoundedButton className="header-button" text={ HeaderStrings.myAccount }/>
        </header>
    );
}

export default Header;

