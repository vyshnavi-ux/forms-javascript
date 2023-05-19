function validate(){
    var name = document.forms['signUp']["name"].value;
    var passw = document.forms['signUp']["password"].value;
    console.log(name,passw);
   if(name == ""){
        alert("please enter name")
   }else if(passw == ""){
        alert("please enter password")
   }else{
        alert("the name is " + name + " " + "the password is " + passw);
   }
}