import { initBoxState, winScenarios } from "./constants"

const checkIsWinner = (boxState = initBoxState, player = false) => {
    const boxScenarios = []
    let row = []
    const columns = {
        1: [],
        2: [],
        3: []
    }
    const diognal = {
        1: [],
        2: []
    }
    let isEnd = true

    Object.keys(boxState).forEach(key => {
        let boxVal = 0
        let keyNum = Number(key)
        let isBool = typeof boxState[key] == "boolean"
        if (isBool && boxState[key] === player)
            boxVal = keyNum

        if (!isBool)
            isEnd = false
    
        row.push(boxVal)

        if ([3, 6, 9].includes(keyNum)) {
            boxScenarios.push(row.join(""))
            row = []
        }

        switch (keyNum) {
            case 1:
            case 4:
            case 7:
                columns[1].push(boxVal)
                break
            case 2:
            case 5:
            case 8:
                columns[2].push(boxVal)
                break
            default:
                columns[3].push(boxVal)
                break
        }

        switch (keyNum) {
            case 1:
            case 9:
                diognal[1].push(boxVal)
                break
            case 3:
            case 7:
                diognal[2].push(boxVal)
                break
            case 5:
                diognal[1].push(boxVal)
                diognal[2].push(boxVal)
                break
            default:
                break
        }
    })

    Object.keys(columns).forEach(key => {
        boxScenarios.push(columns[key].join(""))
    })

    Object.keys(diognal).forEach(key => {
        boxScenarios.push(diognal[key].join(""))
    })

    let isWinner = false
    winScenarios.forEach(winCase => {
        let winCaseStr = winCase.join("")
        if (boxScenarios.includes(winCaseStr))
            isWinner = true
    })

    return {
        isWinner,
        isEnd
    }
}

export {
    checkIsWinner
}