{
    var introHeader = document.querySelector('h1.welcomeText');

    var hourNow = new Date().getHours();
    if (hourNow >= 12) {
        introHeader.innerHTML = 'H1Feasgar math!';
    } else {
        introHeader.innerHTML = 'H1 Madainn mhath!';
    }
}
