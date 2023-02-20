import LoginInput from "../../Components/LoginInput/LoginInput";
import RememberMe from "../RememberMe/RememberMe";
import "./Form.css"

function Form() {
    return(
        <div className="body">
            <div className="blur" />
            <form>
                <LoginInput placeholder={"Usuário"} type="name"/>
                <LoginInput placeholder={"Senha"} type="password"/>
                <div>
                    <RememberMe />
                    <ForgotPassword />
                </div>
            </form>
        </div>
    );
}

export default Form;