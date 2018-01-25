function showDateName() {

    var m = document.getElementById('theMonth');
    var y = document.getElementById('theYear');
    var days = daysInMonth(m.value, y.value);
    
    var d = new Date(y.value, m.value - 1, 1);
    var ordinalOfTheWeek = d.getDay();
    var dayOfTheWeek = outputDayOfWeek(d.getDay());
    

    document.getElementById('firstDayOfMonth').innerText = "The first day of the month is: " + dayOfTheWeek;
    document.getElementById(ordinalOfTheWeek).innerText = "1";

    locateFirstDayIndex(days);
}

function outputDayOfWeek(day) {

    var dayOfTheWeek;

    if (day == 0) {
        dayOfTheWeek = "Sunday";
    }
    else if (day == 1) {
        dayOfTheWeek = "Monday";
    }
    else if (day == 2) {
        dayOfTheWeek = "Tuesday";
    }
    else if (day == 3) {
        dayOfTheWeek = "Wednesday";
    }
    else if (day == 4) {
        dayOfTheWeek = "Thursday";
    }
    else if (day == 5) {
        dayOfTheWeek = "Friday";
    }
    else if (day == 6) {
        dayOfTheWeek = "Saturday";
    }

    return dayOfTheWeek;
}

function setTheYear() {
    var tempYear = 2018;
    document.getElementById('theYear').value = tempYear;
    document.getElementById('theMonth').value = 1;
}

function countElements() {
    var domElements = document.body.getElementsByTagName('td');
    console.log("There are " + domElements.length + " td elements in the body.");
}

function locateFirstDayIndex(days) {
    var calDay = document.getElementsByTagName('td');

    var index;
    for (var i = 0; i < 7; i++) {
        if (calDay[i].innerText == "1") {
            index = i + 1;
            break;
        }
    }

    var x = 2;
    while (x < days + 1) {
        calDay[index].innerText = x.toString();
        index++;
        x++;
    }
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function resetThePage(){
    location.reload();
}