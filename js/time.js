function updateDate() {
  var currentDate = new Date();
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var month = monthNames[currentDate.getMonth()];
  var day = currentDate.getDate();
  var year = currentDate.getFullYear();

  document.getElementById("currentDate").innerText =
    "It's " + month + " " + day + ", " + year;
}

updateDate();

function updateTime() {
  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var ampm = hours >= 12 ? "PM" : "AM";

  var dark_light = document.getElementById("dark-light");

  if (hours >= 18 || hours < 5) {
    dark_light.innerHTML = "<i class='bx bxs-moon text-[25px] text-white'></i>";
  } else if (hours >= 5 && hours < 18) {
    dark_light.innerHTML =
      "<i class='bx bxs-brightness text-[25px] text-yellow-500'></i>";
  }

  hours = hours % 12 || 12;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var currentTimeElements = document.querySelectorAll(".currentTime");

  currentTimeElements.forEach(function (element) {
    element.innerText = hours + ":" + minutes + ":" + seconds + " " + ampm;
  });
}

setInterval(updateTime, 1000);
updateTime();
