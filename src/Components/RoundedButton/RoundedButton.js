import './RoundedButton.css'

function RoundedButton(props) {
    return (
        <button className={props.className} type={props.type} style={{textAlign: 'center'}} >
            {props.child}
        </button>
    )
}

export default RoundedButton;