import { Link } from 'react-router-dom';
import styled from "styled-components";
import sign from '../../App/Images/sign.png';
import Button from "../../Components/SignUp/ButtonFormSign";
import Input from "../../Components/SignUp/InputFormSign";
import FormStrings from './StringsSignUp';

function FormSign() {
    
    return (
        <BodyForm style={{ backgroundImage:`url(${sign})` }}>
            <FormSignUp>
                <Input type={'name'} placeholder={ FormStrings.name } />
                <Input type={'email'} placeholder={FormStrings.email}  />
                <Input type={'cpf'} placeholder={FormStrings.cpf}  />
                <Input type={'password'} placeholder={FormStrings.password}  />
                <Input type={'password'} placeholder={FormStrings.confirmPassword}  />

                <Button placeholder={"Cadastrar"} />
                <Link to={"/"} style={{ textDecoration: 'none' }} className="span">
                    <span>text={FormStrings.goToLogin}</span>
                </Link>
            </FormSignUp>
        </BodyForm>
    );
}

export default FormSign;

const BodyForm = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const FormSignUp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-top: 50px;

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