const appName = "MN-TIC-TAC-TOE"

const localStorageConstants = {
    themeColor: `${appName}-THEME-COLOR`
}

const initGameState = {
    boxState: [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
    ],
    player: true
}

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

export {
    localStorageConstants,
    initGameState,
    themeAccentColors
}