var arr = [24, 53, 78, 4, 91, 12]; 
document.write("The array items are: ",arr);
document.write("<br>");
document.write("<br>");
arr.sort((a, b)=>{
    return a-b
});
document.write("The array items are: ",arr);