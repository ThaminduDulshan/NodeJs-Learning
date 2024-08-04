const sayHi = (props) =>{
    console.log(`Hello there ${props}`);
};

const person = {
    name: 'Thamindu',
    age: 21,
}



//export default
module.exports.personData = person;
module.exports = sayHi;
