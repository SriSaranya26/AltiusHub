function validate()
{
   
    let fname=document.getElementById('fname').value;
    let lname=document.getElementById('lname').value
    let password=document.getElementById('password').value
    let uname=document.getElementById('uname').value

    if(password.length<6)
    {
        alert("min password length is 6")
        
    }

    
    alert("Now Login")
    
}

function pass()
{
    let password=document.getElementById('password').value
    return password;
}

function profile()
{
    let fname=document.getElementById('fname');
    let lname=document.getElementById('lname');
    document.write(fname)

    document.getElementById('name').innerHTML=fname+" "+lname;
}

