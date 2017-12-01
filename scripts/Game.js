class Game {

    constructor() {
        this.initializeStartPhase();
    };

    initializeStartPhase() {
        this.phase = GamePhase.START;
        this.numberOfStickmans = 0;
        this.player1Stickmans = [];
        this.player2Stickmans = [];
        this.shoots = [];
    };

    processMouseClick(x, y) {
        switch(this.phase) {
            case GamePhase.START:
                this.placeStickman(x, y);
                break;
            case GamePhase.PLAY:
                this.shoot(x, y);
                break;
            case GamePhase.END:
                break;
        }
    };

    placeStickman(x, y) {
        if(this.numberOfStickmans < MAXIMUM_STICKMANS_PER_PLAYER) {
            this.player1Stickmans.push(new Stickman(x, y, 16, 30, 'red'));
        } else {
            this.player2Stickmans.push(new Stickman(x, y, 16, 30, 'blue'));
        }
        this.numberOfStickmans++;
        if(this.numberOfStickmans === MAXIMUM_STICKMANS_PER_PLAYER * 2) {
            this.phase = GamePhase.PLAY;
        }
    };

    shoot(x, y) {
        var xm = X_WORLD_SIZE - x;
        this.shoots.push(new Shoot(xm, y));
        for(var i = 0; i < this.player1Stickmans.length; i++) {
            if(this.player1Stickmans[i].injured(xm, y)) {
                this.player1Stickmans[i].kill();
            }
        }
        for(var i = 0; i < this.player2Stickmans.length; i++) {
            if(this.player2Stickmans[i].injured(xm, y)) {
                this.player2Stickmans[i].kill();
            }
        }
    }

    draw(context) {
        for(var i = 0; i < this.player1Stickmans.length; i++) {
            this.player1Stickmans[i].draw(context);
        }
        for(var i = 0; i < this.player2Stickmans.length; i++) {
            this.player2Stickmans[i].draw(context);
        }
        for(var i = 0; i < this.shoots.length; i++) {
            this.shoots[i].draw(context);
        }
    };

}