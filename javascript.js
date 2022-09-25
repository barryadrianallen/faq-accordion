let images = document.querySelectorAll('img');
let labels = document.querySelectorAll('label');

let invertArrowImage = (index) => {
   images[index].classList.toggle('rotated');
   labels[index].classList.toggle('bold-text');
}



