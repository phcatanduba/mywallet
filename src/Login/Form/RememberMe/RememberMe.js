import FormStrings from "../Strings";
import "./RememberMe.css"

function RememberMe() {
    return (
        <div className="remember-me">
            <input className="checkbox" type="checkbox" id="checkbox" value={true} />
            <label for="checkbox">{FormStrings.rememberMe}</label>
        </div>
    );
}

export default RememberMe;

