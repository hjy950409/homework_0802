function Sections__init() {
  // box-1 : 개요 아이템
  gsap.to(".box-1", { 
    x: 700,
    duration: 1
  });

  // box-2 : 개요 아이템
  gsap.from(".box-2", {
    ease: Expo.easeIn,
    opacity: 0,
    x: 300,
    duration: 1.5,
    scrollTrigger: {
      trigger: '.box-2'
    }
  });

  // box-3 : 로고 아이템
  gsap.from('.box-3', {
    ease:Expo.easeIn,
    opacity:0,
    y:400,
    duration:1,
    scrollTrigger:{
      trigger:'.box-3',
      start:'-30%, 87%'
    }
  });

  // box-4 : 와이어프레임 아이템
  gsap.from(".box-4", {
    opacity:0,
    x:700,
    duration:2,
    scrollTrigger:{
      trigger:'.section-5',
    }
  });

  // box-5 : 알고리즘 핸드폰
  gsap.from('.box-5', {
    ease:Expo.easeIn,
    opacity:0,
    x:700,
    duration:1.5,
    scrollTrigger:{
      trigger:'.box-5',
    }
  });

  // box-6 : 알고리즘 조사창
  gsap.from('.box-6', {
    ease:Expo.easeIn,
    opacity:0,
    x:680,
    duration:1,
    scrollTrigger:{
      trigger:'.box-6'
    }
  });
}

$('body').imagesLoaded(function() {
  Sections__init();
});

console.clear();

// 터치가 가능한 디바이스인지 체크하는 로직 시작
function detectTouchEnabled() {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    return true;
  }
  
  return false;

  // 아래 로직은 폐기 한다.
  // 왜냐하면, PC 브라우저라도 터치가 가능한게 있기 때문에, 단순히 터치가능여부를 모바일인지 아닌지로 구분하면 좋지 않다.
  /*
  return ( 'ontouchstart' in window ) || 
    ( navigator.maxTouchPoints > 0 ) || 
    ( navigator.msMaxTouchPoints > 0 );
  */
}

const isTouchEnabled = detectTouchEnabled();

function Touch__init() {
  if ( isTouchEnabled ) {
    $('html').addClass('touch-enabled');
  }
  else {
    $('html').addClass('touch-disabled');
  }
}

Touch__init();
// 터치가 가능한 디바이스인지 체크하는 로직 끝

if ( isTouchEnabled == false ) {
  $('body').niceScroll();
}