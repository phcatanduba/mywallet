import './LoginInput.css'

function LoginInput(props) {
    return (
      <input type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
    );
}

export default LoginInput;