class preload_scene extends Phaser.Scene {
    constructor() {
        super("preload_scene");
    }
    preload() {
        var progressBar = this.add.graphics();
            var progressBox = this.add.graphics();
            progressBox.fillStyle(0x222222, 0.8);
            progressBox.fillRect(240, 270, 320, 50);
            
            var width = this.cameras.main.width;
            var height = this.cameras.main.height;
            var loadingText = this.make.text({
                x: width / 2,
                y: height / 2 - 50,
                text: 'Loading...',
                style: {
                    font: '20px monospace',
                    fill: '#ffffff'
                }
            });
            loadingText.setOrigin(0.5, 0.5);
            
            var percentText = this.make.text({
                x: width / 2,
                y: height / 2 - 5,
                text: '0%',
                style: {
                    font: '18px monospace',
                    fill: '#ffffff'
                }
            });
            percentText.setOrigin(0.5, 0.5);
            
            var assetText = this.make.text({
                x: width / 2,
                y: height / 2 + 50,
                text: '',
                style: {
                    font: '18px monospace',
                    fill: '#ffffff'
                }
            });
            assetText.setOrigin(0.5, 0.5);
            
            this.load.on('progress', function (value) {
                percentText.setText(parseInt(value * 100) + '%');
                progressBar.clear();
                progressBar.fillStyle(0xffffff, 1);
                progressBar.fillRect(250, 280, 300 * value, 30);
            });
            
            this.load.on('fileprogress', function (file) {
                assetText.setText('Loading asset: ' + file.key);
            });
            this.load.on('complete', function () {
                progressBar.destroy();
                progressBox.destroy();
                loadingText.destroy();
                percentText.destroy();
                assetText.destroy();
            });

            // loading ...
            // atlas
            this.load.atlas("sara","public/assets/sprites/sara.png","public/assets/sprites/sara.json");
            this.load.atlas("main_av","public/assets/sprites/main_av.png","public/assets/sprites/main_av.json");
            // shapes
            this.load.svg("svg_loading","public/assets/shapes/3.svg");
            // main
            this.load.svg("main_bg","public/assets/shapes/1.svg");
            this.load.svg("main_file","public/assets/shapes/18.svg" , {scale : 3});
            this.load.svg("main_tree_1","public/assets/shapes/122.svg");
            this.load.svg("main_pin","public/assets/shapes/28.svg");
            this.load.image("input","public/assets/form/input.png");
            this.load.image("input_2","public/assets/form/input_2.png");
            this.load.image("btn_main","public/assets/form/btn.png");
            // form
            this.load.html("login","public/assets/form/login.html");
    }
    create() {
        this.scene.start("ui");
    }
} 