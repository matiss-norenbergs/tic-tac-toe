import PropTypes from "prop-types"
import { useCallback } from "react"

import Button from "../button/Button"
import MNIcon from "../mnIcon/MNIcon"

import styles from "./Controls.module.css"

const propTypes = {
    onControlClick: PropTypes.func.isRequired
}
const defaultProps = {}

const Controls = ({ onControlClick }) => {
    const onClick = useCallback((action) => () => {
        onControlClick(action)
    }, [onControlClick])

    return (
        <div className={styles["controls-wrapper"]}>
            <MNIcon />
            <div className={styles["controls-container"]}>
                <Button onClick={onClick("reset")}>
                    Reset
                </Button>
            </div>
        </div>
    )
}
Controls.propTypes = propTypes
Controls.defaultProps = defaultProps

export default Controls