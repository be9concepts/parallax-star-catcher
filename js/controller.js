var controller = {
    direction: 'stable'
}

window.addEventListener('keydown', function(event) {
switch (event.keyCode) {
    case 37: // Left
    controller.direction = 'left';
    if (player.x < 0 - player.width/2){
        controller.direction = 'stable';
    }
    break;

    case 39: // Right
    controller.direction = 'right';
    if (player.x > 640 - player.width/2){
        controller.direction = 'stable';
    }
    break;
}
}, false);

window.addEventListener('mousedown', function (e) {

var offset = {
    left: myGameArea.canvas.offsetLeft,         
    top: myGameArea.canvas.offsetTop            
};
var mousePosition = {
    x: e.clientX - offset.left,
    y: e.clientY - offset.top
};

    if (mousePosition.x > pauseButton.x){
        if (mousePosition.x < pauseButton.x + pauseButton.width){
            if (mousePosition.y > pauseButton.y){
                if (mousePosition.y < pauseButton.y + pauseButton.height){
                    if (!gamePaused){
                        gamePaused = true;
                        myGameArea.pause();
                        updateGameArea();
                    }
                    else {
                        gamePaused = false;
                        myGameArea.start();
                    }
                }
            }
        }
    }

});