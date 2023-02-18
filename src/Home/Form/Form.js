import LoginInput from "../../Components/LoginInput/LoginInput";
import "./Form.css"

function Form() {
    return(
        <div className="body">
            <div className="blur" />
            <form>
                <LoginInput placeholder={"Usuário"} type="name"/>
                <LoginInput placeholder={"Senha"} type="password"/>
            </form>
        </div>
    );
}

export default Form;