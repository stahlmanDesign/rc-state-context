import React from 'react'
import PropTypes from 'prop-types'

class Loading extends React.Component {
  render(){
    const { className, style, spinner, message } = this.props

    return (
      <div className={ 'Loading ' + className } style={ style }>
        <div className='spinner'>{ spinner }</div>
        <div className='message'>{ message }</div>
      </div>
    )
  }
}

Loading.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  spinner: PropTypes.node,
  message: PropTypes.node // Anything that can be rendered: numbers, strings, elements or an array (or fragment)
}
Loading.defaultProps = {
  style: {
    textAlign: 'center',
    marginTop:'0em' // can be overridden by providing style property
  },
  className: '',
  spinner: <i className='fa fa-spinner fa-pulse fa-3x fa-fw'/>, // default assumes FontAwesome 4.x loaded
  message: 'Loading…'
}
export default Loading
