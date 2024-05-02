const buttonShow = document.getElementById('rodyti');
const spaceImages = document.getElementsByClassName('images');
const buttonChange = document.getElementById('keisti');

buttonShow.addEventListener('click', (e) => {
    e.preventDefault();
    for (let i = 0; i < spaceImages.length; i++) {
        spaceImages[i].style.visibility = "visible";
    }

    buttonChange.style.visibility = "visible";
});

// buttonChange.addEventListener('click', (e)=>{
//     e.preventDefault();
//     const randomImages = Math.random(spaceImages);
//     for (let i = 0; i < randomImages.length; i++) {
//         randomImages[i].style.visibility = "visible";
//     }
// });

function defaultImage(){
    spaceImages.addEventListener('dblclick', ()=>{
        Image.src = "https://c02.purpledshub.com/uploads/sites/48/2020/04/lemon-moon-3951a4a-e1588671519977.png?webp=1&w=1200"
    })
};
