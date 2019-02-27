function countdown(endDate) {
  let days, hours, minutes, seconds;
  
  //endDate = new Date(endDate).getTime();
  
//  if (isNaN(endDate)) {
//	return;
//  }
  
  setInterval(calculate, 999);
  
  function calculate() {
    //let startDate = new Date();
    //startDate = startDate.getTime();
    
    let timeRemaining = parseInt((endDate) /1000);
    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);
      
      hours = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);
      
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);
      
      seconds = parseInt(timeRemaining);
      //timeRemaining = (timeRemaining % 100);
      
      document.getElementById("days").innerHTML = parseInt(days, 10);
      document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
      document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
      document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
      return endDate--;
    } else {
      return;
    }
  }
}

(function () { 
  countdown(30000); 
}());