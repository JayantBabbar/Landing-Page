

const navSlide = ()=>{

const navVisible = document.querySelector("#nav-links");
const menu = document.querySelector('#menu');

menu.addEventListener('click', () => {
  menu.classList.toggle("change");
  navVisible.classList.toggle("nav-active");
});
}

navSlide();

    






