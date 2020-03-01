// class Pepole {
//     getPepoleCount(){
//         return 10;
//     }
// }
// class Person extends Pepole{
//     name = 'Max';
//     constructor(){
//         super();
//         this.age = 30;
//     }
//     printPerson(test){
//         console.log(arguments);
//         console.log('name : ' + this.name + 'age : ' + this.age);
//     }
// }

// const person = new Person();
// console.log(person.printPerson('a','b','c','d'));
// console.log(person);

const course = {
    name:'test',
    title:'course title'
};
Object.setPrototypeOf(course,{
    printCourse : function(){
        console.log("course");
    }
});


Object.defineProperty(course,'duration',{
    configurable:false,
    enumerable:true,
    value:10,
    writable:false
});
console.log(course);