function addRobot() {
  //change this if you add a new robot svg
  var howManyRobots = 8;

  var numRobot = Math.floor(Math.random() * howManyRobots + 1);
  document.getElementById('robot-img').src =
    '../media/robot0' + numRobot + '.svg';
}
addRobot();
