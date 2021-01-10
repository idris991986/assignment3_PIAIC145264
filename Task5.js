var a = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9,3];
document.write("Given Sample [",a,"]");
for (i=0; i<a.length; i++){
    for (j=(i+1); j<a.length; j++){
        if (a[i] === a[j]){
            a.splice(j,j);   
        }
    }
}
document.write("<br>");document.write("<br>");
document.write("Sample Output [",a,"]");