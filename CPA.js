simply.body("", true);


simply.title('        CLydE');

var time = new Date();
var hour;
if(time.getHours() > 12){
  hour = time.getHours() - 12;
} else {
  hour = time.getHours();
}
var minute = time.getMinutes();

simply.subtitle("                                    " + hour + ":" + minute);


simply.on('singleClick', function(e) {
  if (e.button === 'up') {
    minute += 1;
    simply.subtitle("                                    " + hour + ":" + minute);
  } else if (e.button === 'down') {
    minute -= 1;
    simply.subtitle("                                    " + hour + ":" + minute);
  }
});


