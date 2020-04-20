function addRobot() {
  //change this if you add a new robot svg
  var numOfRobots = 4;

  var numRobot = Math.floor(Math.random() * numOfRobots + 1);
  document.getElementById('robot-img').src =
    '../media/robot0' + numRobot + '.svg';
}
addRobot();
