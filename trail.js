class Spark {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = random(0, TWO_PI);
    this.speed = random(2, 6);
    this.vx = cos(this.angle) * this.speed;
    this.vy = sin(this.angle) * this.speed;
    this.alpha = 255;
    this.size = random(2, 4);
    this.color = color(random(200, 255), random(200, 255), 0);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 1.2; // Slower fade = longer lifespan
  }

  show() {
    noStroke();
    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.alpha);
    ellipse(this.x, this.y, this.size);
  }

  isDead() {
    return this.alpha <= 0;
  }
}
