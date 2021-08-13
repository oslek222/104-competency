var salon={
    name:"pet shop",
    phone:"555-555-5555",
    address:{
        strret:"palm",
        number:"345"
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    
    pets:[]
}

var counter=0;
class Pet{
    constructor(name,age,gender, breed,service,ownerName,
        contactPhone){
            this.name=name;
            this.age=age;
            this.gender=gender;
            this.breed=breed;
            this.service=service;
            this.ownerName=ownerName;
            this.contactPhone=contactPhone;
            this.Id=counter++;
        }
}




function displayInfo(){
document.getElementById("footer-size").innerHTML=`
<p>${salon.name}</p>
<p>${salon.address.street}, ${salon.address.number} phone number: ${salon.phone}
<p>the salon is open from ${salon.hours.open} to ${salon.hours.close}</p>
`;
}


function register(){
// create vars and store value
var nameInput= document.getElementById("petName").value;
var ageInput= document.getElementById("petAge").value;
var genderInput= document.getElementById("petGender").value;
var breedInput= document.getElementById("petBreed").value;
var serviceInput= document.getElementById("petService").value;
var ownerNameInput= document.getElementById("ownerName").value;
var contactPhoneInput= document.getElementById("contactPhone").value;
console.log(nameInput, ageInput,genderInput,breedInput,serviceInput,ownerNameInput,contactPhoneInput);
if(nameInput!="" && contactPhoneInput!=""){
//create object
var thePet = new Pet (nameInput, ageInput,genderInput,breedInput,serviceInput,ownerNameInput,contactPhoneInput);
//push object
salon.pets.push(thePet);
console.log(thePet);
clearInputs();
displayPets();
var alertElement=document.getElementById("alert");
alertElement.classList.remove("hide");
setTimeout(function(){
    alertElement.classList.add("hide");
},2000);
}else{
    alert("add required clientInformation.");
}
}
function clearInputs(){
document.getElementById("petName").value="";
document.getElementById("petAge").value="";
document.getElementById("petGender").value="";
document.getElementById("breed").value="";
document.getElementById("service").value="";
document.getElementById("ownerName").value="";
document.getElementById("contactOwner").value="";

}
function displayPets(){
    var tmp="";
    for(var i=0;i<salon.pets.length;i++){
       tmp+=`
       <tr id="${salon.pets[i].Id}">
        <td> ${salon.pets[i].name} </td>
        <td> ${salon.pets[i].age} </td>
        <td> ${salon.pets[i].gender} </td>
        <td> ${salon.pets[i].breed} </td>
        <td> ${salon.pets[i].service} </td>
        <td> ${salon.pets[i].ownerName} </td>
        <td> ${salon.pets[i].contactPhone} </td>
        <td><button onclick="deletePet(${salon.pets[i].Id});" class="delete-btn">🗑️</button></td>
        </tr>`;

    }
    document.getElementById('table-pets').innerHTML=tmp;
}

function deletePet(petId){
console.log("delete pet"+petId);

for(var i=0;i<salon.pets.length;i++){
    if(petId===salon.pets[i].Id){
       indexDelete=i;
       break;
    }
}
salon.pets.splice(indexDelete,1); 
document.getElementById(petId).remove();
}

function searchPet(){
    var searchString=document.getElementById('searchPet').value;
    for(var i=0;i<salon.pets.length;i++){
        if(searchString===salon.pets[i].name){
            var row = salon.pets[i].Id;
           document.getElementById(row).classList.add('highlight');
        }
    }
}


function init(){ 

    const scooby=new Pet("scooby",60,"male","dane","full service","shaggy",
    "555-555-5555")
    const scrappy=new Pet("scrappy",50,"male","dane","full service","shaggy",
    "555-555-5555")
    const gizmo=new Pet("gizmo",60, "male","chug","full service",
"shaggy", "555-555-5555" );
    
    salon.pets.push(scooby,scrappy,gizmo);
    displayPets();

}
window.onload=init;