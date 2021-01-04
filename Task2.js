var students=["Michael","John","Tony"];
var score=[320,230,480];
var totalMarks = 500;
for (i=0; i<students.length; i++){
        document.write("Score of "+students[i]+" is "+score[i]+". Percentage: "+(score[i]/totalMarks*100)+"%");
        document.write("<br>");
}