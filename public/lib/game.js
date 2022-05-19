const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: "#206040",
    dom: {
        createContainer: true
    },
    scene: [
        preload_scene,
        ui,
        main
    ]
}
let game = new Phaser.Game(config);
let logo_preload;
let element;