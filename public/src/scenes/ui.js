class ui extends Phaser.Scene {
    constructor() {
        super("ui");
    }
    create() {
        this.cameras.main.setBackgroundColor(0x222)
        // Logo preloading
         logo_preload = this.add.sprite(config.width/2,(config.height/2)-200,"svg_loading")
        .setScale(.4);

        // lorem Text
        this.add.text(0,config.height/2,"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");
        this.add.text(0,(config.height/2)+20,"the industry's standard dummy text ever since the 1500s, when an unknown printer");
        this.add.text(0,(config.height/2)+40,"took a galley of type and scrambled it to make a type specimen book. It has survived");
        this.add.text(0,(config.height/2)+60,"not only five centuries, but also the leap into electronic typesetting, remaining");
        this.add.text(0,(config.height/2)+80," essentially unchanged. It was popularised in the 1960s with the release of Letraset");
        this.add.text(0,(config.height/2)+100," sheets containing Lorem Ipsum passages, and more recently with desktop publishing");
        this.add.text((config.width/2)-300,(config.height/2)+120,"software like Aldus PageMaker including versions of Lorem Ipsum.");

        // Start game
        setTimeout(() => {
            this.scene.start("main");
        },1000)
    }

    update() {
        logo_preload.rotation += .050;
    }
}