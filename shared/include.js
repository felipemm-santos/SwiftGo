
document.addEventListener('DOMContentLoaded', function () {
    const includeTargets = document.querySelectorAll('[data-include]');
    const promises = []; 

    includeTargets.forEach(function (el) {
        const path = el.getAttribute('data-include');
        if (!path) return;

        const promise = fetch(path)
            .then(response => response.text())
            .then(html => {
                el.innerHTML = html;
            })
            .catch(err => {
                console.error('Failed to include file:', path, err);
            });

        promises.push(promise);
    });

    
    Promise.all(promises).then(() => {
        window.dispatchEvent(new Event('includesLoaded'));
    });
});