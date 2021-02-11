name_of_student_array = [];

function submit()  {
  var display_student_array = [];
  for (var j = 1; j <= 4;j++)
  {
      var name_of_student = document.getElementById("name_"+j).value;
      console.log(name_of_student);
      name_of_student_array.push(name_of_student);
  }
    console.log(name_of_student_array);
    var length_of_name_of_student =  name_of_student_array.length;
    console.log(length_of_name_of_student);

    for ( var k=0; k< length_of_name_of_student; k++){
        display_student_array.push("name-" name_of_student_array [k]);
        console.log(display_student_array);
    }
        console.log(display_student_array); 
        document.getElementById("display_names_with_commas").innerHTML = display_student_array;
    var remove_commas =display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;


    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";


}

function sorting() {
   name_of_student_array.sort();
    console.log(name_of_student_array);
    var displaystudentarraysorting = [];
    var length_of_name_of_studentsarray = name_of_student_array.length;
    console.log(length_of_name_of_studentsarray);
     
     for (var k = 0; k< length_of_name_of_studentsarray; k++);
       {
               displaystudentarraysorting.push("name-" +name_of_student_array [k] );
               console.log(displaystudentarraysorting);
       } 
    
    var remove_commas = displaystudentarraysorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

}