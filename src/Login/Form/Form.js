import LoginInput from "../../Components/LoginInput/LoginInput";
import RememberMe from "./RememberMe/RememberMe";
import RoundedButton from "../../Components/RoundedButton/RoundedButton";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import "./Form.css"
import FormStrings from "./Strings";
import SignUpLink from "../../SignUpLink/SignUpLink";
import React from "react";
import { Link } from "react-router-dom";

function Form() {
    
    return(
        <div className="container">
            <div className="blur" />
            <div className="form-container">
                <form>
                    <LoginInput placeholder={FormStrings.userPlaceholder} type="name"/>
                    <LoginInput placeholder={FormStrings.passwordPlaceholder} type="password"/>
                    <div className="box-form">
                        <RememberMe />
                        <ForgotPassword />
                    </div>
                    <Link>
                        <RoundedButton text="Entrar" className="login-button"/>
                    </Link>
                </form>
                <SignUpLink />
            </div>
        </div>
    );
}

export default Form;