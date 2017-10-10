const { types } = require('mobx-state-tree')

const Powerpuff = types
  .model({
    name: types.string,
    mood: types.enumeration(['happy', 'aggressive']),
  })
  .actions(self => ({
    setMood: (mood) => { self.mood = mood },
  }))

const rebelle = Powerpuff.create({ name: 'Rebelle', mood: 'happy' })

// /!\ doesn't work since we don't use an action to mutate the model
// rebelle.mood = 'aggressive'

// does work because we use an action
rebelle.setMood('aggressive')

console.log(JSON.stringify(rebelle.toJSON(), null, 2))
