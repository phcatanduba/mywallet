import SignUpLinkStrings from "./SignUpLinkStrings";
import "./SignUpLink.css"

function SignUpLink() {
    return (
        <div className="signup-container">
            <div>{SignUpLinkStrings.text}</div>
            <a>{SignUpLinkStrings.link}</a>
        </div>
    )
}

export default SignUpLink;