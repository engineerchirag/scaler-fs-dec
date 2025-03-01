// Promise.any - first successful response

function resolveQuickly() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Resolved quickly"), 500);
    });
}

function resolveSlowly() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Resolved slowly"), 2000);
    });
}

function rejectFast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Rejected fast"), 300);
    });
}

function rejectSlowly() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Rejected slowly"), 1500);
    });
}

Promise.any([resolveQuickly(), resolveSlowly(), rejectFast(), rejectSlowly()])
    .then((value) => console.log(value))
    .catch((error) => console.log(error));