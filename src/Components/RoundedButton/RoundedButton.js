import { Link } from 'react-router-dom';
import './RoundedButton.css'

function RoundedButton(props) {
    return (<Link to={props.link}>
                <button className={props.className} type={props.type} style={{textAlign: 'center'}} >
                    {props.child}
                </button>
             </Link>
    )
}

export default RoundedButton;