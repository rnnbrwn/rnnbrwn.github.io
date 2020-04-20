function changeRobot() {
  //change this if you add a new robot svg
  var howManyRobots = 43;
  // var numRobot = 42;
  numRobot = Math.floor(Math.random() * howManyRobots + 1);
  document.getElementById('robot-img').src =
    '../media/robot0' + numRobot + '.svg';
}
changeRobot();
