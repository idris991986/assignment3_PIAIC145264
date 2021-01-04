var availableEducation = [];
availableEducation[0]=["SSC"];
availableEducation[1]=["HSC"];
availableEducation[2]=["BCS"];
availableEducation[3]=["BS"];
availableEducation[4]=["BCOM"];
availableEducation[5]=["MS"];
availableEducation[6]=["M.Phil."];
availableEducation[7]=["PhD"];
document.write("Qualifications");
document.write("<br>");
for (i=0; i<availableEducation.length; i++){
    document.write("<br>");
    document.write((i+1)+") "+availableEducation[i]);
}