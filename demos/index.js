const { types } = require('mobx-state-tree')

const Powerpuff = types
  .model({
    name: types.maybe(types.string),
  })

// both do work
let rebelle = Powerpuff.create({ })
console.log(JSON.stringify(rebelle.toJSON(), null, 2))

rebelle = Powerpuff.create({ name: 'Rebelle' })
console.log(JSON.stringify(rebelle.toJSON(), null, 2))
