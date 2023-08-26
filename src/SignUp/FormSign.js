import { Link } from 'react-router-dom';
import { useState } from 'react';
import styled from "styled-components";
import sign from '../App/Images/sign.png';
import Button from "../SignUp/ButtonFormSign";
import FormStrings from './StringsSignUp';
import { useFormik } from "formik";
import { schemasForm } from "./schemasValidation";
import { auth } from '../App/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { TailSpin } from 'react-loader-spinner';

function FormSignUp() {
    const buttonText = FormStrings.register
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
    

    const onSubmit = async (values, actions) => {
        setChild(spinner)
        try {
            await createUserWithEmailAndPassword(auth, values.email, values.password);
            setChild(buttonText)
            alert("Usuário registrado com sucesso!");
          } catch (err) {
            setChild(buttonText)
            console.log(err.message);
          }
        actions.resetForm();
    };
    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
            name: "",
            email: "",
            cpf: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: schemasForm,
        onSubmit,
    });

    return (
        <BodyForm onSubmit={handleSubmit} autoComplete="off" style={{ backgroundImage: `url(${sign})` }}>
            <StyleFormSignUp>
                <input value={values.name} onChange={handleChange} id="name" type="name"
                    placeholder={FormStrings.name}
                    onBlur={handleBlur}
                    className={errors.name && touched.name ? "input-error" : ""}
                />
                {errors.name && touched.name && <p className="error">{errors.name}</p>}

                <input value={values.cpf} onChange={handleChange} id="cpf" type="cpf"
                    placeholder={FormStrings.cpf}
                    onBlur={handleBlur}
                    className={errors.cpf && touched.cpf ? "input-error" : ""}
                />
                {errors.cpf && touched.cpf && <p className="error">{errors.cpf}</p>}

                <input value={values.email} onChange={handleChange} id="email" type="email"
                    placeholder={FormStrings.email}
                    onBlur={handleBlur}
                    className={errors.email && touched.email ? "input-error" : ""}
                />
                {errors.email && touched.email && <p className="error">{errors.email}</p>}

                <input
                    id="password"
                    type="password"
                    placeholder={FormStrings.password}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password ? "input-error" : ""}
                />
                {errors.password && touched.password && (
                    <p className="error">{errors.password}</p>
                )}

                <input
                    id="confirmPassword"
                    type="password"
                    placeholder={FormStrings.confirmPassword}
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={ errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                    <p className="error">{errors.confirmPassword}</p>
                )}

                <Button type="submit" child={child} />
                <Link to={"/"} style={{ textDecoration: 'none' }} className="span">
                    <span>{FormStrings.goToLogin}</span>
                </Link>
            </StyleFormSignUp>
        </BodyForm>
    );
}
export default FormSignUp;

const BodyForm = styled.form`
    width: 100%;
    height: 100vh;
    background-color: #000;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 100px;
    margin-top: 200px
`

const StyleFormSignUp = styled.div`
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
    .error {
    color: #fc8181;
    justify-content:start;
    font-size: 0.75rem;
    text-align: left;
    margin-top: 0.25rem;
    }
    .p{
        justify-content:start;
    }

    input.input-error,
    select.input-error {
        border-color: #fc8181;
    }

    input,
    select {
        width: 30%;
        height: 63px;
        padding-left: 30px;
        margin: 20px;
        font-size: 16px;
        color: black;
        border: 2px solid #FFFFFF;
        background: #FFFFFF;
        border-radius: 10px;
        outline: none;
    }

    input:focus,
    select:focus {
        border-color: #4299e1;
    }

    input::placeholder,
    select::placeholder {
        color: #000;
    }

    button:disabled {
    opacity: 0.35;
    }
`