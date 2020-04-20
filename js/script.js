function addRobot() {
  var numRobot = Math.floor(Math.random() * 2 + 1);
  document.getElementById('robot-img').src =
    '../media/robot0' + numRobot + '.svg';
}
addRobot();
