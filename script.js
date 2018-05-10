function calculate(){

  var total = 0;
  var userNumPages = document.getElementById("num-pages").value;
  if(userNumPages == ""){
    total += 0
  } else {
    total += Number(userNumPages);
  }

  var checkboxes = document.getElementsByClassName("feature-checkbox");
  for(var i = 0; i < checkboxes.length; i++){
    if(checkboxes[i].checked){
      total += Number(checkboxes[i].value);
    }
  }

  document.getElementById("price").innerHTML = "$" + total;
}

function clear(){
  document.getElementById("name").innerHTML = "";
  document.getElementById("pro-des").innerHTML = "";
  document.getElementById("email").innerHTML = "";
}

var checkboxes = document.getElementsByClassName("feature-checkbox");
for(var i = 0; i < checkboxes.length; i++){
  checkboxes[i].addEventListener("change", calculate);
}

document.getElementById("num-pages").addEventListener("keyup", calculate);
