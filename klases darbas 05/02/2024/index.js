for(let i=0; i<16; i++){
    let div = document.createElement('div');
    div.style.backgroundColor="red";
    div.style.height = '200px';
    div.style.width = '25%';
    document.querySelector('.row').appendChild(div);
}

const random = ()=>{
    return Math.floor(Math.random()*255)
}

const randomBg = ()=>{
    return `rgb(${random()}, ${random()}, ${random()})`
}

console.log(randomBg());

for(let div of document.querySelectorAll('.row div')){
    div.onclick = (e)=>{
        e.target.style.backgroundColor = randomBg();
    }
}