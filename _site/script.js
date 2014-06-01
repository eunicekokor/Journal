function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function myFunction() {
    var d = new Date();
    var h = d.getHours();
    var time = "AM";
    if (h>12){
    h = h - 12;
    time = "PM";
    }
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

    document.getElementById("demo").innerHTML = days[d.getDay()] + ", " + month[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear() +" at " + h + ":" + m + ":" + s + time;
}
