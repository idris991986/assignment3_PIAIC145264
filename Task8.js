var a = [];
for (i=1; i<=15; i++){
    a.push(i);
}
document.write("a. Counting: ",a);
document.write("<br>");document.write("<br>");
var b = a.reverse();
document.write("b. Reverse counting: ",b);
var c = [];
var d = [];
for (i=0; i<=20; i++){
    if (i%2 === 0){
        c.push(i);
    }
    else{
        d.push(i);
    }
}
document.write("<br>");document.write("<br>");
document.write("c. Even: ",c);
document.write("<br>");document.write("<br>");
document.write("d. Odd: ",d);
var e =[];
for (i=1; i<=20; i++){
    if (i%2 === 0){
        e.push(i+"k");
    }
}
document.write("<br>");document.write("<br>");
document.write("e.Series: ",e);