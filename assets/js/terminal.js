(function () {
    const TYPE_SPEED = 45;

    function typeText(element) {
        return new Promise(function (resolve) {
            var text = element.getAttribute('data-text') || element.textContent;
            element.setAttribute('data-text', text);
            element.textContent = '';

            var cursor = document.createElement('span');
            cursor.className = 'type-cursor';
            element.insertAdjacentElement('afterend', cursor);

            var i = 0;
            function tick() {
                if (i < text.length) {
                    element.textContent += text[i++];
                    setTimeout(tick, TYPE_SPEED + Math.random() * 25);
                } else {
                    cursor.remove();
                    resolve();
                }
            }
            setTimeout(tick, 80);
        });
    }

    function animatePromptLine(line) {
        var cmd = line.querySelector('.prompt-cmd');
        if (!cmd || cmd.dataset.typed) return Promise.resolve();
        cmd.dataset.typed = '1';
        return typeText(cmd);
    }

    function runSequential(lines) {
        return lines.reduce(function (chain, line) {
            return chain.then(function () { return animatePromptLine(line); });
        }, Promise.resolve()).then(function () {
            // permanent blinking cursor after last hero prompt
            if (lines.length > 0) {
                var cursor = document.createElement('span');
                cursor.className = 'cursor';
                lines[lines.length - 1].appendChild(cursor);
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        // Hero: type sequentially on load
        var heroLines = Array.from(document.querySelectorAll('.hero-terminal .term-prompt-line'));
        setTimeout(function () { runSequential(heroLines); }, 500);

        // Sections: type when scrolled into view
        var sectionLines = document.querySelectorAll('.section .term-prompt-line');

        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        animatePromptLine(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });

            sectionLines.forEach(function (line) { observer.observe(line); });
        } else {
            sectionLines.forEach(function (line) { animatePromptLine(line); });
        }
    });
})();
