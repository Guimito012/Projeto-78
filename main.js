var images = 
["foto_família.png","foto_família_2.png","foto_família_3.png","foto_família_4.png","foto_família_5.png"];

var names = 
["familia unida","família no parque","família no natal","família de aniversário","família no novo ano"];

var i = 0;
function updates()
{
    i++;
    var numbersOfFamilyMemberInArray = 5
    if(i > numbersOfFamilyMemberInArray)
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("foto_família").src = updatedImage;
    document.getElementById("família_unida").innerHTML = updatedName;
}