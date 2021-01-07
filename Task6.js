var aCities = ["Karachi","Lahore","Islamabad","Faisalabad"];
var o = ["th","st","nd","rd"];

for(i=0; i<3; i++){
    for(j=i; j<o.length; j++){
        document.write("<br>");
        document.write(++j +o[j]+"Chocie is "+aCities[i]);
        break;
    }
}