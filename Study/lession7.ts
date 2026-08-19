// Array and its operations
let scores : number[] = [70, 78, 90, 99];
let student: string [] =["Ravi" , "Vijay" ,"Rahul", "Amit"];

// mixed Array
let priority:(number | string) [] = [1, "Ajay", "Vikky" , "CP"];

//accssing aaray element 
console.log(student[1]);  // Vijay

//use length() property
console.log(scores.length);

//Add element in student array 
student.push("Kamal");  //Added Kamal in aaray 
console.log(student); // print

// Remove last Element from student array - last element Remove me _POP() use hotahai 
student.pop();
student.pop(); //pop jtni war use hoga last se ek ek elment htta jayega
console.log(student); // print

// forEach  --> Loop through
student.forEach((item) => {

console.log(item);
})