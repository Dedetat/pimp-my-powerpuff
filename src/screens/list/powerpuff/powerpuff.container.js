import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'
import Powerpuff from './powerpuff'

export default compose(
  inject(({ store }, { id }) => {
    const powerpuff = store.powerpuffs.find(p => p.id === id)

    return {
      ...powerpuff,
      onClick: powerpuff.randomize,
    }
  }),
  observer,
)(Powerpuff)
