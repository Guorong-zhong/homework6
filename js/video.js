var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log(video)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.getElementById("volume").innerHTML = video.volume * 100 + '%';
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log(this);
	video.volume = this.value / 100;
	// document.getElementById("volumeSlider").value = this.value;
	document.getElementById("volume").innerHTML = this.value + "%";
	console.log(video.volume);
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slower the Video");
	video.playbackRate *= 0.9;
	console.log("speed is "+video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Faster the Video");
	video.playbackRate /= 0.9;
	console.log("speed is "+video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip the Video");
	console.log(video.currentTime)
	duration = video.duration;
	// newTime = video.currentTime + 5;
	if(video.currentTime + 5 > duration){
		video.currentTime = 0;
		console.log("going back to beginning");
		console.log("current location 0");
		video.play();
	}else{
		video.currentTime += 5;
		console.log("current location "+ video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute/Unmute Video");
	mu = document.getElementById("mute").innerHTML;
	if(mu === 'Mute'){
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}else{
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
});

document.querySelector("#old").addEventListener("click", function() {
	console.log("Oldschool Video");
	// document.getElementById('myVideo').className += 'oldTime';
	document.getElementById('myVideo').classList.add('oldTime');
});

document.querySelector("#original").addEventListener("click", function() {
	console.log("Original Video");
	document.getElementById('myVideo').classList.remove("oldTime");
});
