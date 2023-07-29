let obj={
    fname: "shakhawat",
    lname: "Hosen"   
}
Object.defineProperty(obj, "lan",
{
    get: function(){
        return "en";
    }
});

console.log(obj.lan);

