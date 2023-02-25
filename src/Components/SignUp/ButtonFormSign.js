import styled from "styled-components";

export default function Button(props){
    return <ButtonComponent>{props.placeholder}</ButtonComponent> 
}

const ButtonComponent = styled.button`

    width: 30%;
    height: 63px;
    background: #71C9CE;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    margin-top: 40px;


    :hover{
        color: #FFFFFF;
        text-decoration: underline;
        cursor: pointer;
    }
`