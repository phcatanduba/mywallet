import { Link } from 'react-router-dom';
import styled from "styled-components";
import sign from '../../App/Images/sign.png';
import Button from "../../Components/SignUp/ButtonFormSign";
import Input from "../../Components/SignUp/InputFormSign";
import FormStrings from './StringsSignUp';
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function FormSign() {
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

    return (
        <BodyForm style={{ backgroundImage: `url(${sign})` }}>
            <FormSignUp>
                <Input type={'name'} placeholder={FormStrings.name} />
                <Input type={'email'} placeholder={FormStrings.email} />
                <Input type={'cpf'} placeholder={FormStrings.cpf} />
                <Input type={'password'} placeholder={FormStrings.password}
                    onChange={handlePasswordChange("password")}
                    value={values.password}
                    endAdornment={
                        <InputAdornment position="start">
                            <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    } />
                <Input type={'password'} placeholder={FormStrings.confirmPassword}
                    onChange={handlePasswordChange("password")}
                    value={values.password}
                    endAdornment={
                        <InputAdornment position="start">
                            <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    } />
                <Button placeholder={FormStrings.register} />
                <Link to={"/"} style={{ textDecoration: 'none' }} className="span">
                    <span>{FormStrings.goToLogin}</span>
                </Link>
            </FormSignUp>
        </BodyForm>
    );
}

export default FormSign;

const BodyForm = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 100px;
    margin-top: 200px
`

const FormSignUp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: 100%;

    .span{
        margin-top: 36px;
        width: 100%;
        height: 18px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
    }
    .span:hover{
        color: #FFFFFF;
        text-decoration: underline;
        cursor: pointer;
    }
`