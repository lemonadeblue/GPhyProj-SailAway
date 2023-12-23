/*****************************************************
 * Course : TGD2251 Game Physics
 * Session  : Trimester 1, 2023/24
 * ID and Name #1   : 
 * Contacts    #1   : 
 * ID and Name #2   : 
 * Contacts    #2   : 
 * ID and Name #3   : 
 * Contacts    #3   : 
*****************************************************/
// main code goes here

// configure the game layout
var config = {
    width: 700,
    height: 700,
    backgroundColor: 0x000000,
    scene: [BootScene, MenuScene],
    pixelArt: true,
    autoCenter: Phaser.Scale.CENTER_BOTH
}

// create a game instance
var game = new Phaser.Game(config);
