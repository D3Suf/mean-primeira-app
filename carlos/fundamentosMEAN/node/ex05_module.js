console.log(global === this);
console.log(module === this);
console.log(module.exports === this);



this.sayHello = () => console.log('hello');

// or

//module.exports = {sayHello}