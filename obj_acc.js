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

function pp(f, l, a){
    this.fn=f;
    this.ln=l;
    this.ag=a;
    this.fln=function(){
        return this.fn + " " +this.ln;
    }
}

let i=new pp("shakhawat", "hosen" ,23);
let he=new pp("a" , "b", 32);
console.log(he.fln);