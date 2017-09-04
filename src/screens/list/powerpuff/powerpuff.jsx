import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import classnames from 'classnames'
import Card from '../card'
import PowerpuffStylizer from '../../../components/powerpuff'
import './powerpuff.css'

const Powerpuff = ({ style, className, name, onClick }) => {
  const classes = classnames(
    className,
    'item-powerpuff-card',
  )

  return (
    <Card style={style} className={classes} onClick={onClick}>
      {name}

      <div className="item-powerpuff-container">
        <PowerpuffStylizer className="item-powerpuff-stylizer" />
      </div>
    </Card>
  )
}

Powerpuff.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
}

Powerpuff.defaultProps = {
  style: {},
  className: '',
  name: undefined,
  onClick: undefined,
}

export default onlyUpdateForPropTypes(Powerpuff)
