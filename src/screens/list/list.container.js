import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'
import List from './list'

export default compose(
  inject(({ store }) => ({
    powerpuffs: store.powerpuffs,
  })),
  observer,
)(List)
