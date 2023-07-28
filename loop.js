let ar={fn:"shakhawat", ln:"Hosen", age:25};
for(let x in ar){
    console.log(ar[x]);
}
let a="abcdef";
for(x of a){
    console.log(x);

}
for(x in a){
    console.log(x);

}
const k="akjahfaksf";
const st=new Set(k);
console.log(st);
st.forEach(function(x){console.log(x)});
st.forEach(function(x){
    console.log(x);
});
for(x of st.values()){
    console.log(x);

}
const mp = new Map();
mp.set("dk",4);
mp.set("ak",48);
console.log(mp.size);
console.log(mp.has("dk"));
mp.forEach(function(v,k){
    console.log(`${k} = ${v}`);
});
for(x of mp.entries()){
    console.log(x);
    console.log("\n");
}
const pr=["kd","kdd"];
console.log(fun(pr));
function fun(ar){
    return ar.constructor.toString().indexOf("Array")>-1;
};
console.log(typeof(null));
console.log(function(){}.constructor);
console.log(function(){return nul==undefined});