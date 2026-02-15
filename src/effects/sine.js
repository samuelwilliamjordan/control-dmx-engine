class SineEffect {
  constructor({ channel, min = 0, max = 255, speed = 1 }) {
    this.channel = channel;
    this.min = min;
    this.max = max;
    this.speed = speed;
  }

  apply(buffer, timeMs) {
    const t = (timeMs / 1000) * this.speed;
    const v = (Math.sin(t * Math.PI * 2) + 1) / 2; // 0–1
    buffer[this.channel] = Math.round(this.min + v * (this.max - this.min));
  }
}

module.exports = { SineEffect };
