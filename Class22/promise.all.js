// Use Cases: Promise.all

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

Promise.all([fetchUserData(), fetchUserPosts()])
    .then((values) => console.log(values))
    .catch((error) => console.log(error));