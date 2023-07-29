let k="ab akdk akja akja akjf afjjajfa akjf";
let matches = k.match(/akj/gi);
let occr = matches ? matches.length : 0;
console.log(occr);
let fp = k.search(/fjjj/i);
fp = fp>=0 ? fp : "not found";
console.log(fp);
let pp=["dkdk", NaN, 34, 0];
let tr = pp.filter(Boolean);
console.log(tr);
let obj ={
    karim : 399,
    rahim : 390,
    salim :NaN,
    ramim : 0,
    samim : "kd"
}
for(i in obj){
    if(!obj[i])
    {
        delete obj[i];
    }
}
console.log(obj);