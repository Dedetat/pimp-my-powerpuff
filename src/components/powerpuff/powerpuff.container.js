import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'
import Component from './powerpuff'

export default compose(
  inject(({ store }, { id }) => ({
    ...store.powerpuffs.find(p => p.id === id).style,
  })),
  observer,
)(Component)
