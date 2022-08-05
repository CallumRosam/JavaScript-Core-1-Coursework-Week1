let numberOfStudents = 15;
let numberOfMentors = 8;
let totalPeople = numberOfStudents + numberOfMentors;
let studentPercentage = Math.round(numberOfStudents / totalPeople * 100);
let mentorPercentage = Math.round(numberOfMentors / totalPeople * 100);

console.log("Percentage students: " + studentPercentage + "%");
console.log("Percentage mentors: " + mentorPercentage + "%");
