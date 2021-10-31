function mode(body){
    
    if ('0' in body.classList){
        console.log('si mano');
        body.classList.remove('bodyDark');
        card.classList.remove('cardDark');
        card.classList.add('cardSoon');
        btn.innerText = 'Dark Mode';
        btn.appendChild(imgMoon);
    }
    else if(body.classList){
        console.log('algo');
        body.classList.add('bodyDark');
        card.classList.remove('cardSoon');
        card.classList.add('cardDark');        
        btn.innerText = 'Light Mode';
        btn.appendChild(imgSun);
    }
}

const imgMoon = document.createElement('img');
imgMoon.src = './../img/moonSolidWhite.svg';
imgMoon.alt = '...';

const imgSun = document.createElement('img');
imgSun.src = './../img/sunSolidYell.svg';
imgSun.alt = '...';


const card = document.getElementById('card');
const btn = document.getElementById('btnChange');

btn.addEventListener('click', function(){
    console.dir(btn);
    const body = document.body;
    console.log('hola')
    console.log(body.classList);
    mode(body);
})