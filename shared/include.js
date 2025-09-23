document.addEventListener('DOMContentLoaded', function () {
    var includeTargets = document.querySelectorAll('[data-include]');
    includeTargets.forEach(function (el) {
        var path = el.getAttribute('data-include');
        if (!path) return;
        fetch(path)
            .then(function (r) { return r.text(); })
            .then(function (html) { el.innerHTML = html; })
            .catch(function () { /* falha silenciosa */ });
    });
});


