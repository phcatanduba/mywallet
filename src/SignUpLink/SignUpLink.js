import SignUpLinkStrings from "./SignUpLinkStrings";
import "./SignUpLink.css"
import { Link } from "react-router-dom";

function SignUpLink() {
    return (
        <div className="signup-container">
            <div>{SignUpLinkStrings.text}</div>
            <Link to="/signup">{SignUpLinkStrings.link}</Link>
        </div>
    )
}

export default SignUpLink;