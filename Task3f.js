var colors = ["Blue","Green","Yellow"];
document.write("Old Elements are : "+colors);
document.write("<br>");document.write("<br>");
var newColor = prompt("Please enter your favorite color?");
var colorsIndex = Number(prompt("Please enter the desired position of your color?"));
colors[colorsIndex] = newColor;
document.write("New Elements are : "+colors);