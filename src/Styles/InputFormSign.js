import styled from "styled-components";

export default function Input(props){
    const {type, placeholder, value} = props

    return <InputComponent type={type} placeholder={placeholder}  value={value}/> 
}

const InputComponent = styled.input`
    width: 30%;
    height: 58px;
    background: #FFFFFF;
    border-radius: 10px;
    margin-bottom: 13px;
    border: none;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    padding-left: 15px;
`