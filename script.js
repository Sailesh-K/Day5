//1
let resume={
    "firstName": "Sailesh",
    "lastName" : "Kumar",
    "desc": "An Aspiring Software Developer",
    "email" : "saileshkveeran@gmail.com",
    "education" : {
        "college":{
            "clgName" : "PSG Institue of Technology and Applied Research",
            "degree" : "B.E",
            "dept" : "Electronics and Communication Engineering",
            "batch" : 2024,
            "CGPA" : 8.00
        },
        "school":{
            "sclName":"CS Academy",
            "batch" : 2020,
            "ovr" : 90.4
        }
    },
    "aoi" : ["Communication Networks","Database Management System"],
    "skills" : ["HTML","CSS","C","C++","Java","Python","Figma","Photoshop"]
}

for(var i in resume)
{
    console.log(i,resume[i]);
}

//to iterate using for loop
let keys = Object.keys(resume); //creates an array of keys
for(var i=0;i<keys.length;i++)
{
    console.log(keys[i],resume[keys[i]]);
}