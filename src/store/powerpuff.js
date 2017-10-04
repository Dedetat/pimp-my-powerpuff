import { types } from 'mobx-state-tree'

export const ColorType = types
  .model({
    color: 'grey',
    type: 1,
  })

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
  .preProcessSnapshot((snapshot) => {
    if (!snapshot) return snapshot
    if (snapshot.style) return snapshot

    return { ...snapshot, style: Style.create({}) }
  })

export default Powerpuff
