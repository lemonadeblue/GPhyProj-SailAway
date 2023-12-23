class BootScene extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        console.warn("Loading assets...");
        this.load.path = "./assets/";
        
        // add images
        this.load.image([
            // Menu
            { key: "logo", url:"logo.png" },
            { key: "play", url: "playbtn.png"},
            { key: "help", url: "helpbtn.png"},
            { key: "credits", url:"credsbtn.png" },
            { key: "background", url:"Background.png" }
        ]);

        // add audios
        this.load.audio([
            // Menu
            { key: "intro", url: "intro.mp3" }
        ]);
    }
    
    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("startGame");
    }
}