class Scene3 extends Phaser.Scene {
    constructor() {
        super("gameOver");
    }

    create() {
        this.add.text(100, 100, "GAME OVER");
        //this.add.text(120, 150, this.score);
    }
}