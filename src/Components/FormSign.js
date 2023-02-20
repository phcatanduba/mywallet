import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

import Button from "../Styles/ButtonFormSign";
import Input from "../Styles/InputFormSign";

function FormSign() {
    const [name, setName, email, setEmail, cpf, setCpf, password, setPassword, password2, setPassword2] = useState("")
    return (
        <>
            <FormCadastro>
                <Input type={'name'} placeholder={'Nome Completo'}  value={name} />
                <Input type={'email'} placeholder={'E-mail'}  value={email} />
                <Input type={'cpf'} placeholder={'CPF'}  value={cpf} />
                <Input type={'password'} placeholder={'Senha'} value={password} />
                <Input type={'password'} placeholder={'Confirme a senha'} value={password2} />

                <Button placeholder={"Cadastrar"} />
                <Link to={"/"} style={{ textDecoration: 'none' }} className="span">
                    <span>Já possui cadastro? Entre já na sua conta!</span>
                </Link>
            </FormCadastro>
        </>
    );
}

export default FormSign;

const FormCadastro = styled.main`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #8C11BE;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

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