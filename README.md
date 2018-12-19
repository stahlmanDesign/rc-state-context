[![npm (scoped)](https://img.shields.io/npm/v/@stahlmandesign/rc-loading-spinner.svg)](https://github.com/stahlmandesign/rc-loading-spinner)
[![license](https://img.shields.io/github/license/stahlmandesign/rc-loading-spinner.svg
)](https://github.com/stahlmandesign/rc-loading-spinner)


# @stahlmandesign/rc-loading-spinner
React component that shows a loading spinner and a message

# Git repository
- https://github.com/stahlmandesign/rc-loading-spinner

# Installation
- `npm install --save @stahlmandesign/rc-loading-spinner`

## Usage
```import Loading from '@stahlmandesign/rc-loading-spinner'```
### Basic
```jsx
<Loading />
```
Shows:

> Loading…



### Customizing with props	
```jsx
<Loading
	message={ 'Your string or component' }
	spinner={ <img src={ yourImportedGif } /> }
	className={ 'your-optional-class-names' }
	style={{ background: 'red', textAlign: 'right' }}
/>
```

# Source

```jsx
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

```


# As an NPM module
- Built according to this tutorial to allow publishing the ES6 React JSX code as an NPM module
- https://medium.com/@BrodaNoel/how-to-create-a-react-component-and-publish-it-in-npm-668ad7d363ce
	
