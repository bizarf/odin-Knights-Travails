class Node {
    // store the current position, and the next position. Can be used for adjacency list?
    constructor() {
        this.position = []
        this.next = []
        this.adjacencyList = new Map()
    }

    knightMoves(start, goal, route = [], queue = [start]) {
        if (start[0] < 0 || start[0] > 7 || start[1] < 0 || start[1] > 7) {
            return "err"
        }
        let board = makeBoard()
        // board[start[0]][start[1]] = 1
        // // console.log(board[goal[0]][goal[1]])
        // // route.push(start)

        // let legalMove = makeLegalMoves(start)

        // if (board[goal[0]][goal[1]] === 1) return
        // if (start[0] === goal[0] && start[1] === goal[1]) return
        // legalMove.forEach(move => {
        //     if (board[goal[0]][goal[1]] === 1) {
        //         return
        //     } else if (board[move[0]][move[1]] === 0) {
        //         knightMoves(move, goal, route, queue)
        //     }
        // })

        while (queue.length > 0) {
            board[start[0]][start[1]] = 1
            let currentMove = queue.shift()
            // route.push(currentMove)
            if (currentMove[0] === goal[0] && currentMove[1] === goal[1]) {
                // route.push(currentMove)
                break
            };

            const legalMove = makeLegalMoves(currentMove)
            legalMove.forEach(move => {
                if (board[goal[0]][goal[1]] === 1) return
                board[move[0]][move[1]] = 1
                // this.position.push(`${currentMove}`)
                // this.next.push(
                //     [`${currentMove}`, `${move}`]
                // )
                this.position.push(currentMove)
                this.next.push([currentMove, move])
                // this.position.push(`[${currentMove[0]}, ${currentMove[1]}]`)
                // this.next.push([`[${currentMove[0]}, ${currentMove[1]}]`, `[${move[0]}, ${move[1]}]`])
                queue.push(move)
            })
        }
        // console.log(this)
        // return route
        this.makeAdjacencyList(this.position, this.next, start, goal)
    }

    makeAdjacencyList(key, list, start, goal) {
        key.forEach(item => this.adjacencyList.set(item, []))
        list.forEach(paths => this.addEdge(...paths))
        // list.forEach(paths => console.log(...paths))
        console.log(this.adjacencyList)
        // this.bfs(start, goal)
        // this.dfs(start, goal)
        // console.log(this)
    }

    mapSet() {

    }

    addEdge(origin, destination) {
        console.log(origin)
        console.log(destination)
        this.adjacencyList.get(origin).push(destination);
        // this.adjacencyList.get(destination).push(origin);
    }

    bfs(start, goal) {
        const visited = new Set()
        const queue = [start]

        while (queue.length > 0) {
            const key = queue.shift();
            const paths = this.adjacencyList.get(key)

            for (const path of paths) {

                // if (path === goal) {
                //     console.log("yes")
                // }

                if (!visited.has(path)) {
                    visited.add(path);
                    // queue.push(path)
                    // queue.push(1)
                }
            }
        }
    }

    dfs(start, goal, visited = new Set()) {
        console.log(start)

        visited.add(start)

        const moves = this.adjacencyList.get(start)

        for (const move of moves) {
            if (move === goal) {
                console.log("GG")
                return
            }

            if (!visited.has(move)) {
                this.dfs(move, goal, visited)
            }
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

// makes converts provided position into moves that are within the board
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

// console.log(board())
// console.log(makeLegalMoves([7, 0]))
let node = new Node()
// let board = node.makeBoard()
// console.log(board)
// console.log(node.knightMoves([0, 0], [1, 2]))
console.log(node.knightMoves([0, 0], [3, 3]))
// console.log(node.knightMoves([3, 3], [0, 0]))
// console.log(knightMoves([0, 0], [1, 2]))
// console.log(knightMoves([0, 0], [3, 3]))
// console.log(knightMoves([3, 3], [0, 0]))