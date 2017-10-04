/* eslint-disable no-param-reassign */
import { types } from 'mobx-state-tree'

export default types
  .model({
    screen: 'list',
  })
  .named('Router')
  .actions(self => ({
    goTo: (screen) => {
      self.screen = screen
    },
  }))
