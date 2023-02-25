import { Link } from 'react-router-dom';
import styled from "styled-components";
import sign from '../../App/Images/sign.png';
import Button from "../../Components/SignUp/ButtonFormSign";
import FormStrings from './StringsSignUp';
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function ExampleFormik() {
    const validationSchema = yup.object({
        email: yup
            .string()
            .email("Digite um Email valido")
            .required("Digite seu Email"),
        password: yup
            .string()
            .min(8, "Senha deve ter no minimo 8 caracteres")
            .required("Digite sua senha"),
        passwordConfirmation: yup
            .string()  
            .oneOf([yup.ref('password')], 'Passwords must match')
            .required('Password confirmation is required')
    });

    return (
        <Formik
            initialValues={{ email: "", password: "", passwordConfirmation: "" }}
            validationSchema={validationSchema}
        >
            <BodyForm style={{ backgroundImage: `url(${sign})` }}>
                <FormSignUp>
                    <Form>
                        <div>
                            <Field type="name" name="name" placeholder="Nome" />
                        </div>
                        <div>
                            <Field type="cpf" name="cpf" placeholder="CPF" />
                        </div>
                        <div>
                            <Field type="email" name="email" placeholder="Email" />
                            <DivError>
                                <ErrorMessage component="div" name="email" />
                            </DivError>
                        </div>

                        <div>
                            <Field type="password" name="password" placeholder="Password" />
                            <DivError>
                                <ErrorMessage component="div" name="password" />
                            </DivError>
                        </div>
                        <div>
                            <Field type="password" name="passwordConfirmation" placeholder="Confirme sua Senha" />
                            <DivError>
                                <ErrorMessage component="div" name="passwordConfirmation" />
                            </DivError>
                        </div>
                        <Button placeholder={FormStrings.register} />
                        <Link to={"/"} style={{ textDecoration: 'none' }} className="span">
                            <span>{FormStrings.goToLogin}</span>
                        </Link>
                    </Form>
                </FormSignUp>
            </BodyForm>
        </Formik>
    );
}
export default ExampleFormik;

const DivError = styled.div`
 margin-left: 25px;
`

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