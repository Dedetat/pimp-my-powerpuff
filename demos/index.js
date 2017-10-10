const { types } = require('mobx-state-tree')

const Powerpuff = types
  .model({
    name: types.string,
  })

// - /!\ doesn't work since `name` is mandatory
// const powerpuff = Powerpuff.create({ })

// - does work has we fill out the name field
const powerpuff = Powerpuff.create({ name: 'Rebelle' })

console.log(JSON.stringify(powerpuff.toJSON(), null, 2))
