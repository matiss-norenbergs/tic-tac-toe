import PropTypes from "prop-types"

import styles from "./Button.module.css"

const propTypes = {
    children: PropTypes.any
}
const defaultProps = {}

const Button = ({
    children,
    ...rest
}) => {
    return (
        <button
            {...rest}
            className={styles["button-wrapper"]}
        >
            {children}
        </button>
    )
}
Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button