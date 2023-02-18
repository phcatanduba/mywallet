import './RoundedButton.css'

function RoundedButton(props) {
    return (
        <button className='RoundedButton'>
            {props.text}
        </button>
    )
}

export default RoundedButton;