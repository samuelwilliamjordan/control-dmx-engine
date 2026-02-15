class StrobeEffect {
  constructor({ channel, speed = 10 }) {
    this.channel = channel;
    this.speed = speed;
  }

  apply(buffer, timeMs) {
    const phase = Math.floor((timeMs / 1000) * this.speed) % 2;
    buffer[this.channel] = phase === 0 ? 255 : 0;
  }
}

module.exports = { StrobeEffect };
