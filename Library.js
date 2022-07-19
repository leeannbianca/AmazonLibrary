function verifyPassword()
{
    var pw = document.getElementById("pswd").value;
    var pw2 = document.getElementById("pswd2").value;
    var name = document.getElementById("fname").value;
    var surname = document.getElementById("lname").value;

    //check empty first name
    if (name == "")
    {
        document.getElementById("message").innerHTML = "**Fill the first name";
        return false;
    }

    //data validation
    if (!isNaN(name))
    {
        document.getElementById("message").innerHTML = "**Only characters are allowed";
        return false;
    }

    //character data validation
    if (!isNaN(surname))
    {
        document.getElementById("message").innerHTML = "**Only characters are allowed";
    }

    //empty password field
    if (pw == "")
    {
        document.getElementById("message").innerHTML = "**fill the password please!";
        return false;
    }

    //empty confirm password field
    if (pw2 == "")
    {
        document.getElementById("message").innerHTML = "**Enter the password please!";
        return false;
    }

    //length validation

    if(pw.length<6)
    {
        document.getElementById("message").innerHTML = "**Password length must be at least 6 characters";
        return false;
    }

     //password validation

    if(pw.length>8)
    {
        document.getElementById("message").innerHTML = "**Password length must not exceed 8 characters";
        return false;
    }

    if (pw != pw2)
    {
        document.getElementById("message").innerHTML = "**Passwords are not the same";
        return false;
    }
    else
    {
        alert("Your password was created successfully");
    }


}







    //check empty password field
    //if(pw == "" && pw2 == "")
    //{
       // document.getElementById("message").innerHTML = "**fill the password please";
       // return false;
    //}

   

    //length validation

    //if(pw.length<6 && pw2.length<6)
    //{
        //document.getElementById("message").innerHTML = "**Password length must be at least 6 characters";
        //return false;
    //}

    

   
    //else
    //{
        //alert("Password is correct");
    //}

//}

