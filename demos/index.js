const { types } = require('mobx-state-tree')

const Powerpuff = types
  .model({
    name: types.string,
    mood: types.enumeration(['happy', 'aggressive']),
  })

// /!\ doesn't work since the mood 'sad' is not into the enumeration
// const rebelle = Powerpuff.create({ name: 'Rebelle', mood: 'sad' })

// do work - 'aggressive' is into the enumeration
const rebelle = Powerpuff.create({ name: 'Rebelle', mood: 'happy' })
console.log(JSON.stringify(rebelle.toJSON(), null, 2))
