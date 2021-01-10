var a = [10 , 20, 4, 40, 60, 70];
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var c = b.concat(a);
document.write("The merged array is ",c);
document.write("<br>");document.write("<br>");
for (i=0; i<c.length; i++){
    for (j=(1+i); j<c.length; j++){
        if (c[i] === c[j]){
            c.splice(j,1);
        }
    }
}
document.write("The merged array without duplicate is ",c);