// Step 1: Create a new Date object
const currentDate  = new Date();

const hour = currentDate.getUTCHours();
console.log(hour);
if(hour >13){
    Nhour =  hour -12
    realHour = Nhour + " PM"
}

// Step 2: Get the current day of the week as a number (0-6)
const dayIndex = currentDate.getDay();
// Step 3: Map the number to the corresponding day name

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDay = daysOfWeek[dayIndex];
// Step 4: Log the current day of the week
console.log("Today is " + currentDay);
//time handling in JavaScript using toLocaleDateString

var options ={
    weekday: "long",
    day: "numeric",
    month: "long"
}
var todayObj = currentDate.toLocaleDateString("en-US", options);
console.log(todayObj)
