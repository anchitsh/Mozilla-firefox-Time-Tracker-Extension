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

document.getElementById("demo1").innerHTML = "Current time " + hour + ":" + minute ;
document.getElementById("demo3").innerHTML = time;
document.getElementById("demo6").innerHTML = "Time spent on " + firsttitle +" : " + firsttime + " minutes";
document.getElementById("demo7").innerHTML = "Time spent on " + secondtitle + " : " + secondtime + " minutes";
document.getElementById("demo8").innerHTML = "Time spent on " + thirdtitle + " : " + thirdtime + " minutes";




function convert( time){
    minutes =  time % 60;
    hours = Math.floor(time / 60);
    displayed_time = hours + " hours " + minutes + " minutes";
    return displayed_time;
}


var test1 = localStorage.getItem("test1");
var test2 = localStorage.getItem("test2");
var test3 = localStorage.getItem("test3");
var asstest = localStorage.getItem("asstest");
var asstest2 = localStorage.getItem("asstest2");


document.getElementById("demo11").innerHTML = test1+"test1";
document.getElementById("demo12").innerHTML = test2+"test2";
document.getElementById("demo13").innerHTML = test3+"test3";
document.getElementById("demo14").innerHTML = asstest+"asstest";
document.getElementById("demo15").innerHTML = asstest2+"asstest2";
