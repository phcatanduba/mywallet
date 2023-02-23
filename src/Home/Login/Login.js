import styled from "styled-components";
import Header from "../Common/Header/Header";
import Form from "../Form/Form";

function Login() {
  return (
    <BodyLogin>
      <Header />
      <Form />
    </BodyLogin>
  );
}

export default Login;

const BodyLogin = styled.div`
  position: relative;
`