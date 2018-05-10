console.log("This file is linked");

// Display section when its link is clicked
function openSection(event, sectionName) {
  var sectionContents = document.getElementsByClassName("sectionContent");

  for (var i = 0; i < sectionContents.length; i++) {
    sectionContents[i].style.display = "none";
  }

  document.getElementById(sectionName).style.display = "flex";
}

// TEACHER
var teacher = "Sally Brown";
var dept = "Physics";
var ratings = [3.4, 5.0, 4.2];

function getAverageRating(ratings) {
  var sum = 0;
  for (var i = 0; i < ratings.length; i++) {
    sum += ratings[i];
  }
  return (sum / ratings.length).toFixed(1);
}

function formatRatingsList(ratings) {
  var list = "";
  for (var i = 0; i < ratings.length; i++) {
    list += ratings[i].toFixed(1);
    if (i != (ratings.length - 1)) {
      list += ", ";
    }
  }
  return list;
}

function addTeacherRating(ratings, newRating) {
  ratings.push(newRating);
  return ratings;
}

function promptForUserReview(teacher, ratings) {
  var validRating = false;

  while(!validRating) {
    result = window.prompt("We would like for you to review . Please enter a rating between 0.0 - 5.0?");
    if(result && !isNaN(result) && result >= 0 && result <= 5) {
      rating = Number(result);
      validRating = true;
      addTeacherRating(ratings, rating);
      alert("Thanks for your review! " + teacher + "'s average rating is now " + getAverageRating(ratings)+ ".")
    }
  }
}

var avgRating = getAverageRating(ratings);
console.log("Teacher: " + teacher);
console.log("Department: " + dept);
console.log("Ratings: " + formatRatingsList(ratings));
console.log("Avg Rating: " + avgRating);
promptForUserReview(teacher, ratings);
console.log("Ratings: " + formatRatingsList(ratings));

// STUDENT
var name = "Charlie Brown";
var major = "Math";
var email = "charlie@cg.edu";
var GPA = 4.0;

console.log("Student: " + name);
console.log("Major: " + major);
console.log("Email: " + email);
console.log("GPA: " + GPA.toFixed(1));

// COURSE
var dept = "Physics";
var courseName = "Astronomy";
var courseTeacher = "Sally Brown";
var semester = "Fall 2018";

console.log("Department: " + dept);
console.log("Course Name: " + courseName);
console.log("Teacher: " + courseTeacher);
console.log("Semester: " + semester);
