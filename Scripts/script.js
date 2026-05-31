

fetch('/Pages/header.html')
.then(response => response.text())
.then(data =>{
    document.getElementById('header').innerHTML = data


const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu i');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');

    console.log(navbar.classList);

    if(navbar.classList.contains('active')){
        menuIcon.classList.remove('bi-list');
        menuIcon.classList.add('bi-x-lg');
    }else{
        menuIcon.classList.remove('bi-x-lg');
        menuIcon.classList.add('bi-list')
    }

});
});

function abrirCurriculo(e){
    e.preventDefault();
    window.open("currículo-Ercília.pdf", "_blank");
}

document
    .querySelectorAll("#btn-curriculo, #mobile-curriculo")
    .forEach(btn => {
        btn.addEventListener("click", abrirCurriculo);
    });


