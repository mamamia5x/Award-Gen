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