document.getElementById('toggleButton').addEventListener('click', function () {
    var moreContent = document.getElementById('moreContent');
    var button = document.getElementById('toggleButton');

    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'block';
        button.textContent = 'Ver menos';
    } else {
        moreContent.style.display = 'none';
        button.textContent = 'Ver más';
    }
});
//1
document.getElementById('imagen-cambiable1').addEventListener('mouseover', function() {
    this.setAttribute('src', './assets/public/carrusel4Hover.jpg');
});

//1
document.getElementById('imagen-cambiable1').addEventListener('mouseout', function() {
    this.setAttribute('src', './assets/public/carrusel4.jpg');
});

//2
document.getElementById('imagen-cambiable3').addEventListener('mouseover', function() {
    this.setAttribute('src', './assets/public/carrusel1Hover.jpg');
});

//2
document.getElementById('imagen-cambiable3').addEventListener('mouseout', function() {
    this.setAttribute('src', './assets/public/carrusel1.jpg');
});

//3
document.getElementById('imagen-cambiable5').addEventListener('mouseover', function() {
    this.setAttribute('src', './assets/public/carrusel3Hover.jpg');
});

//3
document.getElementById('imagen-cambiable5').addEventListener('mouseout', function() {
    this.setAttribute('src', './assets/public/carrusel3.jpg');
});

//4
document.getElementById('imagen-cambiable2').addEventListener('mouseover', function() {
    this.setAttribute('src', './assets/public/carrusel6Hover.jpg');
});

//4
document.getElementById('imagen-cambiable2').addEventListener('mouseout', function() {
    this.setAttribute('src', './assets/public/carrusel6.jpg');
});

//5
document.getElementById('imagen-cambiable4').addEventListener('mouseover', function() {
    this.setAttribute('src', './assets/public/carrusel5Hover.jpg');
});

//5
document.getElementById('imagen-cambiable4').addEventListener('mouseout', function() {
    this.setAttribute('src', './assets/public/carrusel5.jpg');
});
