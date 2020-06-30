const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const memeCount = generateRandomNumber();
let memeURL;
fetch('https://api.imgflip.com/get_memes')
  .then((res) => res.json())
  .then((myMemes) => {
    memeURL = myMemes.data.memes[memeCount].url;
    const images = document.querySelectorAll('img');
    images.forEach((el) => {
      el.src = `${memeURL}`;
    });
    //   const firstmeme = document.createElement('img');
    //   firstmeme.src = `${firstMemeURL}`;
    //   document.body.appendChild(firstmeme);
  });

// document.onkeydown = function (e) {
//   ++memeCount;
//   // const currentMeme = memeObj.data.memes[memeCount].url;
//   const image = document.querySelector('img');
//   image.src = `${firstMemeURL}`;
// };

// const optionsObj = {
//     method: 'POST',
//     credentials: "same-origin",
//     headers: {
//         "Content-Type": "application/json; carset=utf-8"
//     },
//     body:
// }
