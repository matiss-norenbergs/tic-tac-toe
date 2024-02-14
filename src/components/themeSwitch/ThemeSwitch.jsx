import { useCallback, useEffect } from "react"

import { localStorageConstants, themeAccentColors } from "helpers/constants"
import { getStyleProperty, setStyleProperty } from "lib/helpers/domStyleHelper"

import Button from "../button"

import styles from "./ThemeSwitch.module.css"

const ThemeSwitch = () => {

    const handleThemeAccentSwitch = useCallback((selectedThemeColor) => () => {
        if (!selectedThemeColor)
            return

        const { color, colorRgb } = themeAccentColors[selectedThemeColor]
        const prop1 = getStyleProperty(color)
        const prop2 = getStyleProperty(colorRgb)

        setStyleProperty("--accent", prop1)
        setStyleProperty("--accent-rgb", prop2)

        localStorage.setItem(localStorageConstants.themeColor, selectedThemeColor)
    }, [])

    useEffect(() => {
        handleThemeAccentSwitch(localStorage.getItem(localStorageConstants.themeColor))()
    }, [handleThemeAccentSwitch])

    return (
        <div className={styles["theme-switch-wrapper"]}>
            <Button
                className={styles["theme-switch-button"]}
                faIcon="cog"
            />
            <div className={styles["theme-switch-content"]}>
                {Object.keys(themeAccentColors).map(color => (
                    <Button
                        key={color}
                        className={styles[color]}
                        faIcon="circle"
                        onClick={handleThemeAccentSwitch(color)}
                        label={themeAccentColors[color].label}
                    />
                ))}
            </div>
        </div>
    )
}

export default ThemeSwitch