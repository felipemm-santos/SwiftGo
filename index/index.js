function entrar(event) {
    if (event && event.preventDefault) event.preventDefault();
    var modal = document.getElementById('info-modal');
    var text = document.getElementById('info-modal-text');
    if (!modal || !text) return;

    modal.classList.add('show');

    setTimeout(function () {
        modal.classList.remove('show');
        window.location.href = '../login/login.html';
    }, 2500);
}

// Fallback JS para hover em navegadores que nao aplicam :hover corretamente
document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.cta-button');
    if (!btn) return;
    btn.addEventListener('mouseenter', function () {
        btn.classList.add('is-hover');
        btn.style.transform = 'translateY(-3px) scale(1.06)';
    });
    btn.addEventListener('mouseleave', function () {
        btn.classList.remove('is-hover');
        btn.style.transform = '';
    });
});



