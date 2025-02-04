console.log(document.getElementById('scrollPosition').textContent);
function updateScrollPosition() {
    document.getElementById('scrollPosition').textContent = window.scrollY;
    console.log('scrolled');
}

function throttle(fn, delay) {
    let timerRef;
    let lastRun = 0;
    return function() {
        const delta = Date.now() - lastRun;
        if (delta >= delay) {
            fn();
            lastRun = Date.now();
        } else {
            clearTimeout(timerRef);
            timerRef = setTimeout(() => {
                fn();
                lastRun = Date.now();
            }, delay - delta);
        }
    }
}

const debouncedScrollFn = throttle(updateScrollPosition, 500);
window.addEventListener('scroll', debouncedScrollFn);