var A =["cake","apple pie","cookie","chips","patties"];
var input = prompt("Welcome to ABC Bakery. What would you like to order sir/ma'am?");
input.toLowerCase();
available = false;
for (i=0; i<=A.length; i++){
    if (input === A[i]){
        available = true;
        document.write(A[i]+" is <b>available</b> at index "+i+" in our bakery");
        break;
    }
}
if (!available){
    document.write(input+"is <b>not available</b> in our bakery");
}