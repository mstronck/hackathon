document.addEventListener("DOMContentLoaded", () =>{
    let memeObj;
    let memeCount = 0;
    let firstmeme;
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(myMemes => {
        memeObj = myMemes;
        let firstMemeURL = memeObj.data.memes[memeCount].url;
        console.log(firstMemeURL);
        firstmeme = document.createElement("img");
        firstmeme.src = `${firstMemeURL}`;
        document.body.appendChild(firstmeme);
    });

    document.onkeydown = function (e) {
        ++memeCount;
        let currentMemeURL = memeObj.data.memes[memeCount].url;
        let currentMeme = memeObj.data.memes[memeCount].url;
        document.body.innerHTML = `<img src = "${currentMemeURL}">`;
    }

    document.onkeydown = function (e) {
        if(e.keyCode === 88){
            console.log(currentMeme)
        }
    }
})







