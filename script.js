// default timer values
let flowTime = (document.getElementById("flowTimer").innerHTML =
  25 + ":" + "00");
let shortTime = (document.getElementById("shortTimer").innerHTML =
  5 + ":" + "00");
let longTime = (document.getElementById("longTimer").innerHTML =
  15 + ":" + "00");

// global variables
let flowCount = 0;
let paused = false;
let started = false;
let hasPlayed = false;

// let modal = document.getElementById('myModal');

// let btn = document.getElementById('myBtn');

// let span = document.getElementsByClassName('close')[0];

// btn.onclick = function() {
// 	modal.style.display = 'block';
// };

// span.onclick = function() {
// 	modal.style.display = 'none';
// };

// window.onclick = function(event) {
// 	if (event.target == modal) {
// 		modal.style.display = 'none';
// 	}
// };
// default html

document.getElementById("flowPauseBtn").style.display = "none";
document.getElementById("shortPauseBtn").style.display = "none";
document.getElementById("longPauseBtn").style.display = "none";
document.getElementById("timerDiv").style.display = "none";
document.getElementById("stimerDiv").style.display = "none";
document.getElementById("ltimerDiv").style.display = "none";
document.getElementById("flowh2").style.fontSize = "70px";
document.getElementById("shorth2").style.fontSize = "70px";
document.getElementById("longh2").style.fontSize = "70px";

// functions

function unpause() {
  paused = false;
}
function unstart() {
  started = false;
}

function settings() {
  alert();
}

function flowReset() {
  document.getElementById("flowTimer").innerHTML = 25 + ":" + "00";
  document.getElementById("flowPauseBtn").style.display = "none";
  document.getElementById("flowStartBtn").style.display = "";
  document.getElementById("shortBox").style.display = "";
  document.getElementById("longBox").style.display = "";
  document.getElementById("goBack").remove();
  document.getElementById("flowh4").remove();
  document.getElementById("flowPauseBtn").innerHTML = "Pause";
  document.getElementById("flowTimer").style.display = "none";
  document.getElementById("timerDiv").style.display = "none";
  document.getElementById("flowBox").style.background = "";
  hasPlayed = false;
  document.getElementById("title").innerHTML = "Kenzie Flow";
}

function shortReset() {
  document.getElementById("shortTimer").innerHTML = 5 + ":" + "00";
  document.getElementById("shortPauseBtn").style.display = "none";
  document.getElementById("shortStartBtn").style.display = "";
  document.getElementById("flowBox").style.display = "";
  document.getElementById("longBox").style.display = "";
  document.getElementById("goBack").remove();
  document.getElementById("shorth4").remove();
  document.getElementById("shortPauseBtn").innerHTML = "Pause";
  document.getElementById("shortTimer").style.display = "none";
  document.getElementById("stimerDiv").style.display = "none";
  document.getElementById("shortBox").style.background = "";
  hasPlayed = false;
  document.getElementById("title").innerHTML = "Kenzie Flow";
}

function longReset() {
  document.getElementById("longTimer").innerHTML = 15 + ":" + "00";
  document.getElementById("longPauseBtn").style.display = "none";
  document.getElementById("longStartBtn").style.display = "";
  document.getElementById("flowBox").style.display = "";
  document.getElementById("shortBox").style.display = "";
  document.getElementById("goBack").remove();
  document.getElementById("longh4").remove();
  document.getElementById("longPauseBtn").innerHTML = "Pause";
  document.getElementById("longTimer").style.display = "none";
  document.getElementById("ltimerDiv").style.display = "none";
  document.getElementById("longBox").style.background = "";
  hasPlayed = false;
  document.getElementById("title").innerHTML = "Kenzie Flow";
}

function flowStart() {
  started = true;
  if (paused === true) {
    return;
  }
  if (hasPlayed === false) {
    startTimer();
    hasPlayed = true;
  }
  document.getElementById("timerDiv").style.display = "";
  document.getElementById("flowTimer").style.display = "";

  // Style handling
  document.getElementById("flowBox").style.background = "#4a75ee";
  document.getElementById("flowPauseBtn").style.display = "";
  document.getElementById("flowStartBtn").style.display = "none";
  document.getElementById("shortBox").style.display = "none";
  document.getElementById("longBox").style.display = "none";
  document.getElementById("shortBox").style.background = "";
  document.getElementById("longBox").style.background = "";

  // timer
  var presentTime = document.getElementById("flowTimer").innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);
  if (s == 59) {
    m = m - 1;
  }

  if (m < 0) {
    flowCount++;
    soundAlarm();
    console.log(`Flow count: ${flowCount}`);

    document.getElementById("flowPauseBtn").style.display = "none";
    var newButton = document.createElement("button");
    newButton.innerHTML = "Go Back";
    newButton.setAttribute("id", "goBack");
    newButton.setAttribute("class", "pause");
    newButton.setAttribute("onclick", "flowReset()");
    // var box = getElementById('flowBox');
    document.getElementById("flowBox").appendChild(newButton);

    // remove time text
    document.getElementById("flowTimer").style.display = "none";
    document.getElementById("timerDiv").style.display = "none";

    // display end message
    if (flowCount < 4) {
      var endMes = document.createElement("h4");
      endMes.setAttribute("id", "flowh4");
      endMes.innerHTML = `Great job! Take 5 (small break)`;
      document.getElementById("h4cont").appendChild(endMes);
    } else if (flowCount === 4) {
      var endMes = document.createElement("h4");
      endMes.setAttribute("id", "flowh4");
      endMes.innerHTML = `Fantastic work! Relax and take a long break`;
      document.getElementById("h4cont").appendChild(endMes);

      flowCount = 0;
    }

    document.getElementById("flowTimer").innerHTML = flowTime;

    return;
  }

  // display time remaining in title
  let timeLeft = (document.getElementById("flowTimer").innerHTML = m + ":" + s);

  setTimeout(flowStart, 1000);
  document.getElementById("title").innerHTML = "FLOW " + timeLeft;
}

function flowPause() {
  paused = true;
  hasPlayed = false;
  // style handling
  document.getElementById("flowStartBtn").style.display = "";
  document.getElementById("flowPauseBtn").style.display = "none";
  document.getElementById("shortBox").style.display = "";
  document.getElementById("longBox").style.display = "";
}

function shortStart() {
  started = true;
  if (paused === true) {
    return;
  }
  if (hasPlayed === false) {
    startTimer();
    hasPlayed = true;
  }
  document.getElementById("body").style.background = "rgb(48, 197, 162)";
  document.getElementById("navbar").style.background = "rgb(48, 197, 162)";
  document.getElementById("shortBox").style.background = "rgb(80, 192, 130)";
  document.getElementById("flowBox").style.background = "";
  document.getElementById("longBox").style.background = "";
  document.getElementById("stimerDiv").style.display = "";
  document.getElementById("shortTimer").style.display = "";
  // Style handling

  document.getElementById("shortPauseBtn").style.display = "";
  document.getElementById("shortStartBtn").style.display = "none";
  document.getElementById("flowBox").style.display = "none";
  document.getElementById("longBox").style.display = "none";
  document.getElementById("shortBox").style.display = "";
  document.getElementById("stimerDiv").style.display = "";

  // timer
  var presentTime = document.getElementById("shortTimer").innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);
  if (s == 59) {
    m = m - 1;
  }

  if (m < 0) {
    soundAlarm();
    document.getElementById("shortPauseBtn").style.display = "none";
    var newButton = document.createElement("button");
    newButton.innerHTML = "Go Back";
    newButton.setAttribute("id", "goBack");
    newButton.setAttribute("class", "pause");
    newButton.setAttribute("onclick", "shortReset()");
    document.getElementById("shortBox").appendChild(newButton);

    // remove time text
    document.getElementById("shortTimer").style.display = "none";
    document.getElementById("stimerDiv").style.display = "none";

    // display end message
    var endMes = document.createElement("h4");
    endMes.setAttribute("id", "shorth4");
    endMes.innerHTML = `Good break! You got this!`;
    document.getElementById("sh4cont").appendChild(endMes);

    document.getElementById("shortTimer").innerHTML = shortTime;

    return;
  }

  // display time remaining in title
  let timeLeft = (document.getElementById("shortTimer").innerHTML =
    m + ":" + s);

  setTimeout(shortStart, 1000);
  document.getElementById("title").innerHTML = "Short Break:  " + timeLeft;
}

function shortPause() {
  paused = true;
  hasPlayed = false;
  // style handling
  document.getElementById("shortStartBtn").style.display = "";
  document.getElementById("shortPauseBtn").style.display = "none";
  document.getElementById("flowBox").style.display = "";
  document.getElementById("longBox").style.display = "";
  document.getElementById("body").style.background = "";
  document.getElementById("navbar").style.background = "";
}

function longStart() {
  started = true;
  if (paused === true) {
    return;
  }
  if (hasPlayed === false) {
    startTimer();
    hasPlayed = true;
  }

  // Style handling
  document.getElementById("body").style.background = "rgb(113, 46, 212)";
  document.getElementById("navbar").style.background = "rgb(113, 46, 212)";
  document.getElementById("longBox").style.background = "rgb(109, 67, 172)";
  document.getElementById("longPauseBtn").style.display = "";
  document.getElementById("longStartBtn").style.display = "none";
  document.getElementById("flowBox").style.display = "none";
  document.getElementById("shortBox").style.display = "none";
  document.getElementById("ltimerDiv").style.display = "";
  document.getElementById("longTimer").style.display = "";
  document.getElementById("flowBox").style.background = "";
  document.getElementById("shortBox").style.background = "";

  // timer
  var presentTime = document.getElementById("longTimer").innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);
  if (s == 59) {
    m = m - 1;
  }

  if (m < 0) {
    soundAlarm();
    document.getElementById("longPauseBtn").style.display = "none";
    var newButton = document.createElement("button");
    newButton.innerHTML = "Go Back";
    newButton.setAttribute("id", "goBack");
    newButton.setAttribute("class", "pause");
    newButton.setAttribute("onclick", "longReset()");
    document.getElementById("longBox").appendChild(newButton);

    // remove time text
    document.getElementById("longTimer").style.display = "none";
    document.getElementById("ltimerDiv").style.display = "none";

    // display end message
    var endMes = document.createElement("h4");
    endMes.setAttribute("id", "longh4");
    endMes.innerHTML = `Good break! You got this!`;
    document.getElementById("lh4cont").appendChild(endMes);

    document.getElementById("shortTimer").innerHTML = shortTime;

    return;
  }

  // display time remaining in title
  let timeLeft = (document.getElementById("longTimer").innerHTML = m + ":" + s);

  setTimeout(longStart, 1000);
  document.getElementById("title").innerHTML = "Long Break:  " + timeLeft;
}

function longPause() {
  paused = true;
  hasPlayed = false;
  // style handling
  document.getElementById("longStartBtn").style.display = "";
  document.getElementById("longPauseBtn").style.display = "none";
  document.getElementById("shortBox").style.display = "";
  document.getElementById("flowBox").style.display = "";
  document.getElementById("body").style.background = "";
  document.getElementById("navbar").style.background = "";
}

// this will make it so it doesn't display 60 and have a 0 before all numbers < 10
function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  } // add zero in front of numbers < 10
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}
function soundAlarm() {
  let source = "sounds/alarm.mp3";
  let audio = document.createElement("audio");

  audio.autoplay = true;
  audio.load();
  audio.addEventListener(
    "load",
    function () {
      audio.play();
    },
    true
  );
  audio.src = source;
}
function startTimer() {
  let source = "sounds/start.flac";
  let audio = document.createElement("audio");

  audio.autoplay = true;
  audio.load();
  audio.addEventListener(
    "load",
    function () {
      audio.play();
    },
    true
  );
  audio.src = source;
}
