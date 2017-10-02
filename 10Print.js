//10print project
//declaring var
var x = 0;
var y = 0;
var length = 8;
var num;

//function for drawing the pattern
var draw= function() {
    //generate random decimal between 0 and 1
    num = (random() * 2);
    //draw \
    if (num < 0.5) {
        line(x, y, length + x, length +y);
    }
    //draw /
    else if (num >= 0.5) {
        line(x, length + y, length + x, y);
    }
    //increase the x position
    x = x + length;
    //prevent pattern from going of screen; have x = 0 and y increase
    if(x >= 400) {
        x = 0;
        y = y + length;
    }
};
