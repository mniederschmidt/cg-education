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
// console.log(sally.name);
// console.log(sally.dept);

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
// promptForUserReview(sally);
// promptForUserReview(sally);
// console.log("Sally's ratings: " + sally.getFormattedRatingsList());
// console.log("Sally's average rating: " + sally.getAverageRating());

// COURSE
function Course(name, dept, teacher, semester) {
  this.name = name;
  this.dept = dept;
  this.teacher = teacher;
  this.semester = semester;
}

// Testing after made teacher property an object
// console.log("teacher name: " + teacher.name);
// console.log("course name: " + course.dept + " " + course.name);
// console.log("course teacher name: " + course.teacher.name);

function Courses(courses) {
  this.courses = courses;
}

Courses.prototype = {
  getCourses: function() {
    return this.courses;
  },
  filterByDept: function(department) {
    var filteredCourses = [];
    for (course in this.courses) {
      if(this.courses[course].dept === department) {
        filteredCourses.push(this.courses[course]);
      }
    }
    return filteredCourses;
  }
}

var courses = [
  new Course("Astronomy", "Physics", sally, "Fall 2018"),
  new Course("European Civilization", "History", marvin, "Fall 2018"),
  new Course("Geometry", "Math", lucy, "Fall 2018"),
  new Course("American Classics", "Literature", patty, "Fall 2018"),
  new Course("Saxophone", "Music", sherman, "Fall 2018"),
  new Course("Guitar", "Music", sherman, "Fall 2018")
];

var cgCourses = new Courses(courses);
// console.log("Result of filtering by Music: " , cgCourses.filterByDept("Music"));

function promptForDepartment() {
  var validDept = false;
  var result = "";

  while(!validDept && result !== null) {
    result = window.prompt("What department would you like to search for courses?");
    if(result) {
      validDept = true;
      var filteredCourses = cgCourses.filterByDept(result);
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

// STUDENT
function Student(name, major, email, gradePointAverage) {
  this.name = name;
  this.major = major;
  this.email = email;
  this.gpa = gradePointAverage;
  this.courses = [];
}

Student.prototype = {
  addCourse: function(course) {
    this.courses.push(course);
  },
  dropCourse: function(courseName) {
    for (course in this.courses) {
      if(this.courses[course].name === courseName) {
        this.courses.pop(this.courses[course]);
      }
    }
  },
  changeMajor: function(newMajor) {
    this.major = newMajor;
  }
}

var charlie = new Student("Charlie Brown", "Math", "charlie@cg.edu", 4.0);

var students = [
  new Student("Violet Gray", "Math", "violet@cg.edu", 4.0),
  new Student("Franklin Armstrong", "Music", "franklin@cg.edu", 4.0),
  new Student("Linus Van Pelt", "Literature", "linus@cg.edu", 4.0),
  new Student("Woodstock", "Philosophy", "woodstock@cg.edu", 4.0)
];

students.push(charlie);

console.log("Charlie Brown (Student): ", charlie);
console.log("Adding Course: " , cgCourses.courses[2]);
charlie.addCourse(cgCourses.courses[2]);
console.log("Now they are taking... \n" , charlie.courses);

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
