function BMI(w, t){
    t=0.01*t;
    return w/(t*t);
}

var btn1=document.getElementById("btn1");
btn1.onclick=function(){
    var wkg=document.getElementById("w").value;
    var tall=document.getElementById("tall").value;
    var op=document.getElementById("op1");
    op.innerHTML=BMI(wkg, tall);
};

var btn2 = document.getElementById("btn2");
btn2.onclick = function(){
    // var wkg=document.getElementById("w").value;
    // var tall=document.getElementById("tall").value;
    // var op=document.getElementById("op1");
    // wkg=60;
    // tall=170;
    // op.innerHTML="NuN";
    document.getElementById("w").value = 60;
    document.getElementById("tall").value = 170;
    document.getElementById("op1").innerHTML = "NuN";
};