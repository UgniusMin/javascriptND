// (function (){ //IIFE: imeadeatly involved function expression
//     console.log('testas')

//     //Global scope
//     function syHi(){
//         //function scope
//         let firstName="Martynas";
//         return firstName;
//     }

//     console.log(syHi())
//     console.log(typeof syHi) //function
//     console.log(firstName)

//     //Arrow function

//     const login = ()=>{
//         console.log("You are loged in")
//     }

//     login()
// })();

// (function (){

//     const addNumber = (...numbers)=>{
//         const sum = numbers.reduce(
//             (accumulator, currentValue)=> accumulator + currentValue,
//             0
//         );
//         return sum;
//     }

//     console.log(addNumber(123,567,1233,54677,789789,12435,567567))

// })();

// const articles = document.querySelectorAll('article');
// const color = '#ddee99';

// //Tikslas: uzdeti su js ant atricle elementu background color

// for(let article of articles){
//     article.addEventListener('click', (e)=>{
//         e.target.style.backgroundColor = '#ddaa33'
//     })
// }

// article.style.backgroundColor = "#ddee88" //sukurem nauja atributa style

//uzdeti ivyki ir paleisti funkcija

// article.addEventListener('click', ()=>{
//     article.style.backgroundColor = "#ddee57"
// })

// document.querySelector('form').addEventListener('submit', (e)=>{
//     e.preventDefault(); //keiciama standartine formos elgsena
//     for(let article of document.querySelectorAll('article p')){
//         article.innerHTML = document.querySelector('input').value; //textContent, innerHtml
//     }
// })

// document.querySelector('.todo form').addEventListener('submit', (e)=>{
//     e.preventDefault();
//     let li = document.createElement('li'); // create li element
//     li.textContent = document.querySelector('.todo form input').value; // add content
//     document.querySelector('.todo ul').appendChild(li); // move to ul
// })

// kurti/modifikuoti atributus
// priskirti turini text node
// kurti node

// const atsitiktiniaiVardai = [
//     `Ugnius`,
//     `Jonas`,
//     `Ignas`,
//     `Petras`,
//     `Augustas`,
//     `Martynas`,
//     `Kestas`,
//     `Linas`,
//     `Andrius`,
//     `Titas`
// ];

// const vardai = atsitiktiniaiVardai.join("\n")
// console.log(vardai);
// const naujasVardas = [];


// for (i = 0; i < 10; i++){
//     document.querySelector('.todo form')
//     let li = document.createElement('li')
//     li.textContent = (i + 1) + " " + atsitiktiniaiVardai[i]
//     document.querySelector('.todo ul').appendChild(li)

//     let studentName = atsitiktiniaiVardai[i];
//     let newstudentName = studentName[0] + studentName[studentName.length - 1];
//     naujasVardas.push(newstudentName);

//     if (atsitiktiniaiVardai[i].length >= 6){
//         li.style.color = `red`;
//     } else {
//         li.style.color = `blue`;
//     }
// };

// let magicString = naujasVardas.join('');

// let h1 = document.createElement('h1');
// h1.textContent = magicString;
// document.body.appendChild(h1);