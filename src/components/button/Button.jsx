import PropTypes from "prop-types"
import classNames from "classnames"

import FaIcon from "../faIcon"

import styles from "./Button.module.css"

const propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    faIcon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ])
}
const defaultProps = {}

const Button = ({
    children,
    className,
    disabled,
    faIcon,
    ...rest
}) => {

    const buttonClassName = classNames(
        styles["button-wrapper"],
        {
            [styles["button-disabled"]]: disabled
        },
        className
    )

    return (
        <button
            {...rest}
            className={buttonClassName}
            disabled={disabled}
        >
            {faIcon && (
                <FaIcon
                    icon={faIcon}
                    padded={!!children}
                />
            )}
            {children}
        </button>
    )
}
Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button