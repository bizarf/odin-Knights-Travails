const makeBoard = () => {
    let board = []
    for (let i = 0; i < 8; i++) {
        board[i] = []
        for (let j = 0; j < 8; j++) {
            board[i][j] = 0
        }
    }
    return board
}

const makeLegalMoves = (position) => {
    const possibleMoves = [
        [1, 2],
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1],
        [-2, 1],
        [-1, 2]
    ]

    let moves = possibleMoves.map(move => {
        let x = position[0] + move[0]
        let y = position[1] + move[1]
        return [x, y]
    }).filter(move => {
        return move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <= 7
    })

    return moves
}

function knightMoves(start, goal) {
    let legalMove = makeLegalMoves(start)

    if (board[goal[0]][goal[1]] === 1) {
        return true
    } else {
        legalMove.forEach(move => {
            board[move[0]][move[1]] = 1
            knightMoves(move, goal)
        })
        console.log(board)
    }
    return "pop"
}

// console.log(board())
// console.log(makeLegalMoves([0, 0]))
let board = makeBoard()
console.log(knightMoves([0, 0], [2, 4]))