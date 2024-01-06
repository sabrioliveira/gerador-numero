const button = document.getElementById('gerar-bt');
const res = document.getElementById('result')
button.addEventListener('click', function () {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    res.style.animation = 'none'

    setTimeout(function () {

        res.style.animation = 'result 2s forwards'
    }, 10)

    setTimeout(function () {
        let result = Math.floor(Math.random() * (max - min + 1)) + min;

        if (isNaN(result)) {
            result = 'valor inválido';
        }

        document.querySelector('#result > span').textContent = result;
    }, 1900);
});