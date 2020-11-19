window.onload=function(){

    let btn = document.getElementById("lookup");
    
  
    btn.addEventListener("click",function(element){
      element.preventDefault();
      
      loadDoc();
  
    });
  
    function loadDoc() {
      var text = document.getElementById("country").value;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let rest = this.responseText;
            document.getElementById("result").innerHTML = rest;
        }
      };
      xhttp.open("GET", "world.php"+"?country="+text, true);
      xhttp.send();
    }
  }
  
  
  
  