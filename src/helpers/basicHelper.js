const evaluteStep = (boxState) => {
	let score = 0

	if (isWinner(boxState, false))
		score = +1
	else if (isWinner(boxState, true))
		score = -1
	else
		score = 0

	return score
}

const isWinner = (boxState, player) => {
	const winState = [
		[boxState[0][0], boxState[0][1], boxState[0][2]],
		[boxState[1][0], boxState[1][1], boxState[1][2]],
		[boxState[2][0], boxState[2][1], boxState[2][2]],
		[boxState[0][0], boxState[1][0], boxState[2][0]],
		[boxState[0][1], boxState[1][1], boxState[2][1]],
		[boxState[0][2], boxState[1][2], boxState[2][2]],
		[boxState[0][0], boxState[1][1], boxState[2][2]],
		[boxState[2][0], boxState[1][1], boxState[0][2]]
	]

	for (let i = 0; i < 8; i++) {
		let line = winState[i]
		let filled = 0

		for (let j = 0; j < 3; j++) {
			if (line[j] === player)
				filled++
		}

		if (filled === 3)
			return true
	}

	return false
}

const isGameOver = (boxState) => isWinner(boxState, true) || isWinner(boxState, false)

const getEmptyBoxes = (boxState) => {
	const boxes = []

	for (var x = 0; x < 3; x++) {
		for (var y = 0; y < 3; y++) {
			if (boxState[x][y] === undefined)
                boxes.push([x, y])
		}
	}

	return boxes
}

const miniMax = (boxState, depth, player) => {
    let best = !player ? [-1, -1, -1000] : [-1, -1, +1000]

    if (depth === 0 || isGameOver(boxState)) {
        let score = evaluteStep(boxState)
        return [-1, -1, score]
    }

    getEmptyBoxes(boxState).forEach(box => {
        let x = box[0]
        let y = box[1]

        boxState[x][y] = player

        let score = miniMax(boxState, depth - 1, !player)

        boxState[x][y] = undefined
        
        score[0] = x
        score[1] = y

        if (!player) {
            if (score[2] > best[2])
				best = score
		}
		else {
			if (score[2] < best[2])
				best = score
		}
    })

    return best
}

const getAutoTurn = (boxState, player) => {
    const emptyBoxes = getEmptyBoxes(boxState)

    let x, y

    if (emptyBoxes.length === 9) {
        x = parseInt(Math.random() * 3)
		y = parseInt(Math.random() * 3)
    } else {
        const move = miniMax(boxState, emptyBoxes.length, player)
		x = move[0]
		y = move[1]
    }

    return {
        x,
        y,
        player
    }
}

export {
    getAutoTurn,
    isGameOver,
    getEmptyBoxes
}