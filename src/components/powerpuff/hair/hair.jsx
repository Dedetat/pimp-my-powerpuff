import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import Hair1 from './hair-1'
import Hair2 from './hair-2'

const Hair = ({ type, ...rest }) => {
  switch (type) {
    case 0: return <Hair1 {...rest} />
    case 1: return <Hair2 {...rest} />
    default: return null
  }
}

Hair.propTypes = {
  type: PropTypes.number,
}

Hair.defaultProps = {
  type: undefined,
}

export default onlyUpdateForPropTypes(Hair)
