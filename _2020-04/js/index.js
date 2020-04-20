let introHeader = document.querySelector('h1.welcomeText');

var hourNow = new Date().getHours();
if (hourNow >= 12) {
  introHeader.innerHTML = 'Feasgar math!';
} else {
  introHeader.innerHTML = 'Madainn mhath!';
}
