import { inject } from 'mobx-react'
import Component from './powerpuff'

export default inject(({ store }, { id }) => ({
  ...store.powerpuffs.find(p => p.id === id).style,
}))(Component)
