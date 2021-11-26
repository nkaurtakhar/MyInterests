var pictures=['11.jpg','2.png','3.png','4.jpg','5.png','6.jpg'];
var size=pictures.length-1;
var num=0;
var show;
function slide(num1)
{
    num=num+num1;
    if(num>size)// if the we are at the last slide, begin with first pic(Next Button)
    {
      num=0;//Reset the image number to 0
    }
    if(num<0)//(BACK button)
    {
        num=size;//Reset to last image
    }
    document.getElementById("ss").src=pictures[num];
}

//Auto function 
function slideshow()
{
    if(!show)
    {
        show=setInterval("slide(1)",1000);
    }
    
}
function stopshow()
{
    clearInterval(show);
}

function submit()
{
          
        result.innerHTML="Thank you for your feedback" ;
    


}
