function draw() {
  // Dark semi-transparent background for longer trails
  background(17, 17, 17, 25); // Lower alpha = longer trails

  for (let i = sparks.length - 1; i >= 0; i--) {
    sparks[i].update();
    sparks[i].show();
    if (sparks[i].isDead()) {
      sparks.splice(i, 1);
    }
  }

  // Optional: display spark count
  fill(255, 255, 0);
  text(`Sparks: ${sparkCount}`, width / 2, height / 2);
}
