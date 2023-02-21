import styled from "styled-components";

export default function Button(props){
    return <ButtonComponent>{props.placeholder}</ButtonComponent> 
}

const ButtonComponent = styled.button`

    width: 30%;
    height: 46px;
    background: #71C9CE;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    color: #FFFFFF;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;


    :hover{
        color: #FFFFFF;
        text-decoration: underline;
        cursor: pointer;
    }
`