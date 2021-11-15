var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate*=0.95;
	console.log("New video speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate/=0.95;
	console.log("New video speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime);
	if (video.currentTime + 15 > video.duration){
		console.log("Going back to beginning");
		video.currentTime = 0;
	}
	else{
		video.currentTime = video.currentTime + 15;
	}
	console.log("New location " + video.currentTime);
	if(video.paused){
		video.play();
	}
});

document.querySelector("#mute").addEventListener("click", function() {
    if(video.muted){
		document.getElementById("mute").innerText="Mute";
		video.muted=false;
	}
	else{
		document.getElementById("mute").innerText="Unmute";
		video.muted=true;
	}
});

var slider_volume=document.getElementById("slider");
document.getElementById("volume").innerText=slider_volume.value+'%';

document.querySelector("#slider").addEventListener("input", function() {
    document.getElementById("volume").innerText=slider_volume.value+'%';
	video.volume=slider_volume.value/100;
	console.log(video.volume)
});


document.querySelector("#vintage").addEventListener("click", function() {
    if (video.getAttribute('class')) {   
		if (video.getAttribute('class').indexOf('oldSchool') < 0) {
			video.classList.add('oldSchool');   
		}
   }
});

document.querySelector("#orig").addEventListener("click", function() {
    if (video.getAttribute('class')) {   
		if (video.getAttribute('class').indexOf('oldSchool') > -1) {
			video.classList.remove('oldSchool');   
		}
   }
});