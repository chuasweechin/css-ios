var addZero = function(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

var setTime = function() {
    var d = new Date();

    document.getElementsByClassName("notificationBar")[0].children[1].innerHTML
        = addZero(d.getHours()) + ":" + addZero(d.getMinutes())
}

setTime();
setInterval(setTime, 1000);