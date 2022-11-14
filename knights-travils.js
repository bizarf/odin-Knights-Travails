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

function knightMoves(start, goal, route = []) {
    if (start[0] < 0 || start[0] > 7 || start[1] < 0 || start[1] > 7) {
        return "err"
    }
    let legalMove = makeLegalMoves(start)

    if (board[goal[0]][goal[1]] === 1) return route
    legalMove.forEach(move => {
        if (board[move[0]][move[1]] === 0) {
            board[move[0]][move[1]] = 1
            route.push(move)
            knightMoves(move, goal, route)
        }
    })
    // console.log(board)    }
    return route
}

// console.log(board())
// console.log(makeLegalMoves([7, 0]))
let board = makeBoard()
console.log(knightMoves([7, 7], [7, 4]))