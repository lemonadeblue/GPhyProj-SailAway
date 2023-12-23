class MenuScene extends Phaser.Scene {
    constructor() {
        super("startGame");
    }
    
    create() {
        // set menu soundtrack
        /*this.soundtrack = this.sound.add("intro");
        this.soundtrack.loop = true;
        this.soundtrack.volume = 0.3;
        this.soundtrack.play();
        */

        // set background
        this.background = this.add.tileSprite(0,0,config.width, config.height, "background");
        this.background.setOrigin(0,0); // can use to specify offset or rotation pivot
        this.background.alpha = 0.7;    // toggle opacity
        
        // set logo and button options
        this.logo = this.add.image(config.width/2+10, config.height/2 - 150, "logo");
        this.logo.setScale(7);
        this.playbtn = this.add.image(config.width/2, config.height/2 + 50, "play");
        this.playbtn.setScale(4);
        this.helpbtn = this.add.image(config.width/2, config.height/2 + 150, "help");
        this.helpbtn.setScale(4);
        this.credsbtn = this.add.image(config.width/2, config.height/2 + 250, "credits");
        this.credsbtn.setScale(4);

        this.add.text(config.width/2, config.height-25, "Developed by Batrisya, KiKi, Chew")

    }

    update() {
        this.background.tilePositionX += 0.3;
    }
}