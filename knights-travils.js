class Node {
    // store the current position, and the route.
    constructor(position, route) {
        this.position = position
        this.route = route
    }
}

function knightMoves(start, goal) {
    if (start[0] < 0 || start[0] > 7 || start[1] < 0 || start[1] > 7) {
        return "Error. Please select numbers between 0 and 7"
    }

    let board = makeBoard()
    let queue = [new Node(start, [start])]

    while (queue.length > 0) {
        // marks the opening move with a 1 on the board
        board[start[0]][start[1]] = 1
        let currentMove = queue.shift()

        // generate legal moves
        const legalMove = makeLegalMoves(currentMove.position)

        // loop to go through each move
        for (const move of legalMove) {
            if (board[goal[0]][goal[1]] === 1) {
                console.log(`This will require ${queue[queue.length -1].route.length} moves to reach the goal. Here is the list of moves to the goal:`)
                queue[queue.length - 1].route.forEach(item => console.log(item))
                // stops undefined from appearing
                return ""
            }
            board[move[0]][move[1]] = 1
            // makes a new node containing the current move and the route it took to get there
            let node = new Node(move, currentMove.route.concat([move]))
            queue.push(node)
        }
    }
}

// makes two dimension array. fill the array with zeros
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

// converts provided position into moves that are within the board
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

    // calculate the new position and then filter moves that fall off the board
    let moves = possibleMoves.map(move => {
        let x = position[0] + move[0]
        let y = position[1] + move[1]
        return [x, y]
    }).filter(move => {
        return move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <= 7
    })

    return moves
}

// console.log(knightMoves([0, 0], [1, 2]))
// console.log(knightMoves([0, 0], [3, 3]))
console.log(knightMoves([3, 3], [0, 0]))