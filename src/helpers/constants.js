const appName = "MN-TIC-TAC-TOE"

const localStorageConstants = {
    isLightTheme: `${appName}-LIGHT-THEME`,
    selectedThemeColor: `${appName}-THEME-COLOR`
}

const initBoxState = {
    1: undefined,
    2: undefined,
    3: undefined,
    4: undefined,
    5: undefined,
    6: undefined,
    7: undefined,
    8: undefined,
    9: undefined
}

const winScenarios = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

const themeAccentColors = {
    "candy-red": {
        color: "--candy-red",
        colorRgb: "--candy-red-rgb",
        label: "Candy red"
    },
    "emerald-green": {
        color: "--emerald-green",
        colorRgb: "--emerald-green-rgb",
        label: "Emerald green"
    },
    "sapphire-blue": {
        color: "--sapphire-blue",
        colorRgb: "--sapphire-blue-rgb",
        label: "Sapphire blue"
    },
    "orange": {
        color: "--orange",
        colorRgb: "--orange-rgb",
        label: "Orange"
    }
}

const themeColors = {
    true: {
        "background": "--dark-gray",
        "background2": "--ligher-gray",
        "color": "--white"
    },
    false: {
        "background": "--white",
        "background2": "--light-gray",
        "color": "--dark-gray"
    }
}

export {
    localStorageConstants,
    initBoxState,
    winScenarios,
    themeAccentColors,
    themeColors
}