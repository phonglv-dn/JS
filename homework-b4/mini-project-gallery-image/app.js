// BOM: window, location, screen, history

const modal = document.getElementsByClassName('modal')[0]
console.log(modal)
// const imageModal = document.getElementsByClassName('full-img')[0]
// console.log(imageModal)
const imageModal = document.querySelector('.full-img')
console.log(imageModal)

// Tạo sự kiện click, doi url image va show popup
// .addEventListener()
const listImage = document.querySelectorAll('.img-container img')
console.log(listImage)

listImage.forEach(element => {
    element.addEventListener('click', function() {
        // Open modal
        modal.classList.add('open')
        const imgAlt = element.getAttribute('alt');
        // Set new url image
        imageModal.src = `./img/full/${imgAlt}.jpg`;
        imageModal.classList.add('open');
    })
});

modal.addEventListener('click',(e) => {
    if(e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        imageModal.classList.remove("open");
    };
});

// Demo, làm tiếp yêu cầu scroll
const sessionToGallery = document.getElementById("gallery");
let scrollToGallery = function() {
    sessionToGallery.scrollIntoView(); 
}

const sessionToBooks = document.getElementById("books");
let scrollToBooks = function() {
    sessionToBooks.scrollIntoView(); 
}

const sessionToStudents = document.getElementById("students");
let scrollToStudents = function() {
    sessionToStudents.scrollIntoView(); 
}

const sessionToColors = document.getElementById("colors");
let scrollToColors = function() {
    sessionToColors.scrollIntoView(); 
}

// Back To Top

const backToTop = document.getElementById("btnBackToTop");
backToTop.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
window.onscroll = () => {
    window.scrollY > 500 ? backToTop.style.opacity = 1 : backToTop.style.opacity = 0;
}

// Change Colors

const colorsTitle = document.getElementById("colors-title");
const textColor = document.getElementById("text-color");
const btnChangeColor = document.getElementById("btn-change-color");
const defaultColor = `rgb(255,255,255)`;
textColor.innerHTML = defaultColor;
textColor.style.color = defaultColor;
btnChangeColor.addEventListener("click", (e) => {
    let redColor = Math.floor(Math.random() * 256);
    let greenColor = Math.floor(Math.random() * 256);
    let blueColor = Math.floor(Math.random() * 256);
    let changeColor = `rgb(${redColor},${greenColor},${blueColor})`;
    textColor.innerHTML = changeColor;
    textColor.style.color = changeColor;
    sessionToColors.style.backgroundColor = changeColor;
})