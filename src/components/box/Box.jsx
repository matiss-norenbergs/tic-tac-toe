import PropTypes from "prop-types"
import classNames from "classnames"

import styles from "./Box.module.css"

const propTypes = {
    ticked: PropTypes.bool,
    onClick: PropTypes.func.isRequired
}
const defaultProps = {}

const Box = ({
    id,
    ticked,
    onClick
}) => {
    const isBoolean = typeof ticked == "boolean"

    return (
        <span className={styles["box-outer"]}>
            <div
                id={id}
                className={classNames(
                    styles["box-wrapper"],
                    {
                        [styles[!!ticked ? "mark-x" : "mark-circle"]]: isBoolean
                    }
                )}
                onClick={isBoolean ? null : onClick}
            />
        </span>
    )
}
Box.propTypes = propTypes
Box.defaultProps = defaultProps

export default Box