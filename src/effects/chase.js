class ChaseEffect {
  constructor({ channels = [], speed = 1 }) {
    this.channels = channels;
    this.speed = speed;
  }

  apply(buffer, timeMs) {
    const index = Math.floor((timeMs / 1000) * this.speed) % this.channels.length;
    buffer[this.channels[index]] = 255;
  }
}

module.exports = { ChaseEffect };
