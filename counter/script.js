const container = document.querySelector('.container');
const box = document.querySelector('.box');


container.addEventListener('click', (e) => {
    if(!e.target.classList.contains('btn')) return;
    box.animate( [
        { transform: `translateY(${40 *+e.target.dataset.num}px) ` ,opacity: 0.8 },
        { transform: 'translateY(0)', opacity:1 }
      ],{
        duration: 400,
        // easing: "ease-in",
      });
   box.textContent = +box.textContent + +e.target.dataset.num;
  })