window.wallpaperPropertyListener = {
    applyUserProperties: function(properties) {
        if (properties.charsize) {
            charS = properties.charsize.value;
            $('_char_').style.transform = 'scale(' + charS + ')';
        }
        if (properties.charx) {
            charX = properties.charx.value;
            $('_char_').style.left = (w - charW)/2 + charX + 'px';
        }
        if (properties.chary) {
            charY = properties.chary.value;
            $('_char_').style.top = h - charH + charY + 'px';
        }
        if (properties.shadowx) {
            shadowX = properties.shadowx.value;
            $('_char_').style.filter = 'drop-shadow('+shadowX+'px '+shadowY+'px '+shadowO+'px rgba('+
                shadowRGB[0]+', '+shadowRGB[1]+', '+shadowRGB[2]+', '+shadowA+'))';
        }
        if (properties.shadowy) {
            shadowY = properties.shadowy.value;
            $('_char_').style.filter = 'drop-shadow('+shadowX+'px '+shadowY+'px '+shadowO+'px rgba('+
                shadowRGB[0]+', '+shadowRGB[1]+', '+shadowRGB[2]+', '+shadowA+'))';
        }
        if (properties.shadowa) {
            shadowA = properties.shadowa.value;
            $('_char_').style.filter = 'drop-shadow('+shadowX+'px '+shadowY+'px '+shadowO+'px rgba('+
                shadowRGB[0]+', '+shadowRGB[1]+', '+shadowRGB[2]+', '+shadowA+'))';
        }
        if (properties.shadowo) {
            shadowO = properties.shadowo.value;
            $('_char_').style.filter = 'drop-shadow('+shadowX+'px '+shadowY+'px '+shadowO+'px rgba('+
                shadowRGB[0]+', '+shadowRGB[1]+', '+shadowRGB[2]+', '+shadowA+'))';
        }
        if (properties.shadowrgb) {
            shadowRGB = properties.shadowrgb.value.split(' ').map(value => Math.round(parseFloat(value) * 255));
            $('_char_').style.filter = 'drop-shadow('+shadowX+'px '+shadowY+'px '+shadowO+'px rgba('+
                shadowRGB[0]+', '+shadowRGB[1]+', '+shadowRGB[2]+', '+shadowA+'))';
        }
        if (properties.direction) {
            direction = properties.direction.value;
            $('_comic_').style.animationDirection = direction > 0 ? 'normal' : 'reverse';
        }
        if (properties.speed) {
            speed = properties.speed.value;
            $('_comic_').style.animation = `scrollBackground linear infinite ${Math.abs(w/speed)}s`;
        }
    },
};