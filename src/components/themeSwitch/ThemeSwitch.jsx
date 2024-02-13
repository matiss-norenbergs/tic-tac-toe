import { useCallback, useEffect, useState } from "react"

import { localStorageConstants, themeAccentColors, themeColors } from "helpers/constants"
import { getStyleProperty, setStyleProperty } from "lib/helpers/domStyleHelper"

import Button from "../button"

import styles from "./ThemeSwitch.module.css"

const ThemeSwitch = () => {

    const [isDarkThemeActive, setIsDarkThemeActive] = useState(true)

    const handleThemeAccentSwitch = useCallback((selectedThemeColor) => () => {
        if (!selectedThemeColor)
            return

        const { color, colorRgb } = themeAccentColors[selectedThemeColor]
        const prop1 = getStyleProperty(color)
        const prop2 = getStyleProperty(colorRgb)

        setStyleProperty("--accent", prop1)
        setStyleProperty("--accent-rgb", prop2)

        localStorage.setItem(localStorageConstants.selectedThemeColor, selectedThemeColor)
    }, [])

    const handleThemeColorSwitch = useCallback(() => {
        setIsDarkThemeActive(prevState => {
            const isDarkTheme = !prevState
            const { background, background2, color } = themeColors[isDarkTheme]
            const prop1 = getStyleProperty(background)
            const prop2 = getStyleProperty(background2)
            const prop3 = getStyleProperty(color)

            setStyleProperty("--background", prop1)
            setStyleProperty("--background-2", prop2)
            setStyleProperty("--color", prop3)

            if (!isDarkTheme)
                localStorage.setItem(localStorageConstants.isLightTheme, false)
            else
                localStorage.removeItem(localStorageConstants.isLightTheme)

            return isDarkTheme
        })
    }, [])

    useEffect(() => {
        handleThemeAccentSwitch(localStorage.getItem(localStorageConstants.selectedThemeColor))()

        if (localStorage.getItem(localStorageConstants.isLightTheme))
            handleThemeColorSwitch()

    }, [handleThemeAccentSwitch, handleThemeColorSwitch])

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