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

document.querySelector('.toggle-header').addEventListener('click', function() {
    const info = document.querySelector('.background-info');
    const arrow = document.querySelector('.toggle-arrow');

    if (info.style.display === 'none' || info.style.display === '') {
      info.style.display = 'block';
      arrow.innerHTML = '&#9650;';
    } else {
      info.style.display = 'none';
      arrow.innerHTML = '&#9660;';
    }
  });

document.querySelector('.toggle-header-two').addEventListener('click', function() {
    const info = document.querySelector('.contributions-info');
    const arrow = document.querySelector('.toggle-arrow-two');

    if (info.style.display === 'none' || info.style.display === '') {
      info.style.display = 'block';
      arrow.innerHTML = '&#9650;';
    } else {
      info.style.display = 'none';
      arrow.innerHTML = '&#9660;';
    }
  });

document.querySelector('.toggle-header-three').addEventListener('click', function() {
    const info = document.querySelector('.future-info');
    const arrow = document.querySelector('.toggle-arrow-three');

    if (info.style.display === 'none' || info.style.display === '') {
      info.style.display = 'block';
      arrow.innerHTML = '&#9650;';
    } else {
      info.style.display = 'none';
      arrow.innerHTML = '&#9660;';
    }
  });

document.querySelector('.toggle-header-four').addEventListener('click', function() {
    const info = document.querySelector('.now-info');
    const arrow = document.querySelector('.toggle-arrow-four');

    if (info.style.display === 'none' || info.style.display === '') {
      info.style.display = 'block';
      arrow.innerHTML = '&#9650;';
    } else {
      info.style.display = 'none';
      arrow.innerHTML = '&#9660;';
    }
  });

