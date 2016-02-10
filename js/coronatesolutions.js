(function($){

    $(function(){
        console.log("DOM is ready");

        var canvas = document.getElementById('bouncingcanvas');
        var characters = initCharacters();

        drawCharacter(canvas, characters);
        bouncingCanvasAnimation(canvas, characters);
    });

    function initCharacters(){
        var characters = [];
        var yellow = '#FFC636';

        characters.push(new Character("C", 25, 80, "25px Comic Sans MS", yellow));
        characters.push(new Character("O", 50, 80, "25px Comic Sans MS", yellow));
        characters.push(new Character("R", 75, 80, "25px Comic Sans MS", yellow));
        characters.push(new Character("O", 100, 80, "25px Comic Sans MS", yellow));
        characters.push(new Character("N", 125, 80, "25px Comic Sans MS", yellow));
        characters.push(new Character("A", 150, 80, "25px Comic Sans MS", yellow));
        characters.push(new Character("T", 175, 80, "25px Comic Sans MS", yellow));
        characters.push(new Character("E", 200, 80, "25px Comic Sans MS", yellow));
        characters.push(new Character("S", 250, 80, "25px Comic Sans MS", yellow));
        characters.push(new Character("O", 275, 80, "25px Comic Sans MS", yellow));
        characters.push(new Character("L", 300, 80, "25px Comic Sans MS", yellow));
        characters.push(new Character("U", 325, 80, "25px Comic Sans MS", yellow));
        characters.push(new Character("T", 350, 80, "25px Comic Sans MS", yellow));
        characters.push(new Character("I", 375, 80, "25px Comic Sans MS", yellow));
        characters.push(new Character("O", 400, 80, "25px Comic Sans MS", yellow));
        characters.push(new Character("N", 425, 80, "25px Comic Sans MS", yellow));
        characters.push(new Character("S", 450, 80, "25px Comic Sans MS", yellow));

        return characters;
    }

    function Character(alphabet, x, y, font, color){
        this.alphabet = alphabet;
        this.x = x;
        this.y = y;
        this.font  = font;
        this.color = color;
    }

    function drawCharacter(canvas, characters){
        var context = canvas.getContext('2d');

        //Clear the context
        context.clearRect(0, 0, canvas.width, canvas.height);

        _.each(characters, function(character){
            context.font = character.font;
            context.fillStyle = character.color;
            context.fillText(character.alphabet, character.x, character.y);
        });
    }

    function bouncingCanvasAnimation(canvas, characters){
        $(canvas).mouseover(function(){
            animationTimeInterval = setInterval(function(){animate(canvas, characters)}, 100);
        });

        $(canvas).mouseout(function(e){
            clearInterval(animationTimeInterval);
            drawCharacter(canvas, characters);
        });
    }

    function animate(canvas, characters){

        var context = canvas.getContext('2d');

        context.clearRect(0, 0, canvas.width, canvas.height);

        var vx = 5;
        var vy = 5;

        for(n=0; n< characters.length; n++){
            var randomX = getRandomInt(20, 470);
            var randomY = getRandomInt(40, 125);

            var character = characters[n];

            context.font = character.font;
            context.fillStyle = character.color;
            context.fillText(character.alphabet, randomX, randomY );
        }


    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getMousePositionOnCanvas(canvas, evt) {
        var canvasrect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - canvasrect.left,
            y: evt.clientY - canvasrect.top
        };
    }

})(jQuery);