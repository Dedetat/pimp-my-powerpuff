import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import classnames from 'classnames'
import Add from './add'
import Powerpuff from './powerpuff'
import './list.css'

const List = ({ style, className, powerpuffs }) => {
  const classes = classnames(
    className,
    'list',
  )

  return (
    <div style={style} className={classes}>
      {/* new puff */}
      <Add />

      {/* list */}
      {powerpuffs.map(id => <Powerpuff key={id} id={id} />)}
    </div>
  )
}

List.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  powerpuffs: PropTypes.arrayOf(PropTypes.number),
}

List.defaultProps = {
  style: {},
  className: '',
  powerpuffs: [],
}

export default onlyUpdateForPropTypes(List)
