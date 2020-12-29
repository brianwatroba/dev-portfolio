const removeBalls = () => {
  const balls = document.querySelectorAll('.ball');
  balls.forEach((ball) => ball.remove());
  return;
};

module.exports = removeBalls;
