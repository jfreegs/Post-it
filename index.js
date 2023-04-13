if (localStorage["sticky"]) {
    var sticky = localStorage["sticky"];
    document.getElementById("sticky").value = sticky;
  } 
  function savePost() {
    var sticky = document.getElementById("sticky").value;
    localStorage.setItem("sticky", sticky);
  }
