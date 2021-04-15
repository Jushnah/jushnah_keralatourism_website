let mail = document.getElementById("staticEmail");
let pwrd =  document.getElementById("password");

function empty(){
    if(mail.value==""||pwrd.value==""){
        alert("Fields cannot be empty");
        return false;
    }
}

function eValidate() 
{
   
  if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail.value))
  {
    return (true)
  }else
    alert("You have entered an invalid email address!")
    return (false)
}

function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    var pwd = document.getElementById("password");
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Type Password';
        return false;
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'More Characters';
        document.getElementById("password").style.border="2px solid red";
        return false;
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green">Strong!</span>';
        document.getElementById("password").style.border="2px solid green";
        return true;
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
        document.getElementById("password").style.border="2px solid orange";
        return false;
    } else {
        strength.innerHTML = '<span style="color:red">Weak!</span>';
        document.getElementById("password").style.border="2px solid red";
        return false;
    }
}


function valid(){
    return (eValidate()&&passwordChanged()&&empty())
}
}



let phone =  document.getElementById("phone");
let inputCity =  document.getElementById("inputCity");
let inputState =  document.getElementById("inputState");
let inputpin =  document.getElementById("inputpin");
let gridCheck =  document.getElementById("gridCheck");
let username =  document.getElementById("username");



function fill(){
    if(mail.value==""||pwrd.value==""||phone.value==""||inputCity.value==""||inputState.value==""||inputpin.value==""||gridCheck.value==""||username.value==""){
        alert("Fields cannot be empty");
        return false;
    }
}


function phoneValidate(){
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(phone.value.match(phoneno))
        {
      return true;
        }
      else
        {
        alert("Invalid phone number");
        return false;
        }
       }

function Validate(){
            return (eValidate()&&passwordChanged()&&phoneValidate()&&fill())
        }
