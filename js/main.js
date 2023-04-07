// ハンバーガーメニュー実装・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・
window.onload = function () {
    let nav = document.getElementById('nav-wrapper');
    let hamburger = document.getElementById('js-hamburger');
    let blackBg = document.getElementById('js-black-bg');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('open');
    });
    blackBg.addEventListener('click', function () {
        nav.classList.remove('open');
    });
};

document.addEventListener('DOMContentLoaded', function () {
    const hero = new HeroSlider('.swiper');
    hero.start();
});




// スクロールするとシュッと出てくるアクション・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・
const slideText = document.querySelectorAll('.slide-text-animation');
const cb = function(entries, observer) {

    entries.forEach(entry => {
        if(entry.isIntersecting) {            
            entry.target.classList.add('inview')
        } else {
        }
    });
}
const options = {
    root: null,
    rootMargin: "0px 0px",
    threshold: [0, 0.5, 1]
};

const io = new IntersectionObserver(cb, options);
slideText.forEach(el => io.observe(el));




// スクロールすると上に戻るボタンが出てくるアクション・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・
window.addEventListener("scroll", function () {
    const topBtn = document.querySelector(".back-top");
    const scroll = window.pageYOffset;
    if (scroll > 1000) {     
      topBtn.style.opacity = 1;
    } else topBtn.style.opacity = 0; 
  });



// ローディング画面の作成・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・
const loader = document.querySelector('.loading');
window.addEventListener('load', () => {
  const ms = 1000;
  loader.style.transition = ms + 'ms';
//   const loaderTransform = function(){
//     loader.style.transform = 'translateY' + '(100%)';
//   }  
  const loaderOpacity = function(){
    loader.style.opacity = 0;
  }
  const loaderDisplay = function(){
    loader.style.display = "none";
  }

  setTimeout(loaderOpacity, 3500);
//   setTimeout(loaderTransform, 4000);
  setTimeout(loaderDisplay, 5000 + ms);
});