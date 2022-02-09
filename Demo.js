
    /*var res = false;
    var id = document.getElemenByName("Email")[0].value;
    //var pass= document.getElementByName("input").value;

    var at =  id.indexOf('@');
    var dot = id.indexOf('.');
    if(at<1 || dot>=id.length-2 || dot-at<3)
       {
           alert("Invalid Email Addrase");
           res=true;
           return (res);
       }*/

function  validation()
{
    var result=true;
    var i = document.getElementsByTagName("input");

    if (i[0].value.length==0)
    {
        alert("Enter Your Name");
        result=false;
        return (false);
    }
    else if (i[1].value.length==0)
    {
        alert("Enter your password ");
        result=false;
        return (false);
    }
    else if (i[1].value.length<8)
    {
        alert("8 Character Required");
        result=false;
        return (false);
    }
    else{
        alert("Login is Secsseful");
    }
    
}