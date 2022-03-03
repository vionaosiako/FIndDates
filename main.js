// Array for the months of the year


// let month = new Array("January","February","March","April","May","June","July","August","September","Octombr","November","Decmber");

//Array for days of the week
// let weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

function getDay(dateString) {
    //Array for days of the week
    let weekday = new Array(
      "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
  
    //Create a new date object
    const date = new Date(dateString);
  
    //Get the day, month and year from the date object
    const MM = date.getMonth() + 1;
    const DD = date.getDate();
    const year = date.getFullYear();
  
    // get the century digit from the year
    const CC = year.toString().substring(0, 2);
  
    // get the year digit from the year
    const YY = year.toString().substring(2, 4);
  
    // calculate the day of the week
    const day =
      (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
  
    // floor the result to get the day of the week
    let dayOfWeek = Math.floor(day);
  
    // return the day of the week from not been negative
    if (dayOfWeek < 0) {
      dayOfWeek = Math.abs(dayOfWeek);
    }
  
    // get the weekday from the array
    const nameOfDay = weekday[dayOfWeek];
  
    // return all the information
    return { MM, DD, year, CC, YY, dayOfWeek, nameOfDay };
  }
  
  // get the day of the week
//   const { nameOfDay } = getDay("1998-01-01");
  
  // print data
//   alert(nameOfDay)

  function dayBorn() {
    // get the date
    const dateOfBirth = document.getElementById("dateOfBirth").value;
  
    // get the day of the week
    const { nameOfDay } = getDay(dateOfBirth);
    

    var genderVal  = genderCheck();

    alert(nameOfDay, genderVal);
  }

  function genderCheck(){
    var gender = document.getElementById("sex");
    // alert(gender.elements["gender"].value);

    // var genderValue = gender.elements["gender"].value;
    // return genderValue;
    // return gender;
      
  }
