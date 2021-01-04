var colors = ["Blue","Green","Yellow","Black","Pink","Purple"];
document.write("Old Elements are : "+colors);
document.write("<br>");document.write("<br>");
var index1 = Number(prompt("Please enter the desired position at which you want to delete color?"));
var index2 = Number(prompt("How many colors you want to delete?"));
colors.splice(index1--,index2);
document.write("Updated Elements are : "+colors);