mode = 1;
document.oncontextmenu = new Function("return false;")

function getKey(e) {
    var key = e.keyCode;
    console.log(key);

    if (key == 16 || key == 17) {
        mode = 2;
    }
                
    if (mode == 1) {
        if (key == 123) {
           return false;
        }
    } else {
        if (key == 73 || key == 74 || key == 85) {
            return false;
        } else {
            if (key == 123) {
                return false;
                }
            }
        }
}
window.onkeydown = getKey;
