function showDateName() {
    let m = document.getElementById('theMonth');
    let y = document.getElementById('theYear');
    let days = daysInMonth(m.value, y.value);
    let d = new Date(y.value, m.value - 1, 1);
    let ordinalOfTheWeek = d.getDay();
    let dayOfTheWeek = outputDayOfWeek(d.getDay());
    document.getElementById('firstDayOfMonth').innerText = "The first day of the month is: " + dayOfTheWeek;
    document.getElementById(ordinalOfTheWeek).innerText = "1";
    locateFirstDayIndex(days);
}

function outputDayOfWeek(day) {
    let dayOfTheWeek;
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
    let tempYear = 2018;
    document.getElementById('theYear').value = tempYear;
    document.getElementById('theMonth').value = 1;
}

function countElements() {
    let domElements = document.body.getElementsByTagName('td');
    console.log("There are " + domElements.length + " td elements in the body.");
}

function locateFirstDayIndex(days) {
    let calDay = document.getElementsByTagName('td');
    let index;
    for (let i = 0; i < 7; i++) {
        if (calDay[i].innerText == "1") {
            index = i + 1;
            break;
        }
    }
    let x = 2;
    while (x < days + 1) {
        calDay[index].innerText = x.toString();
        index++;
        x++;
    }
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function resetThePage() {
    location.reload();
}