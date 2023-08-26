import LoginInput from "../../Components/LoginInput/LoginInput";
import RememberMe from "./RememberMe/RememberMe";
import RoundedButton from "../../Components/RoundedButton/RoundedButton";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import "./Form.css"
import FormStrings from "./Strings";
import SignUpLink from "../../SignUpLink/SignUpLink";
import React, { useState } from 'react';
import { auth } from '../../App/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { TailSpin } from  'react-loader-spinner'

function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const buttonText = "Entrar"
    const spinner = <TailSpin
                        height="50"
                        width="50"
                        color="#FFFFFF"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
    const [child, setChild] = useState(buttonText);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setChild(spinner)
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setChild(buttonText)
            alert('Usuário logado com sucesso!')
        } catch (error) {
            setChild(buttonText)
            console.error('Erro ao fazer login:', error);
        }
    };

    return(
        <div className="container">
            <div className="blur" />
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <LoginInput onChange={(e) => setEmail(e.target.value)} placeholder={FormStrings.userPlaceholder} type="name"/>
                    <LoginInput onChange={(e) => setPassword(e.target.value)} placeholder={FormStrings.passwordPlaceholder} type="password"/>
                    <div className="box-form">
                        <RememberMe />
                        <ForgotPassword />
                    </div>
                    <RoundedButton type="submit" child={child} className="login-button"/>
                </form>
                <SignUpLink />
            </div>
        </div>
    );
}

export default Form;