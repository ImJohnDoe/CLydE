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

if (hour < 10) {
  simply.subtitle("                                 0" + hour + ":" + minute);
} else {
  simple.subtitle("                                  " + hour + ":" + minute);
}


simply.on('singleClick', function(e) {
  if (e.button === 'up') {
    if(minute === 59) {
      minute = 0;
        if (hour != 12) {
          hour += 1;
        } else {
          hour = 1;
        }
    } else {
      minute += 1;
    }
    if (hour < 10) {
      simply.subtitle("                                 0" + hour + ":" + minute);
    } else {
      simple.subtitle("                                  " + hour + ":" + minute);
    }
  } else if (e.button === 'down') {
    if (minute === 0) {
      minute = 59;
       if (hour != 1) {
          hour -= 1;
        } else {
          hour = 12;
        }
      } else {
        minute -= 1;
      }
    if (hour < 10) {  
      simply.subtitle("                                 0" + hour + ":" + minute);
    } else {
      simple.subtitle("                                  " + hour + ":" + minute);
    }
  }
});


