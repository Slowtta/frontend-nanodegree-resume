var work ={
	"jobs": [{
		"employer": "Terfas.com",
		"title": "CEO",
		"location": "Tlemcen, Algeria",
		"dates": "Sept 2016",
		"description": "www.terfas.com is a website that helps people find skilled workers, and helps the workers to find a job it's not a recutement platforme, it's all about trensparency in construction field."
	}, {
		"employer": "ETBC",
		"title": "Concrete Batch Plant Operator",
		"location": "Remchi Tlemcen, Algeria",
		"dates": "From Dec 2015 to Jun 2016",
		"description": "Before I engage in this job as an operator (a guy who manages the automatic production of a concrete plant), I knew nothing about the concrete, I remember the day my boss presented the Machine it was a Frumecar model ECA-1002, I ask if the silos contains water, he did not answered but hired me anyway, after that I find out that silos contains ciment, that was awkward, after 7 months I learned a lot about the construction field. Moral of The story dirt is learning."
	}, {
		"employer": "ClubZ",
		"title": "Pedalo renter",
		"location": "Portsay Maghnia Tlemcen, Algeria",
		"dates": "Summers 2015 and 2016",
		"description": "I just rent pedalos"
	}, {
		"employer": "Relax",
		"title": "Internetcafe manager and Designer",
		"location": "Tlemcen, Algeria",
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
	]
}];
var bio={
	"name": "Mohammed Habib DERRAR",
	"Role": "Lifelong Learner",
    "Contacts": {
        "mobile": "+213 542 237 621",
        "email": "bovitch.md@gmail.com",
        "github": "Slowtta",
        "twitter": "@Slowtta",
        "location": "Tlemcen, Algeria"
    },
    "skills":[],
	"welcomeMessage": "",
	"biopic": "images/me.jpg"
};
var education={
	"schools": [{
		"name": "Lycée frères Attar",
		"location": "Chetouane, Tlemcen",
		"degree": "Degree in chemical engineering",
		"dates": "Jun 2011"
	}, {
		"name": "Prep-technical Sciences",
		"location": "Tlemcen",
		"degree": "2nd year Common core",
		"dates": "From 2011 to 2013"
	}, {
		"name": "Mathematics and Computer Science",
		"location": "Tlemcen",
		"degree": "IT Bachelor's degree",
		"dates": "2014"
	}],
	"OnlineCourses": [{
		"title": "Front end developer",
		"school": "Free Code camp",
		"dates": "Jun 2016",
		"url": "https://www.freecodecamp.com/slowtta"
	}, {
		"title": "Front-End Web Developer",
		"school": "Udacity",
		"dates": "Sep 2016",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}, {
		"titel": "Statistics and probability",
		"school": "KhanAcademy",
		"dates": "Oct 2016",
		"url": "https://www.khanacademy.org/mission/probability"
	}, {
		"titel": "Precalculus",
		"school": "KhanAcademy",
		"dates": "Oct 2016",
		"url": "https://www.khanacademy.org/math/precalculus"
	}]
};

bio.display =function()
{
var formattedName=HTMLheaderName.replace("%data%",bio.name);
var formattedRole=HTMLheaderRole.replace("%data%",bio.Role);
$("#header").prepend(HTMLbioPic.replace("%data%",bio.biopic));
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(HTMLmobile.replace("%data%",bio.Contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%",bio.Contacts.email));
$("#topContacts").append(HTMLtwitter.replace("%data%",bio.Contacts.twitter));
$("#topContacts").append(HTMLgithub.replace("%data%",bio.Contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%",bio.Contacts.location));
};
bio.display();
function displaywork(){
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
displaywork();
$(document).click(function(loc) {
	var x=loc.pageX;
	var y=loc.pageY;
	logClicks(x,y);
});
projects.display =function(){
	for(var i=0;i<projects.length;i++)
	{
	$("#projects").append(HTMLprojectStart);
	$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects[i].title));
	$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects[i].dates));
	$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects[i].description));
	for(var j=0;j<projects[i].images.length;j++)
	{
		$(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects[i].images[j]));
	}
}
};
projects.display();