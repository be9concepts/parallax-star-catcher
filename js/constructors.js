function score_constructor(x,y,text){
    this.x = x;
    this.y = y;
    this.text = text;
    this.width = 0;
    this.height = 0;
    this.opcaity = 0;
    this.color = 0;

    this.update = function(){
        ctx = myGameArea.context;
        ctx.save();
        ctx.globalAlpha = this.opacity/3;
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "white";
        ctx.textAlign = "right";
        this.text = "Score: "+score;
        ctx.fillText(this.text,1+ myGameArea.canvas.width - 20, 1+45); 
        ctx.restore();
        ctx = myGameArea.context;
        ctx.save();
        ctx.globalAlpha = this.opacity/3;
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "white";
        ctx.textAlign = "right";
        this.text = "Score: "+score;
        ctx.fillText(this.text,-1+ myGameArea.canvas.width - 20, -1+45); 
        ctx.restore();
        ctx = myGameArea.context;
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "#cccc43";
        ctx.textAlign = "right";
        this.text = "Score: "+score;
        ctx.fillText(this.text, myGameArea.canvas.width - 20, +45); 
        ctx.restore();
    }
}
function pause_constructor(x,y){
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 32;
    this.opcaity = 0;
    this.image = new Image();
    this.image.src = 'assets/play.png';

    this.update = function(){

        if (gamePaused){
            this.image.src = 'assets/play.png';
        }
        else {
            this.image.src = 'assets/pause.png';
        }

        ctx = myGameArea.context;
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(this.image, 
        this.x, 
        this.y,
        this.width, this.height);
        ctx.restore();
    }

    this.changeImage = function(image){
        this.image.src = image;
    }
}


function star_constructor(x, y){
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 32;
    this.opacity = 1;
    this.image = new Image();
    this.image.src = "assets/Prize.png";
    this.speed = 1;

    this.update = function(){
        ctx = myGameArea.context;
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(this.image, 
        this.x, 
        this.y,
        this.width, this.height);
        ctx.restore();
    }

    this.fall = function(){
        this.y += this.speed;
    }

    this.collideWithBin = function(){
        return true;
    }

}
function bin_constructor(x, y){
    this.x = x;
    this.y = y;
    this.width = 113;
    this.height = 53;
    this.opacity = 1;
    this.image = new Image();
    this.image.src = "assets/Cart.png";
    this.speed = 3;

    this.update = function(){
        ctx = myGameArea.context;
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(this.image, 
        this.x, 
        this.y,
        this.width, this.height);
        ctx.restore();
    }

    this.move = function(){
        if (controller.direction == 'left'){
            this.x += -this.speed;
        }
        else if (controller.direction == 'right'){
            this.x += this.speed;
        }
    }

}
function background_constructor(x, y){
    this.x = x;
    this.y = y;
    this.width = 1200;
    this.height = 382;
    this.opacity = 1;
    this.image = new Image();
    this.image.src = "assets/Ground.png";
    this.speed = 1;

    this.update = function(){
        ctx = myGameArea.context;
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(this.image, 
        this.x, 
        this.y,
        this.width, this.height);
        ctx.restore();
    }  

    this.move = function(){
        if (controller.direction == 'left'){
            this.x += -this.speed;
        }
        else if (controller.direction == 'right'){
            this.x += this.speed;
        }
    }

}

function cursor_constructor(x, y){
    this.x = x;
    this.y = y;
    this.width = 15;
    this.height = 15;

    this.update = function(){
        ctx = myGameArea.context;
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.stroke();

    }
}
