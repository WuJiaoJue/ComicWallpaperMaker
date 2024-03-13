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
var DefaultBackground = 'images/七草荠24_2_27.png';

// 定义舞台的宽度和高度
// var w = 1440;
// var h = 720;
var w = screen.width;
var h = screen.height;
console.log(h)


// 定义角色图片的路径、宽度、高度、层级、位置和缩放比例
var charSrc = 'images/七草荠透明背景人物2.png';
var charW = 500;
var charH = 700;
var charZ = 10;
var charX = 180;
var charY = 40;
var charS = 1.3;

// 定义角色阴影的位置、透明度、颜色和 Alpha 值
var shadowX = 0;
var shadowY = 50;
var shadowO = 1;
var shadowA = 0.7;
var shadowRGB = [0,0,0];

// 定义背景滚动方向和速度
var direction = 1; // 背景滚动方向，-1 表示向左滚动，1 表示向右滚动
var speed = 10; // 背景滚动速度，可以根据需要调整
//========================================================


function main(){
    var BackgroundH;
    var BackgroundW;

    let img = new Image();
    img.src = DefaultBackground

    img.onload = function (){
        console.log(img.width)
        BackgroundH = img.height;
        BackgroundW = img.width;
    }
    // const scrollX = (h/BackgroundH) * BackgroundW;
    const scrollX = -1 * (h/img.height) * img.width;
    console.log(scrollX)
    const scrollKeyframes = `
      @-webkit-keyframes scrollBackground {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(${scrollX}px);
        }
      }
      @keyframes scrollBackground {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(${scrollX}px);
        }
      }
    `;

    // 创建 style 标签并插入 keyframes 动画
    const style = document.createElement('style');
    style.innerHTML = scrollKeyframes;
    document.head.appendChild(style);

    // 创建漫画舞台元素
    let comic = document.createElement('div');
    comic.id = '_comic_';
    comic.style.backgroundImage = 'url(\''+DefaultBackground+'\')';
    comic.style.width = w * 10 + 'px';
    comic.style.height = h + 'px';
    comic.style.backgroundRepeat = 'repeat-x'
    comic.style.animation = `scrollBackground linear infinite ${Math.abs(w/speed)}s`;
    comic.style.animationDirection = direction > 0 ? 'normal' : 'reverse';
    comic.style.backgroundSize = 'auto 100%';

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
    char.style.backgroundSize = 'auto 100%';


    // 将漫画舞台和角色添加到舞台元素中
    stage.appendChild(comic);
    stage.appendChild(char);

}

main()

