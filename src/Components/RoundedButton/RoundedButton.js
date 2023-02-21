import './RoundedButton.css'

function RoundedButton(props) {
    return (
        <button className={props.className}>
            {props.text}
        </button>
    )
}

export default RoundedButton;