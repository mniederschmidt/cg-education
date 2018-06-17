// console.log("This file is linked");

// Display section when its link is clicked
function openSection(event, sectionName) {
  var sectionContents = document.getElementsByClassName("sectionContent");

  for (var i = 0; i < sectionContents.length; i++) {
    sectionContents[i].style.display = "none";
  }

  document.getElementById(sectionName).style.display = "flex";
}

// TEACHER
function Teacher(name, dept) {
  this.name = name;
  this.dept = dept;
  this.ratings = [];
}

Teacher.prototype = {
  addRating: function(newRating) {
    this.ratings.push(newRating);
  },
  getAverageRating: function() {
    var sum = 0;
    for (var i = 0; i < this.ratings.length; i++) {
      sum += this.ratings[i];
    }
    return (sum / this.ratings.length).toFixed(1);
  },
  getFormattedRatingsList: function() {
    var list = "";
    for (var i = 0; i < this.ratings.length; i++) {
      list += this.ratings[i].toFixed(1);
      if (i != (this.ratings.length - 1)) {
        list += ", ";
      }
    }
    return list;
  }
};

var sally = new Teacher("Sally Brown", "Physics");
var marvin = new Teacher("Marvin Hill", "History");
var lucy = new Teacher("Lucy Van Pelt", "Math");
var patty = new Teacher("Peppermint Patty", "Literature");
var sherman = new Teacher("Sherman Smith", "Music");
console.log(sally.name);
console.log(sally.dept);

function promptForUserReview(teacher) {
  var validRating = false;
  var result = "";

  while(!validRating && result !== null) {
    result = window.prompt("We would like for you to review " + teacher.name + ". Please enter a rating between 0.0 - 5.0?");
    if(result && !isNaN(result) && result >= 0 && result <= 5) {
      rating = Number(result);
      validRating = true;
      teacher.addRating(rating);
      alert("Thanks for your review! " + teacher.name + "'s average rating is now " + teacher.getAverageRating()+ ".");
    }
  }
}

// var sally = teacher;
promptForUserReview(sally);
promptForUserReview(sally);
console.log("Sally's ratings: " + sally.getFormattedRatingsList());
console.log("Sally's average rating: " + sally.getAverageRating());

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
  var additionalPromptMessage = `.\nCollege graduation year should be numeric and ${currentYear} or later.`;

  while(!validResponse && result !== null) {
    result = window.prompt(promptMessage);
    if(result && !isNaN(result) && result >= currentYear) {
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

var welcomeYoungerStudent = function() {
  alert("Whoa, college is some years away...");
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
      welcome("Sophomore");
      break;
    case 3:
      welcome("Freshman");
      break;
  }
}

function promptForGraduationInfo() {
  promptForGraduationYear();
  promptForGraduationMonth();

  if(collegeGraduationYear > currentYear + 7) {
    welcomeYoungerStudent();
  } else if(collegeGraduationYear > currentYear + 3) {
    // console.log("You are in high school.");
    welcomeStudentsByGraduatingClass(collegeGraduationMonth, collegeGraduationYear, welcomeHighSchoolStudent);
  } else {
    // console.log("You are in college.");
    welcomeStudentsByGraduatingClass(collegeGraduationMonth, collegeGraduationYear, welcomeCollegeStudent);
  }
}

// promptForGraduationInfo();

// COURSE
var course = {
  name: "Astronomy",
  dept: "Physics",
  teacher: Teacher,
  semester: "Fall 2018"
};

  // var course = [dept, courseName];

// console.log("Department: " + course[0]);
// console.log("Course Name: " + course[1]);
// console.log("Department: " + course["dept"]);
// console.log("Course Name: " + course["name"]);
//
// Testing after made teacher property an object
// console.log("teacher name: " + teacher.name);
// console.log("course name: " + course.dept + " " + course.name);
// console.log("course teacher name: " + course.teacher.name);

var courses = [
  {dept: "Physics", name: "Astronomy"},
  {dept: "History", name: "European Civilization"},
  {dept: "Math", name: "Geometry"},
  {dept: "Literature", name: "American Classics"},
  {dept: "Music", name: "Saxophone"},
  {dept: "Music", name: "Guitar"}
];

function filterByDept(department) {
  filteredCourses = [];
  for (course in courses) {
    if(courses[course].dept === department) {
      filteredCourses.push(courses[course]);
    }
  }
  return filteredCourses;
}

// console.log("Result of filtering by Music: " , filterByDept("Music"));

function promptForDepartment() {
  var validDept = false;
  var result = "";

  while(!validDept && result !== null) {
    result = window.prompt("What department would you like to search for courses?");
    if(result) {
      validDept = true;
      filteredCourses = filterByDept(result);
      if(filteredCourses.length > 0) {
        var formattedCourses = "";
        for (course in filteredCourses) {
          formattedCourses += (filteredCourses[course].name + "\n");
        }
        alert("Courses in " + result + "Department:\n\n" + formattedCourses);
      } else {
        alert("There are no courses for the " + result + " department.");
      }
    }
  }
}

// promptForDepartment();
