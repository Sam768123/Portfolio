// app.js
angular.module('portfolioApp', [])
  .controller('MainController', ['$scope', function($scope) {

    // Profile
    $scope.name = "Soham Lingwat";
    $scope.profilePic = "prof.jpeg";

    // Sections
    $scope.sections = [
      {key: "personal", title: "Personal Info"},
      {key: "education", title: "Education"},
      {key: "hobbies", title: "Hobbies & Skills"},
      {key: "experience", title: "Work Experience"},
      {key: "certificates", title: "Certificates"},
      {key: "contact", title: "Contact"}
    ];

    // Toggle active section
    $scope.activeSection = null;
    $scope.toggleSection = function(key) {
      $scope.activeSection = ($scope.activeSection === key) ? null : key;
    };

    // Personal info
    $scope.personal = {
      name: "Soham Lingwat",
      location: "India",
      email: "soham.lingwat23@pcu.edu.in",
      about: "Enthusiastic developer building modern web apps with AngularJS & Java. Passionate about problem solving & clean code."
    };

    // Education
    $scope.education = [
      {level:"SSC", institution:"CMS English Medium High School", year:"2020-2021", marks:"91.20%"},
      {level:"HSC", institution:"SB Patil Junior College", year:"2022-2023", marks:"70%"},
      {level:"B.Tech 1st Year", institution:"Pimpri Chinchwad University", year:"2022", marks:"8.2 CGPA"},
      {level:"B.Tech 2nd Year", institution:"Pimpri Chinchwad University", year:"2023", marks:"8.5 CGPA"}
    ];

    // Hobbies & Skills
    $scope.hobbies = ["Dancing 💃","Music 🎵","Reading 📖"];
    $scope.skills = ["Java ☕","MySQL 💾"];

    // Work experience
    $scope.experience = [
      {title:"Python Developer Intern", company:"Acemgrade", duration:"Jun 2025 - Aug 2025",
       details:["Online Internship as Python developer","Built chatbot and explored Python libraries"]}
    ];

    // Certificates
    $scope.certificates = [
      {img:"cerf1.jpg"},
      {img:"cerf2.jpg"}
    ];

    // Contact
    $scope.contact = {
      linkedin:"https://www.linkedin.com/in/soham-lingwat-997b0428a/",
      github:"https://github.com/Sam768123"
    };

    // Modal image
    $scope.modalImage = null;
    $scope.openModal = function(img) {
      $scope.modalImage = img;
    };

  }]);
