import LoginInput from "../../Components/LoginInput/LoginInput";
import RememberMe from "./RememberMe/RememberMe";
import RoundedButton from "../../Components/RoundedButton/RoundedButton";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import "./Form.css"
import FormStrings from "./Strings";

function Form() {
    return(
        <div className="body">
            <div className="blur" />
            <form>
                <LoginInput placeholder={FormStrings.userPlaceholder} type="name"/>
                <LoginInput placeholder={FormStrings.passwordPlaceholder} type="password"/>
                <div className="box-form">
                    <RememberMe />
                    <ForgotPassword />
                </div>
                <RoundedButton text="Entrar" className="login-button"/>
            </form>
        </div>
    );
}

export default Form;