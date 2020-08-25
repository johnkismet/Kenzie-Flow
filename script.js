// Global variables
let flowTime = (document.getElementById('flowTimer').innerHTML = 00 + ':' + '03');
let shortTime = (document.getElementById('shortTimer').innerHTML = 00 + ':' + '03');
let longTime = (document.getElementById('longTimer').innerHTML = 00 + ':' + '03');

const alarm = document.getElementById('alarm');
let flowCount = 0;
let paused = false;
let hasPlayed = false;
var started = false;

// Functions
function unpause() {
	paused = false;
}
function reset() {
	let flowButton = document.getElementById('flowPauseBtn');
	flowButton.innerHTML = 'Pause';
	let shortButton = document.getElementById('button2');
	shortButton.innerHTML = 'Pause';
	let longButton = document.getElementById('button3');
	longButton.innerHTML = 'Pause';
	let flow = document.getElementById('p1');
	flow.innerHTML = '';
	let sbreak = document.getElementById('p2');
	sbreak.innerHTML = '';
	let lbreak = document.getElementById('p3');
	lbreak.innerHTML = '';
	// let flowTime = document.getElementById('flowTimer');
	// flowTime.innerHTML = 00 + ':' + '03';
	// let shortTime = document.getElementById('shortTimer');
	// shortTime.innerHTML = 00 + ':' + '03';
	// let longTime = document.getElementById('longTimer');
	// longTime.innerHTML = 00 + ':' + '03';
	hasPlayed = false;
	document.getElementById('title').innerHTML = 'Kenzie Flow';
	document.getElementById('flowTimer').style.display = '';
	document.getElementById('timerDiv').style.display = '';
	document.getElementById('shortTimer').style.display = '';
	document.getElementById('stimerDiv').style.display = '';
	document.getElementById('longTimer').style.display = '';
	document.getElementById('ltimerDiv').style.display = '';
}

function flowStart() {
	if (paused === true) {
		return;
	}

	if (hasPlayed === false) {
		startTimer();
		hasPlayed = true;
	}
	started = true;
	var active = document.getElementById('flow');
	var active1 = document.getElementById('short');
	var active2 = document.getElementById('long');

	active.style.background = '#4a75ee';
	active1.style.display = 'none';
	active2.style.display = 'none';
	document.getElementById('flowStartBtn').style.display = 'none';

	var presentTime = document.getElementById('flowTimer').innerHTML;
	var timeArray = presentTime.split(/[:]+/);
	var m = timeArray[0];
	var s = checkSecond(timeArray[1] - 1);

	if (s == 59) {
		m = m - 1;
	}
	if (m < 0) {
		flowCount++;
		console.log(`Flow count: ${flowCount}`);
		soundAlarm();
		document.getElementById('flowTimer').style.display = 'none';
		document.getElementById('timerDiv').style.display = 'none';

		if (flowCount < 4) {
			let shortBreak = document.getElementById('p1');
			shortBreak.innerHTML = `Good work! Have a short break :) <br> Flow Cycles: ${flowCount}`;
			let goBack = document.getElementById('flowPauseBtn');
			goBack.innerHTML = 'Go back';
			document.getElementById('title').innerHTML = 'Times up!';
		} else if (flowCount === 4) {
			let longBreak = document.getElementById('p1');
			longBreak.innerHTML = `You've done so much! Have a long break <br> Flow Cycles: ${flowCount}`;
			let goBack = document.getElementById('button');
			goBack.innerHTML = 'Go back';
			document.getElementById('title').innerHTML = 'Times up!';
			flowCount = 0;
		}
		document.getElementById('flowTimer').innerHTML = flowTime;
		return;
	}

	let timeLeft = (document.getElementById('flowTimer').innerHTML = m + ':' + s); // display time remaining

	setTimeout(flowStart, 1000);
	document.getElementById('title').innerHTML = 'FLOW ' + timeLeft;
}

function flowPause() {
	if (started === false) {
		console.log('not started!');
		return;
	}
	paused = true;
	var inactive = document.getElementById('flow');
	var inactive1 = document.getElementById('short');
	var inactive2 = document.getElementById('long');

	inactive.style.background = '#5769c5';
	inactive1.style.display = '';
	inactive2.style.display = '';

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
	if (hasPlayed === false) {
		startTimer();
		hasPlayed = true;
	}
	var active = document.getElementById('short');
	var active1 = document.getElementById('flow');
	var active2 = document.getElementById('long');

	active.style.background = '#4a75ee';
	active1.style.display = 'none';
	active2.style.display = 'none';

	var presentTime = document.getElementById('shortTimer').innerHTML;
	var timeArray = presentTime.split(/[:]+/);
	var m = timeArray[0];
	var s = checkSecond(timeArray[1] - 1);

	if (s == 59) {
		m = m - 1;
	}
	if (m < 0) {
		soundAlarm();
		let goBack = document.getElementById('button2');
		goBack.innerHTML = 'Go back';
		let shortBreak = document.getElementById('p2');
		shortBreak.innerHTML = 'Hope you had a good break! Time to get back into the flow.';
		document.getElementById('shortTimer').innerHTML = shortTime;
		document.getElementById('title').innerHTML = 'Times up!';
		document.getElementById('shortTimer').style.display = 'none';
		document.getElementById('stimerDiv').style.display = 'none';
		return;
	}

	let timeLeft = (document.getElementById('shortTimer').innerHTML = m + ':' + s);

	setTimeout(shortStart, 1000);

	document.getElementById('title').innerHTML = 'Short Break: ' + timeLeft;
}

function shortPause() {
	paused = true;
	var inactive = document.getElementById('short');
	var inactive1 = document.getElementById('flow');
	var inactive2 = document.getElementById('long');

	inactive.style.background = '#5769c5';
	inactive1.style.display = '';
	inactive2.style.display = '';

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
