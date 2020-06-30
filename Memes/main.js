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

    document.body.style.backgroundColor = 'grey';
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((el) => {
      const reverseString = el.innerHTML.split('').reverse().join('');
      el.innerHTML = `${reverseString}`;
      el.style.color = 'yellow';
    });

    const links = document.querySelectorAll('a');
    links.forEach((el) => {
      // el.innerHTML = `<img src=assets/beerparrot.gif>`;
      el.style.fontSize = '40px';
      el.style.color = 'pink';
    });

    const inputs = document.querySelectorAll('input');
    inputs.forEach((el) => {
      el.placholder = 'asdfasdfsadf';
    });

    const hOne = document.querySelectorAll('h1');
    hOne.forEach((el) => {
      el.style.color = 'red';
    });
    const hTwo = document.querySelectorAll('h2');
    hTwo.forEach((el) => {
      el.style.color = 'green';
    });
    const hThree = document.querySelectorAll('h3');
    hOne.forEach((el) => {
      el.style.color = 'orange';
    });

    const spans = document.querySelectorAll('span');
    spans.forEach((el) => {
      el.style.color = 'blue';
    });

    // document.onkeydown = function (e) {
    //   images.forEach((el) => {
    //     memeCount = generateRandomNumber();
    //     el.src = `${memeURL}`;
    //   });
    // };
  });

// const optionsObj = {
//     method: 'POST',
//     credentials: "same-origin",
//     headers: {
//         "Content-Type": "application/json; carset=utf-8"
//     },
//     body:
// }
