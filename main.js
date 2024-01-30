function $(id){
    return document.getElementById(id);
}
//========================================================
var stage = $('stage');
var DefaultBackground = 'images/默认-R.png';
var w = 1440;
var h = 720;
var charSrc = 'images/FM.png';
var charW = 80;
var charH = 160;
var charZ = 10;
var charX = 0;
var charY = 0;
var charS = 1;
var shadowX = -5
var shadowY = 5
var shadowO = 1
var shadowA = 0.5
var shadowRGB = [0,0,0]
//========================================================
main()

function main(){
    stage.style.backgroundImage = 'url(\''+DefaultBackground+'\')';
    stage.style.width = w + 'px';
    stage.style.height = h + 'px';

    let char = document.createElement('div');
    char.id = '_char_';
    char.style.backgroundImage = 'url('+charSrc+')';
    char.style.backgroundRepeat = 'no-repeat';
    char.style.width = charW + 'px';
    char.style.height = charH + 'px';
    char.style.overflow = 'hidden';
    char.style.willChange = 'transform';
    char.style.zIndex = '\''+charZ + '\'';
    char.style.position = 'absolute';
    char.style.top = h - charH + charY + 'px';
    char.style.left = (w - charW)/2 + charX + 'px';
    char.style.transform = 'scale(' + charS + ')';
    char.style.filter = 'drop-shadow('+shadowX+'px '+shadowY+'px '+shadowO+'px rgba('+
        shadowRGB[0]+', '+shadowRGB[1]+', '+shadowRGB[2]+', '+shadowA+'))';


    stage.appendChild(char);

}
