var table = document.getElementById("table");

function add(type){
  if (type == "nominee"){
    var i = 0;
    while (i < table.rows.length){
      var cell = table.rows[i].insertCell(1);
      i ++;
    }
    table.rows[0].cells[1].innerHTML = '<strong>Nominee</strong>';
  }
  else if (type == "award"){
    var row = table.insertRow(-1);
    var i = 0;
    while (i < table.rows[0].cells.length){
      row.insertCell(0);
      i ++;
    }
  }
  else if (type == "remove"){
    table.deleteRow(-1);
  }
}


/**************************************************
 *                                                *
 *   Scripts under here don't need to be edited   *
 *                                                *
 **************************************************
 */

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}


function timeloop (){
  var time = new Date();
  var hour = time.getHours();
  var ap;
  if (hour > 12){
    hour = hour - 12;
    ap = "PM";
  }
  else{
    ap = "AM";
  }
  minute = time.getMinutes();
  if (minute < 10){
    minute = "0" + minute;
  } 
  var curtime = hour + ":" + minute + " " + ap;
  document.getElementById("time").innerHTML = curtime;
  var tall = document.getElementById("time").offsetHeight;
  tall += "px";
  document.getElementById("time").style.height = tall;
}
setInterval(timeloop, 1000);