const footerText = document.querySelector('.footer__text');
const article = document.querySelector('.article');
const post = document.querySelector('.post');
const question = document.querySelector('.question');



window.addEventListener('scroll', () => {  
  showToBlock(article);
  showToBlock(post);
  showToBlock(question);  
});

function showToBlock (block) {
  let wHeight = document.documentElement.clientHeight;
  let checkPoint = (wHeight / 100) * 20;
  let checkPointBlock =  block.offsetTop - wHeight + checkPoint;

  if (window.pageYOffset > checkPointBlock) {  

    block.classList.add('show-block');
    block.classList.remove('hidden-block');  

  } else if(window.pageYOffset < checkPointBlock) {

    block.classList.remove('show-block');
    block.classList.add('hidden-block');
  }
}




footerText.addEventListener('click', () => {
  footerText.classList.add('footer__text-show');
  setTimeout(() => {    
    footerText.classList.remove('footer__text-show');     
  }, 5000);
});

console.log('высота блока ' + post.offsetTop);

console.log('точка' + checkPoint)

console.log('размер окна ' +  document.documentElement.clientHeight);