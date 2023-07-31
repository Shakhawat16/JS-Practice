function f(a,b){
    return arguments[0]+5;
}
console.log(f(4,5));
let p=(a,b)=> a*b;
//  function closure
console.log(p(4,5));
function ff(){
    let cnt=0;
    return function(){
        return cnt++;
    }
}
// call and apply, this definer
const tmp=ff();
console.log(tmp());
console.log(tmp());

const kk={
    fname: "shakha",
    lname: "wat"
}
const pp={
    fullName: function(){return this.fname + this.lname;}

}
console.log(pp.fullName.call(kk));
console.log(pp.fullName.apply(kk,[]));
// 
function dis(x){
    console.log(x);
}
function cal(a,b,callback){
    callback((a+b));
}
cal(4,5, dis);

// setTimeout(dis(3), 100);
setInterval(cal(3,3, dis), 1000);