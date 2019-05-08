var objPeople= {

}

function getInfo () {
var username=document.getElementById("newUser").value;
var password=document.getElementById("newPassword").value;
var renewPassword=document.getElementById("renewPassword").value;

// var form2=document.getElementById("form2").value
// var form=document.getElementById("form").value
// var form=document.getElementById("form3").value



if(password==renewPassword) {
    if(username.includes("@")) {
      form2.style.display="block";
      form.style.display="none";
      objPeople.username=username;
      objPeople.password=password;    
    } else {
      alert("username is not confirmed")
    }


} else {
  alert("passwords are not confirmed")
}
} 
  
function myFunction(){
var username=document.getElementById("username").value
var password=document.getElementById("password").value 

if (objPeople.username==username){ 
  if(objPeople.password==password){
    form3.style.display="block"
    form2.style.display="none";
  } else {
    alert('password is incorrect')
  }

}else {
  alert("username is incorrect")
}
}
