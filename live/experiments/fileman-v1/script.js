let isflagenabled = localStorage.getItem("filemanflag"); // Set to 0 to disable the file manager
var menuVisible = 0;
function showhidemenu() {
    if (menuVisible === 0) {
        document.getElementById("menu").style.display = "block";
        menuVisible = 1;
    } else {
        document.getElementById("menu").style.display = "none";
        menuVisible = 0;
        document.getElementById("menu1").style.display = "none";
        document.getElementById("menu2").style.display = "none";
        document.getElementById("menu3").style.display = "none";
        document.getElementById("menu4").style.display = "none";
    }
}
function openmenu(id) {
       document.getElementById("menu" + id).style.display = "block";
       if (id == 1) {
           document.getElementById("menu2").style.display = "none";
           document.getElementById("menu3").style.display = "none";
           document.getElementById("menu4").style.display = "none";
       } else if (id == 2) {
           document.getElementById("menu1").style.display = "none";
           document.getElementById("menu3").style.display = "none";
           document.getElementById("menu4").style.display = "none";
       } else if (id == 3) {
           document.getElementById("menu1").style.display = "none";
           document.getElementById("menu2").style.display = "none";
           document.getElementById("menu4").style.display = "none";
       } else if (id == 4) {
           document.getElementById("menu1").style.display = "none";
           document.getElementById("menu2").style.display = "none";
           document.getElementById("menu3").style.display = "none";
       } else if (id == 0) {
           document.getElementById("menu1").style.display = "none";
           document.getElementById("menu2").style.display = "none";
           document.getElementById("menu3").style.display = "none";
           document.getElementById("menu4").style.display = "none";
       }
}
if (isflagenabled == 0) {
    location.href = "../../USERFILE/";
    
}