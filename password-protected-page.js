var password; 
var contraseña = "password";
password = windpromt("Enter the Password To View the Page',' ");
if (password==contraseña) {
    window.location="index.html";
} else {
    alert("Incorrect Password, click OK to enter.");

}