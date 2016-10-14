var work ={
	"jobs": [{
		"employer": "Terfas.com",
		"title": "CEO",
		"location": "paris",
		"dates": "Sept 2016",
		"description": "www.terfas.com is a website that helps people find skilled workers, and helps the workers to find a job it's not a recutement platforme, it's all about trensparency in construction field."
	}, {
		"employer": "ETBC",
		"title": "Concrete Batch Plant Operator",
		"location": "Tlemcen",
		"dates": "From Dec 2015 to Jun 2016",
		"description": "Before I engage in this job as an operator (a guy who manages the automatic production of a concrete plant), I knew nothing about the concrete, I remember the day my boss presented the Machine it was a Frumecar model ECA-1002, I ask if the silos contains water, he did not answered but hired me anyway, after that I find out that silos contains ciment, that was awkward, after 7 months I learned a lot about the construction field. Moral of The story dirt is learning."
	}, {
		"employer": "ClubZ",
		"title": "Pedalo renter",
		"location": "Port-say",
		"dates": "Summers 2015 and 2016",
		"description": "I just rent pedalos"
	}, {
		"employer": "Relax",
		"title": "Internetcafe manager and Designer",
		"location": "Tlemcen",
		"dates": "From 2012 to 2014",
		"description": "Some managerial skills"
	}]
};
var projects=[{
	"title": "Terfas",
	"dates": "lunch Dec 2016",
	"description": "Terfas is a rare truffle",
	"images": [
		"Projects/Trufe/Home3.png"
	],
	"url":""
}];
var bio={
	"name": "Mohammed Habib DERRAR",
	"Role": "Lifelong Learner",
	"Contacts": {
		"mobile": "+213 542 237 621",
		"email": "bovitch.md@gmail.com",
		"github": "Slowtta",
		"twitter": "Slowtta",
		"location": "Tlemcen"
	},
	"skills":["Mathematics","Physics","Programming","Drummer",],
	"welcomeMessage": "",
	"biopic": "images/me.jpg"
};
var education={
	"schools": [{
		"name": "Lycée frères Attar",
		"location": "Chetouane",
		"degree": "Degree in chemical engineering",
		"dates": "Jun 2011",
		"major": ""
	}, {
		"name": "Prep-technical Sciences",
		"location": "Bel Horizon Tlemcen",
		"degree": "2nd year Common core",
		"dates": "From 2011 to 2013",
		"major": ""
	}, {
		"name": "University AbouBaker Belkaid",
		"location": "Tlemcen",
		"degree": "Mathematics and Computer Sciences, IT Bachelor's degree",
		"dates": "2014",
		"major": ""
	}],
	"OnlineCourses": [{
		"title": "Frontend Developer",
		"school": "Free Code camp",
		"dates": "Jun 2016",
		"url": "https://www.freecodecamp.com/slowtta"
	}, {
		"title": "Front-End Web Developer",
		"school": "Udacity",
		"dates": "Sep 2016",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}, {
		"title": "Statistics and probability",
		"school": "KhanAcademy",
		"dates": "Oct 2016",
		"url": "https://www.khanacademy.org/mission/probability"
	}, {
		"title": "Precalculus",
		"school": "KhanAcademy",
		"dates": "Oct 2016",
		"url": "https://www.khanacademy.org/math/precalculus"
	}]
};

education.display=function(){
	for (var i=0;i<education.schools.length;i++){
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[i].name)+HTMLschoolDegree.replace("%data%",education.schools[i].degree));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[i].dates));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[i].location));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[i].major));
	};
$("#education").append(HTMLonlineClasses);

	for (i=0;i<education.OnlineCourses.length;i++){
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%",education.OnlineCourses[i].url)+HTMLonlineTitle.replace("%data%",education.OnlineCourses[i].title)+HTMLonlineSchool.replace("%data%",education.OnlineCourses[i].school));
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.OnlineCourses[i].dates));
	};
};

bio.display =function()
{
var formattedName=HTMLheaderName.replace("%data%",bio.name);
var formattedRole=HTMLheaderRole.replace("%data%",bio.Role);
$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(HTMLmobile.replace("%data%",bio.Contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%",bio.Contacts.email));
$("#topContacts").append(HTMLtwitter.replace(/%data%/gi,bio.Contacts.twitter));
$("#topContacts").append(HTMLgithub.replace(/%data%/gi,bio.Contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%",bio.Contacts.location));
};

work.display=function(){
	for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer =HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle =HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle =formattedEmployer + formattedTitle;
	var formattedDates =HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedLocation =HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDescription =HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedDates+formattedLocation);
	$(".work-entry:last").append(formattedDescription);
};
};

projects.display =function(){
	for(i=0;i<projects.length;i++)
	{
	$("#projects").append(HTMLprojectStart);
	$(".project-entry:last").append(HTMLprojectURL.replace("%data%",projects[i].url)+HTMLprojectTitle.replace("%data%",projects[i].title));
	$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects[i].dates));
	$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects[i].description));
	for(var j=0;j<projects[i].images.length;j++)
	{
		$(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects[i].images[j]));
	}
}
};

work.display();
projects.display();
education.display();
bio.display();


$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
