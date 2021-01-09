var a = [24, 53, 78, 91, 12];
document.write("The array items are: ",a);
document.write("<br>");
a.sort((a, b)=>{
    return a -b;
});
var b = a.pop();
document.write("<br>");
document.write("The highest number in the given array is: ",b);
