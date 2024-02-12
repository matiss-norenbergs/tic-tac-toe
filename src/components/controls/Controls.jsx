import PropTypes from "prop-types"
import { useCallback } from "react"

import Button from "../button"
import MNIcon from "../mnIcon"
import ThemeSwitch from "../themeSwitch"

import styles from "./Controls.module.css"

const propTypes = {
    onControlClick: PropTypes.func.isRequired,
    auto: PropTypes.bool
}
const defaultProps = {}

const Controls = ({
    onControlClick,
    auto
}) => {

    const onClick = useCallback((action) => () => {
        onControlClick(action)
    }, [onControlClick])

    return (
        <div className={styles["controls-wrapper"]}>
            <MNIcon />
            <div className={styles["controls-container"]}>
                <Button
                    onClick={onClick("reset")}
                    faIcon="rotate-right"
                >
                    Reset
                </Button>
                <Button
                    onClick={onClick("auto")}
                    faIcon="robot"
                    active={auto}
                >
                    Auto
                </Button>
            </div>
            <ThemeSwitch />
        </div>
    )
}
Controls.propTypes = propTypes
Controls.defaultProps = defaultProps

export default Controls