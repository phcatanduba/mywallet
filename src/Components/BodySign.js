import React from 'react';
import styled from 'styled-components';
import Sign from '../App/Images/sign.png'
import FormSign from './FormSign';

function BodySign() {
    return (
        <>
            <Teste>
                <img className="Sign" src={Sign} alt="Sign" />
            </Teste>
            <FormSign />
        </>
    );
}

export default BodySign;

const Teste = styled.div`
    img { 
        width: 100%;
    height: 78.5vh;
    background-color: #000;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 
        }

        .Sign {
    background: rgba(50, 50, 50, 0.7);
    backdrop-filter: blur(2px); 
    height: 78.5vh;
    width: 100%;
  }   
`; 