class Engine {
  constructor() {

    // universe: { effects: [], buffer: Buffer }
    this.universes = new Map(); 
  }

  // Ensure universe exists
  getUniverse(universe) {
    if (!this.universes.has(universe)) {
      this.universes.set(universe, {
        effects: [],
        buffer: Buffer.alloc(512, 0)
      });
    }
    return this.universes.get(universe);
  }

  // Add an effect to a universe
  addEffect(universe, effect) {
    const u = this.getUniverse(universe);
    u.effects.push(effect);
  }

  // Remove all effects from a universe
  clearEffects(universe) {
    const u = this.getUniverse(universe);
    u.effects = [];
  }

  // Call this inside DMX loop once per frame
  update(timeMs) {
    for (const [universe, u] of this.universes.entries()) {
      u.buffer.fill(0);

      for (const effect of u.effects) {
        effect.apply(u.buffer, timeMs);
      }
    }
  }

  // Get DMX buffer for a universe
  getDMX(universe) {
    const u = this.getUniverse(universe);
    return u.buffer;
  }
}

module.exports = { Engine };
