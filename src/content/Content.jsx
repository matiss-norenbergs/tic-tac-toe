import { useCallback, useState } from "react"

import { initBoxState } from "../helpers/constants"
import { checkIsWinner } from "../helpers/basicHelper"

import Box from "../components/box"
import Controls from "../components/controls"

import styles from "./Content.module.css"

const Content = () => {
    const [player, setPlayer] = useState(true)
    const [isWinner, setIsWinner] = useState(false)
    const [isEnd, setIsEnd] = useState(false)
    const [boxes, setBoxes] = useState(initBoxState)

    const handleControlCallback = useCallback((action) => {
        switch (action) {
            case "reset":
                setPlayer(true)
                setIsWinner(false)
                setIsEnd(false)
                setBoxes(initBoxState)
                break
            default:
                return
        }
    }, [])

    const handleBoxClick = useCallback(({ target: { id } }) => {
        if (isWinner || isEnd || typeof boxes[id] == "boolean")
            return

        setBoxes(prevState => {
            const newState = Object.assign({}, prevState)
            newState[id] = player
            
            const { isWinner, isEnd } = checkIsWinner(newState, player)
            if (isWinner)
                setIsWinner(true)
            else if (isEnd)
                setIsEnd(true)
            
            return newState
        })
        setPlayer(prevState => !prevState)
    }, [boxes, player, isWinner, isEnd])

    return (
        <>
            <Controls onControlClick={handleControlCallback} />
            <main className={styles["content-wrapper"]}>
                <div
                    className={styles["content-container"]}
                    iswinner={String(isWinner)}
                    isend={String(isEnd)}
                    player={String(player)}
                    winner={String(!player)}
                >
                    {Object.keys(boxes).map(key => (
                        <Box
                            key={key}
                            id={key}
                            ticked={boxes[key]}
                            onClick={handleBoxClick}
                        />
                    ))}
                </div>
            </main>
        </>
    )
}

export default Content