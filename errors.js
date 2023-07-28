try{
    cc(dkja);
}
catch(err){
    console.log(err.message);
}
function fn(){
    try{
    let x=document.getElementById("fff").value;
    if(isNaN(x)) throw "not a number";
    if(x.trim()=="") throw "empty";
    x=parseInt(x);
    if(x>10) throw "greater than limit";
    }
    catch(err){
        window.alert(err);
    }

}
