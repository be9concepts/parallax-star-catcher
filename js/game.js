var stars = [];
var player;
var text;
var background;
var pauseButton;
var gamePaused = false;

var score = 0;

function startGame() {
    myGameArea.create();
    text = new score_constructor(0,0,"hello");
    player = new bin_constructor(myGameArea.canvas.width/2 - 100,myGameArea.canvas.height - 100);
    background = new background_constructor(0-250,0+150);
    cactus = new background_constructor(60,275);
    cactus.image.src = 'assets/Cacti.png';
    cactus.width = 531;
    cactus.height = 121;
    cactus.speed = 1.6;
    sky = new background_constructor(60,0);
    sky.image.src = 'assets/Sky.png';
    sky.width = 630;
    sky.height = 209;
    sky.speed = .6;

    pauseButton = new pause_constructor(10,10);

}

var myGameArea = {
    canvas : document.createElement("canvas"),
    scene : "title",
    create : function() {
        this.canvas.width = 640;
        this.canvas.height = 480;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    start : function() {
        this.interval = setInterval(updateGameArea, 20);
    },
    pause : function(){
        clearInterval(this.interval);
    },
    
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

var star_frequecy = {
    current: 0,
    max: 100,
}
var titleCountIn = {
    current:0,
    max: 100
};
var loading = {
    text: "HTML5 & JavaScript",
    index: 0
}
function updateGameArea() {
    myGameArea.clear();

    if (myGameArea.scene == "title"){
        ctx = myGameArea.context;
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "#cccc43";
        ctx.textAlign = "center";
        if (loading.index < loading.text.length){
            loading.index++;
        }
        ctx.fillText(loading.text.substring(0,loading.index), myGameArea.canvas.width/2, myGameArea.canvas.height/2); 
        ctx.fillText('Made With', myGameArea.canvas.width/2, myGameArea.canvas.height/2 - 60); 
        ctx.restore();

        if (titleCountIn.current == titleCountIn.max){
            myGameArea.scene = 'game';
        }
        titleCountIn.current++;
    }

    if (myGameArea.scene == 'game'){

        sky.update();
        sky.move();

        background.update();
        background.move();

        cactus.update();
        cactus.move();


        if (star_frequecy.current < star_frequecy.max){
            star_frequecy.current++;
        }
        else {
            star_frequecy.current = 0;
            var random_y = Math.floor(Math.random() * (myGameArea.canvas.width - 32));
            var temp_star = new star_constructor(random_y,-32);
            stars.push(temp_star);
        }

        for (var i = 0; i < stars.length; i++) {
            if (stars[i].y < myGameArea.canvas.height){

            stars[i].fall();
            stars[i].update();
            }
            else {
                stars.splice(i, 1);
            }
        }

        for (var i = 0; i < stars.length; i++) {
            if (stars[i].x + stars[i].width/2 > player.x){
                if (stars[i].x < player.x + player.width){
                    if (stars[i].y + stars[i].height/2 > player.y){
                        if (stars[i].y < player.y + stars[i].height){
                            stars.splice(i, 1);
                            score+=10;
                        }
                    }
                }
            }
        }

        player.move();
        player.update();
        controller.direction = 'stable';
        text.update();
        pauseButton.update();
    }

}