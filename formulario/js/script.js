function getAge() 
{
    var dateString = document.getElementById("fecha").value;
    if(dateString !="")
    {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();

        if(age < 18 || age > 100)
        {
            alert("Age "+ age +" is restrict");
        } 
    } 
    else 
    {
        alert("please provide your date of birth");
    }
}