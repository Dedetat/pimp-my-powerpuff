const { types } = require('mobx-state-tree')

const Powerpuff = types
  .model({
    name: types.maybe(types.string),
  })

// both do work
let powerpuff = Powerpuff.create({ })
console.log(JSON.stringify(powerpuff.toJSON(), null, 2))

powerpuff = Powerpuff.create({ name: 'Rebelle' })
console.log(JSON.stringify(powerpuff.toJSON(), null, 2))
