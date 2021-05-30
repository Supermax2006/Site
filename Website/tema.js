tema = 'chocolate';
function show() {
  if (tema == 'light') {
    document.querySelector('#one').textContent = 'Тема: тёмная';
    document.querySelector('html').style.backgroundColor = 'black';
    document.querySelector('.p1').style.color = 'white';
    document.querySelector('.p2').style.color = 'white';
    document.querySelector('.p3').style.color = 'white';
    document.querySelector('h1').style.color = 'white';
    document.querySelector('h2').style.color = 'white';
    tema = 'black';
  }
  else if (tema == 'black') {
    document.querySelector('#one').textContent = 'Тема: шоколад';
    document.querySelector('html').style.backgroundColor = 'chocolate';
    document.querySelector('.p1').style.color = 'black';
    document.querySelector('.p2').style.color = 'black';
    document.querySelector('.p3').style.color = 'black';
    document.querySelector('h1').style.color = 'black';
    document.querySelector('h2').style.color = 'black';
    tema = 'chocolate';
  }
  else if (tema='chocolate'){
    document.querySelector('#one').textContent = 'Тема: белая';
    document.querySelector('html').style.backgroundColor = 'white';
    document.querySelector('.p1').style.color = 'black';
    document.querySelector('.p2').style.color = 'black';
    document.querySelector('.p3').style.color = 'black';
    document.querySelector('.h1').style.color = 'black';
    document.querySelector('.h2').style.color = 'black';
    tema = 'light';
  }
}
if(tema='chocolate'){
  document.querySelector('html').style.backgroundColor = 'chocolate'
  document.querySelector('p').style.Color = 'black';
}