// Promise.race

const fetchWeatherInfoFromSource1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ city: 'Delhi', temperature: 30, source: 'Source1' });
        }, 4000);
    });
}

const fetchWeatherInfoFromSource2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ city: 'Delhi', temperature: 30, source: 'Source2' });
        }, 1000);
    });
}

const setTimeoutThreshold = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Threshold exceeded');
        }, 2000);
    });
}

// Promise.race([fetchWeatherInfoFromSource1(), fetchWeatherInfoFromSource2()])
//     .then((value) => console.log(value));

Promise.race([fetchWeatherInfoFromSource2(), setTimeoutThreshold()])
    .then((value) => console.log(value))
    .catch(error => console.log(error));