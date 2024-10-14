function loginValidate(rpassword)
{
    
    let lpassword=document.getElementById("password")//password from login
    if(rpassword!=lpassword)
    {
        alert("Invalid password")
    }
}