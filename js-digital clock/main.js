function getTime(){
    var now = new Date ();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var seconds= now.getSeconds();

    var day = now.getDate();
    var month = now.getMonth()+1;
    var year =now.getFullYear();

   (hour<10) ? document.getElementById("hour").innerText="0"+hour:document.getElementById("hour").innerText = hour;
    (minute < 10) ? document.getElementById("minute").innerText = "0" + minute : document.getElementById("minute").innerText = minute;
    (seconds < 10) ? document.getElementById("second").innerText = "0" + seconds : document.getElementById("second").innerText = seconds;

  (day < 10 ) ? document.getElementById("date").innerText = "0" + day + "/" + month + "/" + year : document.getElementById("date").innerText = day + "/" + month + "/" + year;
  (month <10) ? document.getElementById('date').innerText = day+ "/"+ "0" +month+ "/" +year : document.getElementById('date').innerText=day+ "/"+month+ "/" +year;
    
}
  setInterval(function () {
        getTime();
    }, 1000);