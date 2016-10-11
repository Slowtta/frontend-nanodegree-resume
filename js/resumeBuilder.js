/* var formattedName=HTMLheaderName.replace("%data%","Habib Derrar");
var formattedRole=HTMLheaderRole.replace("%data%","Lifelong Learner");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var bio ={
	"Name":"Derrar Habib",
	"Role":"Lifelong Learner",
	"Skills":["Programming","Drummer","Painting","Coolness"],
	"PictureURL":"images/me.jpg",
	"Contacts": {
		"mobile":"+213 542 237 621",
		"github":"/Slowtta",
		"twitter":"/Slowtta",
		"location":"Tlemcen, Algeria"
	},
};
bio["city"]="Tlemcen";
$("#main").append(bio.Name);
$("#main").append(bio.Skills);
$("#main").append(bio.Role);
$("#main").append(bio["city"]);
$("#main").append(bio.Contacts.mobile);
*/
var work ={
	"jobs":[
	{"Terfas":{
		"employer":"Terfas.com",
		"title":"CEO",
		"location":"Tlemcen, Algeria",
		"dates":"Sept 2016",
		"description":"www.terfas.com"
	}},
	{"CBPO":{
		"employer":"ETBC",
		"title":"Concrete Batch Plant Operator",
		"location":"Remchi Tlemcen, Algeria",
		"dates":"From Dec 2015 to Jun 2016",
		"description":"Well! concrete is not that bad"
	}},
	{"Pedalo":{
		"employer":"ClubZ",
		"title":"Pedalo renter",
		"location":"Portsay Maghnia Tlemcen, Algeria",
		"dates":"Summers 2015 and 2016",
		"description":"I just rent pedalos"
	}},
	{"InternetCafe":{
		"employer":"Relax",
		"title":"Internetcafe manager and Designer",
		"location":"Tlemcen, Algeria",
		"dates":"From 2012 to 2014",
		"description":"Some managerial skills"
	}}
	]
};
var projects=[
{
	"title":"Terfas",
	"dates":"StaticV lunch Dec 2016",
	"description":"Terfas is a rare truffle",
	"images":[
	"Projects/Terfas/img/Home3.png"
	]
}
],
var bio={
	"name": "Mohammed Habib Derrar",
	"Role": "Lifelong Learner",
	"welcomeMessage": "",
	"biopic": "",
	"Contacts": {
		"mobile": "+213 542 237 621",
		"email": "bovitch.md@gmail.com",
		"github": "Slowtta",
		"twitter": "Slowtta",
		"location": "Tlemcen, Algeria"
	}
};
var education={
	"schools":[
	{
		"AttarBros":{
			"name":"Lycée frères Attar",
			"location":"Chetouane, Tlemcen",
			"degree":"Degree in chemical engineering",
			"dates":"Jun 2011"
		},
		"EPST":{
			"name":"Prep-technical Sciences",
			"location":"Tlemcen",
			"degree":"2nd year Common core",
			"dates":"From 2011 to 2013"
		},
		"MI":{
			"name":"Mathematics and Computer Science",
			"location":"Tlemcen",
			"degree":"IT Bachelor's degree",
			"dates":"2014"
		}
	}
	],
	"OnlineCourses":[
	{
		"FCC":{
			"titel":"Front end developer",
			"school":"Free Code camp",
			"dates":"Jun 2016",
			"url":"https://www.freecodecamp.com/slowtta"
		}
	},
	{
		"Udacity":{
			"titel":"Front-End Web Developer",
			"school":"Udacity",
			"dates":"Sep 2016",
			"url":"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	},
	{
		"Khanacademy":{
		"Statistics":{
			"titel":"Statistics and probability",
			"school":"KhanAcademy",
			"dates":"Oct 2016",
			"url":"https://www.khanacademy.org/mission/probability"
			},
		"Algebra":{
			"titel":"Precalculus",
			"school":"KhanAcademy",
			"dates":"Oct 2016",
			"url":"https://www.khanacademy.org/math/precalculus"
		}
		}
	}
	]
};