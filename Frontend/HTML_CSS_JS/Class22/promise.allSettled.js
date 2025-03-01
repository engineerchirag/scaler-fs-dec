// Use Cases: Promise.allSettled

const fetchUserData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: 'John Doe', age: 30 });
        }, 3000);
    });
}

const fetchUserPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(['Post 1', 'Post 2']);
            reject('Error while fetching posts');
        }, 2000);
    });
}

Promise.allSettled([fetchUserData(), fetchUserPosts()])
    .then((values) => console.log(values));