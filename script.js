// Global variables
let flowTime = (document.getElementById('flowTimer').innerHTML = 00 + ':' + '03');
let shortTime = (document.getElementById('shortTimer').innerHTML = 5 + ':' + '03');
let longTime = (document.getElementById('longTimer').innerHTML = 15 + ':' + '03');

const alarm = document.getElementById('alarm');
let flowCount = 0;
let paused = false;
var started = false;
let played = false;

// Functions
function unpause() {
	paused = false;
}
function reset() {
	started = false;
	paused = false;
	// set the pause buttons to no display
	document.getElementById('flowPauseBtn').style.display = 'none';
	document.getElementById('shortPauseBtn').style.display = 'none';
	document.getElementById('longPauseBtn').style.display = 'none';

	// set the start buttons to display
	document.getElementById('flowStartBtn').style.display = '';
	document.getElementById('shortBox').style.display = '';
	document.getElementById('longBox').style.display = '';

	document.getElementById('title').innerHTML = 'Kenzie Flow';

	// set the boxes to have the correct time

	// flow
	document.getElementById('flowh4').style.display = 'none';
	document.getElementById('timerDiv').style.display = '';
	document.getElementById('flowTimer').style.display = '';
	// short
	document.getElementById('shorth4').style.display = 'none';
	document.getElementById('stimerDiv').style.display = '';
	document.getElementById('shortTimer').style.display = '';
	// long
	document.getElementById('longh4').style.display = 'none';
	document.getElementById('ltimerDiv').style.display = '';
	document.getElementById('longTimer').style.display = '';
}

function displayStart() {}
function displayPause() {}

function flowStart() {
	if (paused === true) {
		return;
	}
	document.getElementById('flowStartBtn').style.display = 'none';
	document.getElementById('flowBox').style.background = '#4a75ee';
	document.getElementById('shortBox').style.display = 'none';
	document.getElementById('longBox').style.display = 'none';

	// dynamically create pause button
	if (started === false && played === false) {
		var pause = document.createElement('button');
		pause.setAttribute('id', 'flowPauseBtn');
		pause.setAttribute('class', 'pause');
		pause.setAttribute('onclick', 'reset(); flowPause()');
		pause.innerHTML = 'Pause';
		document.getElementById('flowBox').appendChild(pause);
		started = true;
	} else if (started === false) {
		document.getElementById('flowPauseBtn').style.display = '';
	}

	// timer
	var presentTime = document.getElementById('flowTimer').innerHTML;
	var timeArray = presentTime.split(/[:]+/);
	var m = timeArray[0];
	var s = checkSecond(timeArray[1] - 1);
	if (s == 59) {
		m = m - 1;
	}

	// timer done statement
	if (m < 0) {
		flowCount++;
		console.log(`Flow count: ${flowCount}`);
		soundAlarm();

		// Remove time text in place of the nice message
		document.getElementById('flowTimer').style.display = 'none';
		document.getElementById('timerDiv').style.display = 'none';

		// if under 4 > Have a short break, and make the pause button say Go Back
		// if 4 > Have a long break, and make pause button say Go Back
		if (flowCount < 4) {
			document.getElementById(
				'flowh4'
			).innerHTML = `Good work! Have a short break :) <br> Flow Cycles: ${flowCount}`;
			document.getElementById('flowh4').style.display = '';
			document.getElementById('flowPauseBtn').innerHTML = 'Go back';

			document.getElementById('title').innerHTML = 'Break time!';
		} else if (flowCount === 4) {
			document.getElementById(
				'flowh4'
			).innerHTML = `You've done so much! Have a long break <br> Flow Cycles: ${flowCount}`;
			document.getElementById('flowh4').style.display = '';

			document.getElementById('flowPauseBtn').innerHTML = 'Go back';
			document.getElementById('title').innerHTML = 'Break time!';
			flowCount = 0;
		}
		document.getElementById('flowTimer').innerHTML = flowTime;
		return;
	}

	// display time remaining in title
	let timeLeft = (document.getElementById('flowTimer').innerHTML = m + ':' + s);

	setTimeout(flowStart, 1000);
	document.getElementById('title').innerHTML = 'FLOW ' + timeLeft;
}

function flowPause() {
	paused = true;
	played = true;

	// dynamically creat start button

	document.getElementById('flowPauseBtn').style.display = 'none';
	document.getElementById('flowStartBtn').style.display = '';
	document.getElementById('flowBox').style.background = '#4a75ee';
	document.getElementById('shortBox').style.display = '';
	document.getElementById('longBox').style.display = '';

	// keep timer consistent
	var presentTime = document.getElementById('flowTimer').innerHTML;
	var timeArray = presentTime.split(/[:]+/);
	var m = timeArray[0];
	var s = checkSecond(timeArray[1]);
	document.getElementById('flowTimer').innerHTML = m + ':' + s;
}

function shortStart() {
	if (paused === true) {
		return;
	}
	document.getElementById('shortStartBtn').style.display = 'none';
	document.getElementById('shortBox').style.background = '#4a75ee';
	document.getElementById('flowBox').style.display = 'none';
	document.getElementById('longBox').style.display = 'none';

	// dynamically create pause button
	if (started === false && played === false) {
		var pause = document.createElement('button');
		pause.setAttribute('id', 'shortPauseBtn');
		pause.setAttribute('class', 'pause');
		pause.setAttribute('onclick', 'reset(); shortPause()');
		pause.innerHTML = 'Pause';
		document.getElementById('shortBox').appendChild(pause);
		started = true;
	} else if (started === false) {
		document.getElementById('shortPauseBtn').style.display = '';
	}

	// timer setup
	var presentTime = document.getElementById('shortTimer').innerHTML;
	var timeArray = presentTime.split(/[:]+/);
	var m = timeArray[0];
	var s = checkSecond(timeArray[1] - 1);

	if (s == 59) {
		m = m - 1;
	}
	if (m < 0) {
		soundAlarm();
		document.getElementById('shortTimer').style.display = 'none';
		document.getElementById('stimerDiv').style.display = 'none';
		document.getElementById('shorth4').innerHTML = `Good break! Get back to work!`;
		document.getElementById('shorth4').style.display = '';
		document.getElementById('shortPauseBtn').innerHTML = 'Go back';

		document.getElementById('title').innerHTML = 'Times up!';
		return;
	}

	let timeLeft = (document.getElementById('shortTimer').innerHTML = m + ':' + s);

	setTimeout(shortStart, 1000);

	document.getElementById('title').innerHTML = 'Short Break: ' + timeLeft;
}

function shortPause() {
	paused = true;
	played = true;

	// dynamically creat start button

	document.getElementById('shortPauseBtn').style.display = 'none';
	document.getElementById('shortStartBtn').style.display = '';
	document.getElementById('shortBox').style.background = '#4a75ee';
	document.getElementById('flowBox').style.display = '';
	document.getElementById('longBox').style.display = '';

	// keep timer consistent
	var presentTime = document.getElementById('shortTimer').innerHTML;
	var timeArray = presentTime.split(/[:]+/);
	var m = timeArray[0];
	var s = checkSecond(timeArray[1]);
	document.getElementById('shortTimer').innerHTML = m + ':' + s;
}

function longStart() {
	if (paused === true) {
		return;
	}
	started = true;
	if (hasPlayed === false) {
		startTimer();
		hasPlayed = true;
	}
	var active = document.getElementById('long');
	var active1 = document.getElementById('flow');
	var active2 = document.getElementById('short');
	var pauseBtn = document.getElementById('pauseBtn');

	active.style.background = '#4a75ee';
	active.style.position = 'relative';
	active.style.top = '0';
	active1.style.display = 'none';
	active2.style.display = 'none';
	pauseBtn.style.display = 'none';

	let presentTime = document.getElementById('longTimer').innerHTML;
	var timeArray = presentTime.split(/[:]+/);
	var m = timeArray[0];
	var s = checkSecond(timeArray[1] - 1);
	if (s == 59) {
		m = m - 1;
	}
	if (m < 0) {
		soundAlarm();
		let goBack = document.getElementById('pauseBtn');
		goBack.innerHTML = 'Go back';
		let shortBreak = document.getElementById('p3');
		shortBreak.innerHTML = 'Hope you had a good break! Time to get back into the flow.';
		document.getElementById('longTimer').innerHTML = longTime;
		document.getElementById('title').innerHTML = 'Times up!';
		document.getElementById('longTimer').style.display = 'none';
		document.getElementById('ltimerDiv').style.display = 'none';

		return;
	}

	let timeLeft = (document.getElementById('longTimer').innerHTML = m + ':' + s);

	setTimeout(longStart, 1000);
	document.getElementById('title').innerHTML = 'Long Break: ' + timeLeft;
}

function longPause() {
	paused = true;

	var inactive = document.getElementById('long');
	var inactive1 = document.getElementById('flow');
	var inactive2 = document.getElementById('short');

	inactive.style.background = '#5769c5';
	inactive.style.position = 'relative';
	inactive.style.top = '-660px';
	inactive1.style.display = '';
	inactive2.style.display = '';

	let presentTime = document.getElementById('longTimer').innerHTML;
	var timeArray = presentTime.split(/[:]+/);
	var m = timeArray[0];
	var s = checkSecond(timeArray[1]);
	document.getElementById('longTimer').innerHTML = m + ':' + s;
}

function checkSecond(sec) {
	if (sec < 10 && sec >= 0) {
		sec = '0' + sec;
	} // add zero in front of numbers < 10
	if (sec < 0) {
		sec = '59';
	}
	return sec;
}

function soundAlarm() {
	let source = 'sounds/alarm.mp3';
	let audio = document.createElement('audio');

	audio.autoplay = true;
	audio.load();
	audio.addEventListener(
		'load',
		function() {
			audio.play();
		},
		true
	);
	audio.src = source;
}
function startTimer() {
	let source = 'sounds/start.flac';
	let audio = document.createElement('audio');

	audio.autoplay = true;
	audio.load();
	audio.addEventListener(
		'load',
		function() {
			audio.play();
		},
		true
	);
	audio.src = source;
}
