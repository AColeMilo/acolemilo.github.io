const images = [
	'page_images/all1.jpg',
	'page_images/lucy1.jpg',
	'page_images/lucy2.jpg',
	'page_images/lucy3.jpg',
	'page_images/lucy4.jpg',
	'page_images/ronin1.jpg',
	'page_images/ronin2.jpg',
	'page_images/ronin3.jpg',
	'page_images/ronin4.jpg',
	'page_images/decker1.jpg',
	'page_images/decker2.jpg',
	'page_images/cali1.jpg',
	'page_images/cali2.jpg',
	'page_images/jack1.jpg',
	'page_images/jack2.jpg',
	'page_images/j&c1.jpg',
	'page_images/j&c2.jpg',
	'page_images/j&c3.jpg',
	'page_images/j&c4.jpg',
	'page_images/j&c5.jpg',
	'page_images/cali3.jpg'
];

let currentIndex = 0; 
 
function changeImage() { 
    const img1_1 = document.getElementById('img1_1'); 
    currentIndex = (currentIndex + 1) % images.length; 
    img1_1.style.opacity = 0; 
    setTimeout(() => { 
        img1_1.src = images[currentIndex]; 
        img1_1.style.opacity = 1; 
    }, 1000); 
} 
 
setInterval(changeImage, 5000); 

/* Set the width of the side navigation to 250px */
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
    document.getElementById("main").style.marginLeft = "150px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }




// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  //Get the button
  let mybutton = document.getElementById("topBtn");
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the top button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function compareEmailAddresses() {
	
  var emailA = document.getElementById('emailA').value;
  var emailB = document.getElementById('emailB').value;

  if (emailA !== emailB) {
      alert("The email addresses must match. Please re-enter them.");
      return false;
}
  return true; 

}