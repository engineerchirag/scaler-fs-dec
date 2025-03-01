const teacher = {
    firstName: 'Chirag',
    lastName: 'Goel',
    age: 30,
    getFullName: function(prefix, suffix) {
        return `${prefix} ${this.firstName} ${this.lastName}`
    }
}

teacher.getFullName('Mr.'); // Mr. Chirag Goel


const student = {
    firstName: 'Prabir',
    lastName: 'Kumar',
}

const gf = {
    firstName: 'Rakhi',
    lastName: 'Gupta',
}

// Ms Rakhi Gupta

teacher.getFullName.call(gf, 'Ms', '.');
teacher.getFullName.apply(gf, ['Ms', '.']);

teacher.getFullName.call(student, 'Mr', '.'); // Mr Prabir Kumar.

document.addEventListener('click', function(){
    
});
