var colors = ["Blue","Green","Yellow"];
document.write("Old Elements are : "+colors);
var newcolor = prompt("What color you want to add at the beginning?");
colors.unshift(newcolor);
document.write("<br>");document.write("<br>");
document.write("New Elements are : "+colors);