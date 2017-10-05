import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import classnames from 'classnames'
import Card from '../card'
import PowerpuffStylizer from '../../../components/powerpuff'
import './powerpuff.css'

const Powerpuff = ({ style, className, name, id, onClick }) => {
  const classes = classnames(
    className,
    'item-powerpuff-card',
  )

  return (
    <Card style={style} className={classes} onClick={onClick}>
      {name}

      <div className="item-powerpuff-container">
        <PowerpuffStylizer id={id} className="item-powerpuff-stylizer" />
      </div>
    </Card>
  )
}

Powerpuff.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
}

Powerpuff.defaultProps = {
  style: {},
  className: '',
  name: undefined,
  onClick: undefined,
  id: undefined,
}

export default observer(Powerpuff)
