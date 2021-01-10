var array = [3,"a","a","a",2,3,"a",3,"a",2,4,9,3];
var newArray =[];
document.write("Given Sample [",array,"]");
document.write("<br>");
for (i=0; i<array.length; i++){
    for (j=i+1; j<array.length; j++){
        if ( array[i] === array[j]){
            array[j] = " ";
        }
    }
    if (array[i] !== " "){
        newArray.push(array[i])
    }
}
document.write("<br>");document.write("<br>");
document.write("Output Sample [",newArray,"]");