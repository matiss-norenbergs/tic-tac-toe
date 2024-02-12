import { useCallback, useEffect, useState } from "react"

import { initGameState } from "helpers/constants"
import { isGameOver, getAutoTurn, getEmptyBoxes } from "helpers/basicHelper"

import Box from "components/box"
import Controls from "components/controls"

import styles from "./Content.module.css"

const Content = () => {
    const [isWinner, setIsWinner] = useState(false)
    const [isEnd, setIsEnd] = useState(false)
    const [gameState, setGameState] = useState(initGameState)
    const [autoGame, setAutoGame] = useState(true)

    const handleControlCallback = useCallback((action) => {
        switch (action) {
            case "reset":
                setIsWinner(false)
                setIsEnd(false)
                setGameState({
                    boxState: [
                        [undefined, undefined, undefined],
                        [undefined, undefined, undefined],
                        [undefined, undefined, undefined]
                    ],
                    player: true
                })
                break
            case "auto":
                setAutoGame(prevState => !prevState)
                break
            default:
                return
        }
    }, [])

    const handleBoxSelected = useCallback((boxCoord) => {
        setGameState(prevState => {
            const newGameState = Object.assign({}, prevState)

            newGameState.boxState[boxCoord[0]][boxCoord[1]] = prevState.player
            newGameState.player = !prevState.player

            return newGameState
        })
    }, [])

    const handleBoxClick = useCallback(({ target: { id } }) => {
        if (isEnd || isWinner)
            return

        const boxCoord = JSON.parse(id)

        handleBoxSelected(boxCoord)
    }, [isEnd, isWinner, handleBoxSelected])

    useEffect(() => {
        const { boxState, player } = gameState

        const noEmptyBoxes = getEmptyBoxes(boxState).length === 0
        const gameOver = isGameOver(boxState)

        if (gameOver || noEmptyBoxes) {
            if (noEmptyBoxes)
                setIsEnd(true)

            if (gameOver)
                setIsWinner(true)

            return
        } else if (autoGame) {
            if (!gameState.player) {
                const { x, y } = getAutoTurn(boxState, player)
                handleBoxSelected([x, y])
            }
        }
    }, [autoGame, gameState, handleBoxSelected])

    return (
        <>
            <Controls
                onControlClick={handleControlCallback}
                auto={autoGame}
            />
            <main className={styles["content-wrapper"]}>
                <div
                    className={styles["content-container"]}
                    iswinner={String(isWinner)}
                    isend={String(isEnd)}
                    player={String(gameState.player)}
                    winner={String(!gameState.player)}
                >
                    {gameState.boxState.map((row, rIndex) => row.map((col, cIndex) => (
                        <Box
                            key={rIndex + cIndex}
                            id={JSON.stringify([rIndex, cIndex])}
                            ticked={col}
                            onClick={handleBoxClick}
                        />
                    )))}
                </div>
            </main>
        </>
    )
}

export default Content