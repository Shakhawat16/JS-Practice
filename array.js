const arr=["ab", "bc","aa","bca"];
arr.sort();
console.log(arr);
arr.reverse();
console.log(arr);
const brr=[3,1,4,6];
brr.sort();
console.log(brr);
const crr=["5","33","2"];
crr.sort();
console.log(crr);
crr.sort(function(a,b){return a-b});
console.log(crr);
crr.sort(function(ra,b){return 0.5-Math.random()});
console.log(crr);
console.log(crr[crr.length-1]);
console.log(Math.max.apply(null, crr));
const drr=[
    {name:"shakha", roll: 376},
    {name:"aka", roll:390}
]
drr.sort(function(a,b){return (a.name.toLowerCase()-b.name.toLowerCase())?1:-1});
console.log(drr);
const err=[56,33,23,45,23,2];
err.forEach(fn);
function fn(x,i){
return err[i]+=i;
}
console.log(err);
const frr=err.map(fnn);
function fnn(x){
    return x/2;
}
console.log(frr);
console.log(frr.reduce(ff,10));
function ff(tot,x) {return tot+x};
console.log(frr.every(function(x){return x>0}));
console.log(frr.includes(3.5));
console.log(frr.find(function(x){return x>0}));
const grr=Array.from("abcdeio");
console.log(grr);
grr.push("u");
console.log(grr);
grr.unshift("c");
console.log(grr);
const k=grr.join("-");
console.log(k);
const hrr=err.concat(crr);
console.log(hrr);
hrr.splice(2,0,4,5);
console.log(hrr);
const prt=hrr.slice(2,4);
console.log(prt);


