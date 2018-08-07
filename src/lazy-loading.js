lazyLoad();

window.addEventListener('scroll', e => {
    lazyLoad();
})

function lazyLoad() {
  var lazyImage = document.getElementsByClassName('lazy') ;
  for (let i = 0; i < lazyImage.length; ++i) {
    if (elemenInViewport(lazyImage[i])) {
      lazyImage[i].setAttribute('src', lazyImage[i].getAttribute('data-src'));
    }
  }
}

function elemenInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}