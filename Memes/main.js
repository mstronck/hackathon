document.addEventListener("DOMContentLoaded", () =>{
    let memeObj;
    let memeCount = 0;
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(myMemes => {
        memeObj = myMemes;
        let firstMemeURL = memeObj.data.memes[memeCount].url;
        console.log(firstMemeURL);
        let firstmeme = document.createElement("img");
        firstmeme.src = `${firstMemeURL}`;
        document.body.appendChild(firstmeme);
    });

    document.onkeydown = function (e) {
        ++memeCount;
        let currentMeme = memeObj.data.memes[memeCount].url;
        document.body.innerHTML = `<img src = "${currentMeme}">`;
    }


    // const optionsObj = {
    //     method: 'POST',
    //     credentials: "same-origin",
    //     headers: {
    //         "Content-Type": "application/json; carset=utf-8"
    //     },
    //     body:
    // }
})







