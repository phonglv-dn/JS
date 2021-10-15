let galleris = document.querySelectorAll('.gallery img');
let modal = document.querySelector('.modal');
let fullImg = document.querySelector('.full-img');

galleris.forEach(function (gallerisItem) {
    gallerisItem.addEventListener('click', function(){
        modal.classList.add('open');
        let imgAlt = gallerisItem.getAttribute('alt');
        fullImg.src = `./img/full/${imgAlt}.jpg`;
        fullImg.classList.add('open');
    })
})

modal.addEventListener('click',(e) =>{
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open");
        fullImg.classList.remove("open");
    };
});
