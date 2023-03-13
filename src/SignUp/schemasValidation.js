import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const schemasForm = yup.object().shape({
    name: yup
        .string()
        .matches(/^[A-Za-z ]*$/, "Preencha corretamente este campo")
        .required("Digite seu nome"),
    email: yup
        .string()
        .email("Preencha com um email valido")
        .required("Preencha seu email"),
    cpf: yup
        .number()
        .max(11, "Digite um CPF valido")
        .required("Preencha seu CPF"),
    password: yup
        .string()
        .min(5, "A senha deve ter no minimo 6 caracteres.")
        .matches(passwordRules, { message: "A senha deve ter Numero, e letras maiusculas e minusculas" })
        .required("Digite sua senha"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "As senhas devem ser iguais")
        .required("Confirme sua senha"),
});