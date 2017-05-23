var bio = {
  name: "Rodrigo Ribeiro",
  role: "Web Developer",
  contacts: {
    mobile: "444-4444",
    email: "rodrigo.rb.dev@gmail.co",
    github: "digaodev",
    twitter: "@digaodev",
    location: "São Paulo",
  },
  welcomeMessage: "Trying to learn front-end",
  skills: ["HTML", "CSS", "JS"],
  biopic: "images/tiny_rick1.jpg",
  display: function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedContactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedContactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedContactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedContactMobile);
    $("#topContacts").append(formattedContactEmail);
    $("#topContacts").append(formattedContactTwitter);
    $("#topContacts").append(formattedContactGithub);
    $("#topContacts").append(formattedContactLocation);

    $("#footerContacts").append(formattedContactMobile);
    $("#footerContacts").append(formattedContactEmail);
    $("#footerContacts").append(formattedContactTwitter);
    $("#footerContacts").append(formattedContactGithub);
    $("#footerContacts").append(formattedContactLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    $("#header").append(HTMLskillsStart);
    var formattedSkills;
    bio.skills.forEach(function (skill) {
      formattedSkills = HTMLskills.replace("%data%", skill);
      $("#skills").append(formattedSkills);
    });

  }
}; // end bio

var education = {
  schools: [{
      name: "FIAP",
      location: "Av. Paulista, 1106, São Paulo",
      degree: "SOA",
      majors: ["SOA"],
      dates: "01-01-2016 - 01-01-2017",
      url: "www.fiap.com.br"
    },
    {
      name: "Mackenzie",
      location: "R. da Consolação, 930, São Paulo",
      degree: "Information Systems",
      majors: ["IS"],
      dates: "01-01-2008 - 01-01-2012",
      url: "www.mackenzie.com.br"
    }
  ],
  onlineCourses: [{
    title: "Front-End Nanodegree",
    school: "Udacity",
    dates: "01-01-2017 - 01-08-2017",
    url: "www.udacity.com"
  }],
  display: function () {
    var formattedSchoolName,
      formattedSchoolDegree,
      formattedSchoolDates,
      formattedSchoolLocation,
      formattedSchoolMajor;

    this.schools.forEach(function (school) {
      {
        formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);
      }
    });

    var formattedOnlineTitle,
      formattedOnlineSchool,
      formattedOnlineDates,
      formattedOnlineURL;

    this.onlineCourses.forEach(function (course) {
      formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
      formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
      formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
      formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url);

      $("#education").append(HTMLonlineClasses);
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedOnlineTitle);
      $(".education-entry:last").append(formattedOnlineSchool);
      $(".education-entry:last").append(formattedOnlineDates);
      $(".education-entry:last").append(formattedOnlineURL);
    });
  }
}; //end education

var work = {
  jobs: [{
      employer: "Freelance",
      title: "Web Developer",
      location: "Seattle, WA",
      dates: "in progress",
      description: "Web dev and design projects"
    },
    {
      employer: "DN",
      title: "SQA",
      location: "Barra Funda, São Paulo",
      dates: "01-10-2014 - 01-04-2017",
      description: "Projects on ATMs"
    }
  ],
  display: function () {
    var formattedWorkEmployer,
      formattedWorkTitle,
      formattedWorkDates,
      formattedWorkLocation,
      formattedWorkDescription,
      formattedWorkEmployerTitle;

    this.jobs.forEach(function (job) {
      formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
      formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
      formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
      formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
      formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
      formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;

      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(formattedWorkEmployerTitle);
      $(".work-entry:last").append(formattedWorkDates);
      $(".work-entry:last").append(formattedWorkLocation);
      $(".work-entry:last").append(formattedWorkDescription);
    });
  }
};

var projects = {
  projects: [{
      title: "Music Player app",
      dates: "01-04-2017",
      description: "A stylish music player for all your songs",
      images: ["images/player-375w.png"]
    },
    {
      title: "Savings app",
      dates: "01-03-2017",
      description: "A savings app to help you achieve your financial goals",
      images: ["images/treasury-splash-375w.jpg"]
    },
    {
      title: "News app",
      dates: "01-02-2017",
      description: "A news app to stay up-to-date",
      images: ["images/news-home-375w.jpg"]
    }
  ],
  display: function () {
    var formattedSProjectTitle,
      formattedProjectDates,
      formattedProjectDescription,
      formattedProjectImage;

    projects.projects.forEach(function (project) {
      formattedSProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
      formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
      formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
      formattedProjectImage = HTMLprojectImage.replace("%data%", project.images[0]);

      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(formattedSProjectTitle);
      $(".project-entry:last").append(formattedProjectDates);
      $(".project-entry:last").append(formattedProjectDescription);
      $(".project-entry:last").append(formattedProjectImage);
    });
  }
};

bio.display();
work.display();
projects.display();
education.display();

function inName(name) {
  console.log(name);
    var firstName = "";
    var secondName = "";
    var nameArray = name.split(" ");
    firstName = nameArray[0].toLowerCase();
    secondName = nameArray[1].toUpperCase();
    for (var i = 0; i < firstName.length; i++) {
        if (i === 0) {
            firstNameTemp = firstName.charAt(i).toUpperCase();
        } else {
            firstNameTemp += firstName.charAt(i);
        }
    }
    var nameFormated = firstNameTemp + " " + secondName;
    return nameFormated;
}

/* INTERNATIONALIZE NAME SECTION */
$("#header").append(internationalizeButton);

function inName() {
  return bio.name.split(" ")[0] + " " + bio.name.split(" ")[1].toUpperCase();
}

/* MAP SECTION */
$("#mapDiv").append(googleMap);