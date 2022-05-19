class main extends Phaser.Scene {
    constructor() {
        super("main");
    }
    preload() {
         // animation of main_av

         this.anims.create({
            key: "main_av",
            frameRate: 30,
            frames: this.anims.generateFrameNames("main_av", {
                //prefix: "-",
                suffix: ".png",
                start: 1,
                end: 97,
                //zeroPad: 2
            }),
            repeat: -1
        });
    }
    create() {
        // theme main
        this.add.image(config.width/2,config.height/2,"main_bg");
        
        this.add.image(config.width/2,config.height/2,"main_file");
        for(let i = 0 ; i < 5 ; i ++) {
            this.add.image(0+(200*i),config.height,"main_tree_1");
        }
        this.add.image(100,200,"main_pin");
        // add theme main => form
        this.add.image(config.width/2,200,"input");
        this.add.image(config.width/2,300,"input_2");
        this.add.image(config.width/2,400,"btn_main");
        let main_av = this.add.sprite(config.width/2,100,"main_av");
        main_av.anims.play("main_av",true);
        // 
        this.username = this.add.dom(config.width/2,200).createFromCache("login").setOrigin(0.5);
        
    }
}