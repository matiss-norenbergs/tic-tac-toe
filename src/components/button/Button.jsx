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
    ]),
    active: PropTypes.bool
}
const defaultProps = {}

const Button = ({
    children,
    className,
    disabled,
    faIcon,
    active,
    ...rest
}) => {

    const buttonClassName = classNames(
        styles["button-wrapper"],
        {
            [styles["button-disabled"]]: disabled,
            [styles["button-active"]]: active
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
                    fixedWidth
                />
            )}
            {children}
        </button>
    )
}
Button.propTypes = propTypes
Button.defaultProps = defaultProps

const Group = ({ children }) => {
    return (
        <div className={styles["button-group-wapper"]}>
            {children}
        </div>
    )
}
Button.Group = Group

export default Button