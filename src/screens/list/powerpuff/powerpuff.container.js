import { defaultProps } from 'recompose'
import Powerpuff from './powerpuff'

export default defaultProps({ name: 'Delphine', onClick: () => { alert('open puff') } })(Powerpuff)
