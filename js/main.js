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
  var result = "";

  while(!validRating && result !== null) {
    result = window.prompt("We would like for you to review . Please enter a rating between 0.0 - 5.0?");
    if(result && !isNaN(result) && result >= 0 && result <= 5) {
      rating = Number(result);
      validRating = true;
      addTeacherRating(ratings, rating);
      alert("Thanks for your review! " + teacher + "'s average rating is now " + getAverageRating(ratings)+ ".");
    }
  }
}

var avgRating = getAverageRating(ratings);
// console.log("Teacher: " + teacher);
// console.log("Department: " + dept);
// console.log("Ratings: " + formatRatingsList(ratings));
// console.log("Avg Rating: " + avgRating);
// promptForUserReview(teacher, ratings);

// STUDENT
var name = "Charlie Brown";
var major = "Math";
var email = "charlie@cg.edu";
var GPA = 4.0;
var collegeGraduationYear = null;
var collegeGraduationMonth = null;
var currentYear = new Date().getFullYear();

// console.log("Student: " + name);
// console.log("Major: " + major);
// console.log("Email: " + email);
// console.log("GPA: " + GPA.toFixed(1));

function promptForGraduationYear() {
  var validResponse = false;
  var result = "";
  var attempts = 0;
  var promptMessage = "Please enter your college graduation year";
  var additionalPromptMessage = `.\nCollege graduation year should be a number between ${currentYear} and ${currentYear + 7}.`;

  while(!validResponse && result !== null) {
    result = window.prompt(promptMessage);
    if(result && !isNaN(result) && result >= currentYear && result < currentYear + 8) {
      collegeGraduationYear = Number(result);
      validResponse = true;
    } else if(attempts === 0) {
        promptMessage += additionalPromptMessage;
    }
    attempts += 1;
  }
}

function promptForGraduationMonth() {
  var validResponse = false;
  var result = "";
  var attempts = 0;
  var promptMessage = "What month will you graduate?";
  var additionalPromptMessage = ".\nGraduation month should be May or December.";

  while(!validResponse && result !== null) {
    result = window.prompt(promptMessage);
    if(result && (result.toUpperCase() === "MAY" || result.toUpperCase() === "DECEMBER")) {
      collegeGraduationMonth = result;
      validResponse = true;
    } else if(attempts === 0) {
        promptMessage += additionalPromptMessage;
    }
    attempts += 1;
  }
}

var welcomeCollegeStudent = function(level) {
  alert(`Welcome ${level}!`);
}

var welcomeHighSchoolStudent = function(level) {
  alert(`You're still a ${level} in high school!`);
}

function welcomeStudentsByGraduatingClass(gradMonth, gradYear, welcome) {
  var yearsToGraduation = 0;
  if(gradYear > currentYear + 3) {
    yearsToGraduation = gradYear % (currentYear + 4);
  } else {
    yearsToGraduation = gradYear % currentYear;
  }

  switch(yearsToGraduation) {
    case 0:
      welcome("Senior");
      break;
    case 1:
      welcome("Junior");
      break;
    case 2:
      welcome("Saxophone");
      break;
    case 3:
      welcome("Freshman");
      break;
  }
}

function promptForGraduationInfo() {
  promptForGraduationYear();
  promptForGraduationMonth();

  if(collegeGraduationYear > currentYear + 3) {
    // console.log("You are in high school.");
    welcomeStudentsByGraduatingClass(collegeGraduationMonth, collegeGraduationYear, welcomeHighSchoolStudent);
  } else {
    // console.log("You are in college.");
    welcomeStudentsByGraduatingClass(collegeGraduationMonth, collegeGraduationYear, welcomeCollegeStudent);
  }
}

promptForGraduationInfo();

// COURSE
var dept = "Physics";
var courseName = "Astronomy";
var course = [dept, courseName];

// console.log("Department: " + course[0]);
// console.log("Course Name: " + course[1]);

var courses = [
  ["Physics", "Astronomy"],
  ["History", "European Civilization"],
  ["Math", "Geometry"],
  ["Literature", "American Classics"],
  ["Music", "Saxophone"],
  ["Music", "Guitar"]
];

function filterByDept(courses, department) {
  filteredCourses = [];
  for (course in courses) {
    if(courses[course][0] === department) {
      filteredCourses.push(courses[course]);
    }
  }
  return filteredCourses;
}

// console.log("Result of filtering by Music: " , filterByDept(courses, "Music"));

function promptForDepartment() {
  var validDept = false;
  var result = "";

  while(!validDept && result !== null) {
    result = window.prompt("What department would you like to search for courses?");
    if(result) {
      validDept = true;
      filteredCourses = filterByDept(courses, result);
      if(filteredCourses.length > 0) {
        var formattedCourses = "";
        for (course in filteredCourses) {
          formattedCourses += (filteredCourses[course][1] + "\n");
        }
        alert("Courses in " + result + "Department:\n\n" + formattedCourses);
      } else {
        alert("There are no courses for the " + result + " department.");
      }
    }
  }
}

// promptForDepartment();
