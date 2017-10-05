import { inject } from 'mobx-react'
import List from './list'

export default inject(({ store }) => ({
  powerpuffs: store.powerpuffs,
}))(List)
