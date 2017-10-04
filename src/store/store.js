/* eslint-disable no-param-reassign */
import { types, onPatch } from 'mobx-state-tree'
import Powerpuff from './powerpuff'
import Router from './router'

const Store = types
  .model({
    router: Router,
    edited: types.maybe(Powerpuff),
    powerpuffs: types.array(Powerpuff),
  })
  .named('store')
  .actions(self => ({
    fetch: () => {
      // reinit
      self.powerpuffs = []

      // fetch
      const powerpuffs = [
        {
          id: 'powerpuff-1',
          name: 'Delphine',
          style: {
            eye: { color: 'green' },
            dress: { color: 'green' },
            hair: { color: 'green', type: 0 },
          },
        },
        {
          id: 'powerpuff-2',
          name: 'Fabien',
          style: {
            eye: { color: 'red' },
            dress: { color: 'red' },
            hair: { color: 'red', type: 1 },
          },
        },
      ]

      // save
      self.powerpuffs = powerpuffs.map(powerpuff => Powerpuff.create(powerpuff))
    },
  }))

export default () => {
  const store = Store.create({
    router: Router.create({}),
    powerpuffs: [],
  })

  // eslint-disable-next-line no-console
  console.log('[store-init]', store.toJSON())

  // on each patch
  onPatch(store, (patch) => {
    // eslint-disable-next-line no-console
    console.log('[store-patch]', patch)
  })

  return store
}
