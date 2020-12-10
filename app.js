let tomatoCount = 0;
let target = 3;
let sessionLength = 1500000;

document.getElementById("minutes").innerText = "25";
document.getElementById("seconds").innerText = "0";
let myTarget = document.querySelector("#myTarget");

function timer() {
  document.querySelector("#plusButton").style.visibility = "hidden";
  let countDown = new Date().getTime() + sessionLength;
  console.log(countDown);

  const second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  
  music = new Audio("success.mp3");
  setTimeout(function(){music.play();}, sessionLength);

  x = setInterval(function () {
    let now = new Date().getTime();
    console.log(now);
    distance = countDown - now;
    if (distance < 100 && distance > -1500) {
      addToGrid();
      distance = 0;
      document.getElementById("minutes").innerText = `${sessionLength / 60000}`;

      clearInterval(x);
      
      document.querySelector("#plusButton").style.visibility = "visible";
    } else {
      document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      );
      document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second
      );
    }
  }, second);
}

function addTomato() {
  tomatoCount += 1;
  console.log(tomatoCount);
  if (tomatoCount == target) {
    myTarget.textContent = "Target Achieved, well done!";
  } else {
    myTarget.textContent = "Completed: " + tomatoCount + "/" + target;
  }
}

function addToGrid() {
  addTomato();
  let tomatoGrid = document.querySelector("#tomatoGrid");
  let newTomato = document.createElement("img");
  newTomato.classList.add("tomato");
  newTomato.setAttribute(
    "src",
    "http://labs.jensimmons.com/2016/examples/images/tomato.jpg"
  );
  tomatoGrid.appendChild(newTomato);
}

function getTarget() {
  target = prompt("How may sessions will you complete today?");

  myTarget.textContent = "Completed: " + tomatoCount + "/" + target;
}
function getLength() {
  let sessionMinutes = prompt("How many minutes per session?");
  sessionLength = 60000 * sessionMinutes;
  document.getElementById("minutes").innerText = `${sessionMinutes}`;
}

myTarget.textContent = "Completed: " + tomatoCount + "/" + target;
