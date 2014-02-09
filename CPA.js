simply.body("", true);


simply.title('        CLydE');

var time = new Date();
var hour = time.getHours(); 
var minute = time.getMinutes();

simply.home(hour + ":" + minute);


simply.on('singleClick', function(e) {
  if (e.button === 'up') {
    minute += 1;
    simply.body(hour + ":" + minute);
  } else if (e.button === 'down') {
    minute -= 1;
    simply.body(hour + ":" + minute);
  }
});


