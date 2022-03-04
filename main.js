let gender;
// let Male;
// let Female;
function checkRequired(){

}
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
  
  function dayBorn() {

    checkRequired();
    // get the date
    const dateOfBirth = document.getElementById("dateOfBirth").value;
  
    // get the day of the week
    const { nameOfDay } = getDay(dateOfBirth);

    gender = document.querySelector('input[name="gender"]:checked').value;
    console.log(gender);

    if(gender == "Male"){
      
      if(nameOfDay == "Monday")
      {
        alert("Your Akhan Name: Kwando");
        // console.log("Kwasi");
      }

      else if(nameOfDay == "Teusday")
      {
        alert("Your Akhan Name: Kwabena");
      }

      else if(nameOfDay == "Wednesday")
      {
        alert("Your Akhan Name: Kwaku");
      }
      else if(nameOfDay == "Thursday")
      {
        alert("Your Akhan Name: Yaw");
      }
      else if(nameOfDay == "Friday")
      {
        alert("Your Akhan Name: Kofi");
      }
      else if(nameOfDay == "Saturday")
      {
        alert("Your Akhan Name: Kwame");
      }
      else if(nameOfDay == "Sunday")
      {
        alert("Your Akhan Name: Kwasi");
      }
      else
      {
        alert("Date of birth is required");
      }
    }

    if(gender == "Female"){
      if(nameOfDay == "Monday")
      {
        alert("Your Akhan Name: Adwoa");
      }

      else if(nameOfDay == "Teusday")
      {
        alert("Your Akhan Name: Abenna");
      }

      else if(nameOfDay == "Wednesday")
      {
        alert("Your Akhan Name: Akua");
      }
      else if(nameOfDay == "Thursday")
      {
        alert("Your Akhan Name: Yaa");
      }
      else if(nameOfDay == "Friday")
      {
        alert("Your Akhan Name: Afua");
      }
      else if(nameOfDay == "Saturday")
      {
        alert("Your Akhan Name: Ama");
      }
      else if(nameOfDay == "Sunday")
      {
        alert("Your Akhan Name: Akosua");
      }
      else
      {
        alert("Date of birth is required");
      }
    }

    

    // alert(nameOfDay);
  }

  function genderCheck(){
    //Get the value of the gender selected
    // gender = document.querySelector('input[name="gender"]:checked').value;
    // return gender;    
    // console.log(gender);
    
    


           
  }


  
