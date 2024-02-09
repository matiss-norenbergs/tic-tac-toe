import PropTypes from "prop-types"
import classNames from "classnames"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "./FaIcon.module.css"

const propTypes = {
    className: PropTypes.string,
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),
    fixedWidth: PropTypes.bool,
    padded: PropTypes.bool
}
const defaultProps = {
    fixedWidth: false,
    padded: false
}

const FaIcon = ({
    className,
    icon,
    padded,
    ...rest
}) => {

    const faClassName = classNames(
        styles["fa-icon-wrapper"],
        {
            [styles["fa-icon-padded"]]: padded
        },
        className
    )
    
    return (
        <FontAwesomeIcon
            className={faClassName}
            icon={icon}
            {...rest}
        />
    )
}
FaIcon.propTypes = propTypes
FaIcon.defaultProps = defaultProps

export default FaIcon