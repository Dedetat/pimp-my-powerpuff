import { defaultProps } from 'recompose'
import Add from './add'

export default defaultProps({ onClick: () => { alert('New puff') } })(Add)
