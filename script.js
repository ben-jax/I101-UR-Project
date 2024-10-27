/* 
simple js functions for side nav bar animations
this is probably all the js we will need in this porject
*/

function openNav() {
    document.getElementById("my-side-nav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("bar").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("my-side-nav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "auto";
    document.getElementById("bar").style.marginLeft = "0px";
  }