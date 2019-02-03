var hour = localStorage.getItem("lasthour");                           
var minute = localStorage.getItem("lastminute");                           
var min =  localStorage.getItem("time"); 
var title =  localStorage.getItem("lasttitle"); 

time = convert(min);
document.querySelector('h2').textContent = title;



var firsttime = localStorage.getItem("firsttime");
var firsttitle = localStorage.getItem("firsttitle");  
var secondtime = localStorage.getItem("secondtime");
var secondtitle = localStorage.getItem("secondtitle"); 
var thirdtime = localStorage.getItem("thirdtime");
var thirdtitle = localStorage.getItem("thirdtitle");

document.getElementById("demo1").innerHTML = "Time spent on " + firsttitle +" : " + firsttime + " minutes";
document.getElementById("demo2").innerHTML = "Time spent on " + secondtitle + " : " + secondtime + " minutes";
document.getElementById("demo3").innerHTML = "Time spent on " + thirdtitle + " : " + thirdtime + " minutes";
document.getElementById("demo4").innerHTML = "Current time " + hour + ":" + minute ;




function convert( time){
    minutes =  time % 60;
    hours = Math.floor(time / 60);
    displayed_time = hours + " hours " + minutes + " minutes";
    return displayed_time;
}




