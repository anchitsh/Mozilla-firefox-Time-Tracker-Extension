browser.tabs.onActivated.addListener(when_active);

function when_active() {
    lasttime();
    var hour = timenow_hours();
    var minute = timenow_minutes();
    localStorage.setItem("lasthour", hour);
    localStorage.setItem("lastminute", minute);
    find_title()
}

function find_title() {
    browser.tabs.query({ currentWindow: true, active: true, }).
        then(function (arrOfTabs) {
            const thisTab = arrOfTabs[0];
            var ass = thisTab.url;
            var ass2 = ass.replace('http://', '').split('.');
            if (ass2[0] == "https://www") {
                localStorage.setItem("lasttitle", ass2[1]);
            }
            else {
                var ass2 = ass.split('/');
                var ass3 = ass2[2].split('.');
                localStorage.setItem("lasttitle", ass3[0]);
            }
        });
}



function timenow_hours() {
    var today = new Date();
    var time = today.getHours();
    return time;
}

function timenow_minutes() {
    var today = new Date();
    var time = today.getMinutes();
    return time;
}

function convert_to_minutes(hours) {
    var min = hour * 60;
    return min;
}

function lasttime() {
    var hours = timenow_hours();
    var minutes = timenow_minutes();

    var lasthour = localStorage.getItem("lasthour");
    var lastminute = localStorage.getItem("lastminute");
    if (lastminute == null && lasthour == null) {
        return 0;
    }
    var newhours = hours - lasthour;
    var newminutes = minutes - lastminute;
    var totalminutes = newminutes + newhours * 60;

    var title = localStorage.getItem("lasttitle");
    var titletime_inminutes = localStorage.getItem(title);
    
   if(titletime_inminutes==null){
    localStorage.setItem(title, totaltime);
    updatetopthree(title, totalminutes);
   }
   else{
    var addedtime = titletime_inminutes + totalminutes;
    updatetop(title, totalminutes, titletime_inminutes);
    localStorage.setItem(title, addedtime);
   }
}

function updatetopthree(title, totaltime) {

    var third = localStorage.getItem("thirdtime");


    if (third > totaltime) {
        return 0;
    }
    var first = localStorage.getItem("firsttime");
    var second = localStorage.getItem("secondtime");

    if (first == null) {
        localStorage.setItem("firsttime", totaltime);
        localStorage.setItem("firsttitle", title);
        return 0;
    }

    if (second == null) {
        localStorage.setItem("secondtime", totaltime);
        localStorage.setItem("secondtitle", title);
        return 0;
    }

    if (third == null) {
        localStorage.setItem("thirdtime", totaltime);
        localStorage.setItem("thirdtitle", title);
        return 0;
    }

    if (totaltime > first) {
        var firsttitle = localStorage.getItem("firsttitle");
        var secondtitle = localStorage.getItem("secondtitle");

        localStorage.setItem("firsttime", totaltime);
        localStorage.setItem("firsttitle", title);

        localStorage.setItem("secondtime", first);
        localStorage.setItem("secondtitle", firsttitle);

        localStorage.setItem("thirdtime", second);
        localStorage.setItem("thirdtitle", secondtitle);

        return 0;
    }
    if (totaltime > second && totaltime < first) {
        var secondtitle = localStorage.getItem("secondtitle");

        localStorage.setItem("secondtime", totaltime);
        localStorage.setItem("secondtitle", title);

        localStorage.setItem("thirdtime", second);
        localStorage.setItem("thirdtitle", secondtitle);

        return 0;

    }
    if (totaltime > third && totaltime < second) {

        localStorage.setItem("thirdtime", totaltime);
        localStorage.setItem("thirdtitle", title);

    }
}

function updatetop(title, totaltime, moretime) {
    var first = localStorage.getItem("firsttime");
    var second = localStorage.getItem("secondtime");
    var third = localStorage.getItem("thirdtime");
    var firsttitle = localStorage.getItem("firsttitle");
    var secondtitle = localStorage.getItem("secondtitle");
    var thirdtitle = localStorage.getItem("thirdtitle");
    finaltotaltime = totaltime + moretime;


    if (title == firsttitle || title == secondtitle || title == thirdtitle) {
        if (title == firsttitle) {
            localStorage.setItem("firsttime", finaltotaltime);
            return 0;
        }
        if (title == secondtitle) {
            if (finaltotaltime > first) {
                localStorage.setItem("firsttime", finaltotaltime);
                localStorage.setItem("firsttitle", title);

                localStorage.setItem("secondtime", first);
                localStorage.setItem("secondtitle", firsttitle);

                return 0;
            }
            else {
                localStorage.setItem("secondtime", finaltotaltime);
                return 0;
            }
        }
        if (title == thirdtitle) {
            if (finaltotaltime > first) {
                localStorage.setItem("firsttime", finaltotaltime);
                localStorage.setItem("firsttitle", title);

                localStorage.setItem("secondtime", first);
                localStorage.setItem("secondtitle", firsttitle);

                localStorage.setItem("thirdtime", second);
                localStorage.setItem("thirdtitle", secondtitle);
                return 0;
            }
            if (finaltotaltime > second) {
                localStorage.setItem("secondtime", finaltotaltime);
                localStorage.setItem("secondtitle", title);

                localStorage.setItem("thirdtime", second);
                localStorage.setItem("thirdtitle", secondtitle);
                return 0;
            }
            else {
                localStorage.setItem("thirdtime", finaltotaltime);
                return 0;
            }
        }

    }

    else {
        updatetopthree(title, finaltotaltime);
    }
}
