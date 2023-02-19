function displayTime () {
	var timeStamp = document.getElementById("time");
	var now = new Date();
	timeStamp.innerHTML = now;
}

displayTime();


setInterval(displayTime, 1000);