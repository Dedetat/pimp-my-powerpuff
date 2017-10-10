const { types } = require('mobx-state-tree')

const Powerpuff = types
  .model({
    name: types.string,
    mood: types.enumeration(['happy', 'aggressive']),
  })

// /!\ doesn't work since the mood 'sad' is not into the enumeration
// const powerpuff = Powerpuff.create({ name: 'Rebelle', mood: 'sad' })

// do work - 'aggressive' is into the enumeration
const powerpuff = Powerpuff.create({ name: 'Rebelle', mood: 'aggressive' })
console.log(JSON.stringify(powerpuff.toJSON(), null, 2))
