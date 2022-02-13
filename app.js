

function myTime() {
    var myDate = new Date();
    var hr, min = (myDate.getMinutes() < 10) ? "0" + myDate.getMinutes() : myDate.getMinutes(),
         sec = (myDate.getSeconds() < 10) ? "0" + myDate.getSeconds() : myDate.getSeconds(),
         M = (myDate.getHours() >=12 ) ? "PM" : "AM";

    if(myDate.getHours == 0){
        hr = 12;
    }     
    else if(myDate.getHours() > 12) {
    hr = myDate.getHours() -12
    }
    else {
        hr = myDate.getHours();
    }

    var currentTime = hr + ":" + min + ":" + sec + ":";

    document.getElementsByClassName('Hour')[0].innerHTML = currentTime;
    document.getElementsByClassName('Minute')[0].innerHTML = M;

    var myDay = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
     var myMonth = ["january","february","march","april","may","june","july","august","september","october","november","december"];

     var day = myDate.getDate();

     var currentDate = myDay[myDate.getDay()] + "," + myMonth[myDate.getMonth()] + day;

     document.getElementsByClassName('date')[0].innerHTML = currentDate;
}

myTime();

setInterval(function(){
    myTime();
},1000)