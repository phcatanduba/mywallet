import LoginInput from "../../Components/LoginInput/LoginInput";
import RememberMe from "./RememberMe/RememberMe";
import RoundedButton from "../../Components/RoundedButton/RoundedButton";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import "./Form.css"
import FormStrings from "./Strings";
import SignUpLink from "./SignUpLink/SignUpLink";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function Form() {
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
      });
      
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
      
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      
      const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    return(
        <div className="container">
            <div className="blur" />
            <div className="form-container">
                <form>
                    <LoginInput placeholder={FormStrings.userPlaceholder} type="name"/>
                    <LoginInput placeholder={FormStrings.passwordPlaceholder} type={values.showPassword ? "text" : "password"}
                        onChange={handlePasswordChange("password")}
                        value={values.password}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }/>
                    <div className="box-form">
                        <RememberMe />
                        <ForgotPassword />
                    </div>
                    <RoundedButton text="Entrar" className="login-button"/>
                </form>
                <SignUpLink />
            </div>
        </div>
    );
}

export default Form;