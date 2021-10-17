import './Button.css'

/**
 * A Button Component
 *
 * @param props Includes:
 * <ul>
 *     <li><strong>buttonType</strong> - "submit", "button", etc.</li>
 *     <li><strong>buttonStyle</strong> - "primary", "outline", or "unstyled"</li>
 *     <li><strong>buttonText</strong> - text to be displayed on the button</li>
 *     <li><strong>onButtonClick</strong> - optional click function</li>
 * </ul>
 * @returns {JSX.Element}
 * @constructor
 */
function Button(props) {
    return (
        <div>
            <button
                type={props.buttonType}
                className={props.buttonStyle + "-button"}
                onClick={props.onButtonClick}
            >
                {props.buttonText}
            </button>
        </div>
    )
}

export default Button;
