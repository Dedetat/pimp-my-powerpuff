const { types } = require('mobx-state-tree')

const Powerpuff = types
  .model({
    name: types.string,
    mood: types.enumeration(['happy', 'aggressive']),
  })

const rebelle = Powerpuff.create({ name: 'Rebelle', mood: 'happy' })

// /!\ doesn't work since we don't use an action to mutate the model
// rebelle.mood = 'aggressive'

console.log(JSON.stringify(rebelle.toJSON(), null, 2))
