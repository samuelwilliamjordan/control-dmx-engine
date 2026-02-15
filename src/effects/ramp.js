class RampEffect {
  constructor({ channel, speed = 1 }) {
    this.channel = channel;
    this.speed = speed;
  }

  apply(buffer, timeMs) {
    const t = ((timeMs / 1000) * this.speed) % 1;
    buffer[this.channel] = Math.round(t * 255);
  }
}

module.exports = { RampEffect };
