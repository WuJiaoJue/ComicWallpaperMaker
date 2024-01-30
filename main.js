/**
 * 定义 $ 函数，用于获取 HTML 元素的引用
 * @param id
 * @returns {HTMLElement}
 */
function $(id){
    return document.getElementById(id);
}
//========================================================
var stage = $('stage');

// 定义默认背景图片的路径
var DefaultBackground = 'images/默认-R.png';

// 定义舞台的宽度和高度
var w = 1440;
var h = 720;

// 定义角色图片的路径、宽度、高度、层级、位置和缩放比例
var charSrc = 'images/FM.png';
var charW = 80;
var charH = 160;
var charZ = 10;
var charX = 0;
var charY = 0;
var charS = 1;

// 定义角色阴影的位置、透明度、颜色和 Alpha 值
var shadowX = -5;
var shadowY = 5;
var shadowO = 1;
var shadowA = 0.5;
var shadowRGB = [0,0,0];

// 定义背景滚动方向和速度
var direction = 1; // 背景滚动方向，-1 表示向左滚动，1 表示向右滚动
var speed = 10; // 背景滚动速度，可以根据需要调整
//========================================================

function main(){
    // 创建漫画舞台元素
    let comic = document.createElement('div');
    comic.style.backgroundImage = 'url(\''+DefaultBackground+'\')';
    comic.style.width = w + 'px';
    comic.style.height = h + 'px';
    comic.style.animation = `scrollBackground linear infinite ${Math.abs(100/speed)}s`;
    comic.style.animationDirection = direction > 0 ? 'normal' : 'reverse';

    // 创建角色元素
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

    // 将漫画舞台和角色添加到舞台元素中
    stage.appendChild(comic);
    stage.appendChild(char);

}

main()

