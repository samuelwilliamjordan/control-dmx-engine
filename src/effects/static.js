class StaticEffect {
  constructor({ channel, value }) {
    this.channel = channel;
    this.value = value;
  }

  apply(buffer) {
    buffer[this.channel] = this.value;
  }
}

module.exports = { StaticEffect };
