let func = (x,y)=> x*y;

console.log(func(4,5));
// arrow function retain this. same
let obj ={
    Name: "shakhawat",
    arr : ["eia","bia","cia"],
    itr : function(){
    this.arr.array.forEach((x) => console.log(`${this.Name} ${x}`));
    }
}
obj.itr();
// swap destructuring
let z=3,y=5;
console.log(z,y);