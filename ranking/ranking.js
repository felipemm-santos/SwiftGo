function goBack() {
    alert('Voltando para a tela anterior...');
}

function showAlert(section) {
    alert('Navegando para: ' + section);
}

document.querySelectorAll('.ranking-item').forEach(function (item, index) {
    item.addEventListener('click', function () {
        var userName = item.querySelector('.user-name').textContent;
        var userPoints = item.querySelector('.points-highlight').textContent;
        alert('Usuario: ' + userName + '\nPontos: ' + userPoints + ' pontos' + '\nPosicao: ' + (index + 1) + ' lugar');
    });
});

window.addEventListener('load', function () {
    var header = document.querySelector('.header');
    if (header) header.style.animation = 'slideIn 0.8s ease-out';

    var rankingList = document.querySelector('.ranking-list');
    if (rankingList) rankingList.style.animation = 'slideIn 1s ease-out';

    var navigation = document.querySelector('.navigation');
    if (navigation) navigation.style.animation = 'slideIn 1.2s ease-out';
});
