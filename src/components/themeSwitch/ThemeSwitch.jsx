import { useCallback, useEffect } from "react"

import { localStorageConstants, themeColors } from "../../helpers/constants"
import { getStyleProperty, setStyleProperty } from "../../helpers/styleHelper"

import Button from "../button"

import styles from "./ThemeSwitch.module.css"

const ThemeSwitch = () => {

    const handleThemeSwitch = useCallback((selectedTheme) => () => {
        if (!selectedTheme)
            return

        const { color, colorRgb } = themeColors[selectedTheme]
        const prop1 = getStyleProperty(color)
        const prop2 = getStyleProperty(colorRgb)

        setStyleProperty("--accent", prop1)
        setStyleProperty("--accent-rgb", prop2)

        localStorage.setItem(localStorageConstants.selectedTheme, selectedTheme)
    }, [])

    useEffect(() => {
        handleThemeSwitch(localStorage.getItem(localStorageConstants.selectedTheme))()
    }, [handleThemeSwitch])

    return (
        <div className={styles["theme-switch-wrapper"]}>
            <Button faIcon="cog" />
            <div className={styles["theme-switch-content"]}>
                {Object.keys(themeColors).map(color => (
                    <Button
                        key={color}
                        className={styles[color]}
                        faIcon="circle"
                        onClick={handleThemeSwitch(color)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ThemeSwitch