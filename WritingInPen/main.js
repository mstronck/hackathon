// let contents = document.getElementById("contents"); //How did I know to look for "contents"
// contents.parentNode.removeChild(contents);

document.onkeydown = function (e) {
    if (e.keyCode === 8 || e.keyCode === 46) {
        return false;
    }
}