function change(){

}
function minus() {

  if(document.getElementById("number").value==0){
    var number = 0;
  }else{
    var number = document.getElementById("number").value;
  }

  if (document.getElementById("num")) {
    var curr = parseInt(document.getElementById("num").innerHTML);
  }

  if (curr && curr <= number) {

    if (curr <= 10) {
      document.getElementById("num").innerHTML = "0" + (curr - 1);
    } else {
      document.getElementById("num").innerHTML = curr - 1;
    }
  } else {
    document.getElementById("num").innerHTML = number;
  }

  setTimeout(function() {
    minus();
  }, 1000);
};
minus();

