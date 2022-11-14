class Chess {
    constructor() {
        this.board = []
        this.makeBoard()
    }

    makeBoard() {
        for (let i = 0; i < 8; i++) {
            this.board[i] = [];
        }
    }

    addMove = (x, y, level) => {
        if (x >= 0 && x <= 7 && y >= 0 && y <= 7 && this.board[x][y] == null) {
            this.board[x][y] = level;
        }
    };

    addAllMoves = (x, y, level) => {
        this.addMove(x + 1, y + 2, level);
        this.addMove(x + 2, y + 1, level);
        this.addMove(x + 2, y - 1, level);
        this.addMove(x + 1, y - 2, level);
        this.addMove(x - 1, y - 2, level);
        this.addMove(x - 2, y - 1, level);
        this.addMove(x - 2, y + 1, level);
        this.addMove(x - 1, y + 2, level);
    };

    addAllPossible = (level) => {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (this.board[i][j] === level) {
                    this.addAllMoves(i, j, level + 1);
                }
            }
        }
    };

    findPath = (start, end) => {
        const startX = start[0]
        const startY = start[1]
        const endX = end[0]
        const endY = end[1]

        this.addMove(startX, startY, 0);
        let index = 0;
        do {
            this.addAllPossible(index++);
        }
        while (this.board[endX][endY] == null);
        return this.board[endX][endY];
    };
}

const game = new Chess;
console.log(game.findPath([3, 3], [2, 1]));