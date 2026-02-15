module.exports = {
  Engine: require('./src/engine').Engine,

  // Effects
  ChaseEffect: require('./src/effects/chase').ChaseEffect,
  RampEffect: require('./src/effects/ramp').RampEffect,
  SineEffect: require('./src/effects/sine').SineEffect,
  StaticEffect: require('./src/effects/static').StaticEffect,
  StrobeEffect: require('./src/effects/strobe').StrobeEffect,
};