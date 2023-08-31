gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 3.5,
  }
);

gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
);


// Use the below code if you face any difficulty and delete the above code. 

window.onload = function () {
  var loadingPage = document.querySelector('.loading-page');
  loadingPage.style.opacity = 0; // Set opacity to fade out
  setTimeout(function () {
    loadingPage.style.display = 'none'; // Hide the loading screen after fading
  }, 1000); // Adjust the delay based on your preference
};
