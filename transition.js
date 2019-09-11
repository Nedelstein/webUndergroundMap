var busyImg = new Image(1080, 1920);
var timelineImg = new Image(1080, 1920);

busyImg.src = "assets/subwaymap_busy.png";
timelineImg.src = "assets/subwaymap_timeline.gif";

document.getElementById("image").src = busyImg;

var startTime = Date.now();
var timer = setInterval(function() {
  var timePassed = Date.now() - startTime;
  if (timePassed >= 7000) {
    document.getElementById("image").src = timelineImg;
    clearInterval(timer);
  }
}, 20);
