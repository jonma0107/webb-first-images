const image2 = document.querySelector(".image2");

window.addEventListener('mousemove', e => {
  image2.style.left = e.clientX + 'px';
});

const image4 = document.querySelector(".image4");

window.addEventListener('mousemove', e => {
  image4.style.left = e.clientX + 'px';
});
