console.log('Executando metodo login()');

document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('senha');
    var toggle = document.getElementById('toggle-password');
    if (!input || !toggle) return;

    toggle.addEventListener('click', function () {
        var isPassword = input.getAttribute('type') === 'password';
        input.setAttribute('type', isPassword ? 'text' : 'password');
        toggle.textContent = isPassword ? '🔓' : '🔒';
    });
});


