import { inject } from 'mobx-react'
import Powerpuff from './powerpuff'

export default inject(({ store }, { id }) => {
  const powerpuff = store.powerpuffs.find(p => p.id === id)

  return {
    ...powerpuff,
    onClick: powerpuff.randomize,
  }
})(Powerpuff)
