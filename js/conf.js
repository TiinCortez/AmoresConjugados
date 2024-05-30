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
