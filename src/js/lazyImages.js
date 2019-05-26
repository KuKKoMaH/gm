import LazyLoad from "vanilla-lazyload";

let inViewport = [];
let loaded     = [];
new LazyLoad({
  elements_selector: '.lazy',
  callback_loaded:   (el) => {
    loaded.push(el);
    showImage(el);
  },
});

var callback = function (entries) {
  inViewport = [];
  // console.log(entries);
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    if (entry.isIntersecting || entry.intersectionRatio > 0) {
      inViewport.push(entry.target);
      showImage(entry.target);
    }
  }
};
var observer = new IntersectionObserver(callback, { threshold: .5 });
$('.lazy').each((i, el) => observer.observe(el));

function showImage(el) {
  if (inViewport.includes(el) && loaded.includes(el)) {
    el.classList.add('lazy--visible');
  }
}