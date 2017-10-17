const { types } = require('mobx-state-tree')

const Powerpuff = types
  .model({
    name: types.string,
  })

// - /!\ doesn't work since `name` is mandatory
// const rebelle = Powerpuff.create({ })

// - does work has we fill out the name field
const rebelle = Powerpuff.create({ name: 'Rebelle' })

console.log(JSON.stringify(rebelle.toJSON(), null, 2))
