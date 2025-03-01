// Write a function such that fn()==new fn() returns true.


function fn() {
    if (!(this instanceof fn)) {
        return new fn();
    }
    return this;
}