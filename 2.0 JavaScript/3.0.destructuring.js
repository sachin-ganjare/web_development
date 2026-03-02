// destructuring array
const [red, blue, green] = [9,132,237]
console.log(red);

// destructuring array of `objects` to array of `variables`
const animals = [{name: 'cat', age: 2}, {name: 'dog', age: 5}, {name: 'lion', age: 3}]
const [cat, dog, lion]  = animals;
console.log(dog.name); // same as var dog = animals[1]

// common mistake: destructuring object
const {catName, catAge} = cat;
console.log(catName); // but same name can be extracted!


// destructuring object with renaming variables
const {name: dogName, age: dogAge} = dog;
console.log(dogName);

// advanced
const {name="thomas", age=27} = cat;
console.log(cat)
console.log(name);
console.log(age);