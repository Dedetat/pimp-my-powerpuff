import random from 'lodash/random'
import { types } from 'mobx-state-tree'
import randomColor from 'random-color'

/* eslint-disable no-param-reassign */

export const ColorType = types
  .model({
    color: 'grey',
    type: 1,
  })
  .actions(self => ({
    randomize: () => {
      self.color = randomColor(random(0.7, 1), random(0.8, 1)).hexString()
      self.type = random(0, 1)
    },
  }))

export const Style = types
  .model({
    eye: ColorType,
    dress: ColorType,
    hair: ColorType,
  })

const Powerpuff = types
  .model({
    id: types.identifier(types.string),
    name: types.string,
    style: Style,
  })
  .named('Powerpuff')
  .actions(self => ({
    randomize: () => {
      self.style.eye.randomize()
      self.style.dress.randomize()
      self.style.hair.randomize()
    },
  }))
  .preProcessSnapshot((snapshot) => {
    if (!snapshot) return snapshot
    if (snapshot.style) return snapshot

    return { ...snapshot, style: Style.create({}) }
  })

export default Powerpuff
