[![npm (scoped)](https://img.shields.io/npm/v/@stahlmandesign/rc-state-context.svg)](https://github.com/stahlmandesign/rc-state-context)
[![license](https://img.shields.io/github/license/stahlmandesign/rc-state-context.svg
)](https://github.com/stahlmandesign/rc-state-context)


# @stahlmandesign/rc-state-context
React component that handles React context Provider and Consumer for use with context API in React v.16.3.0, and especially v16.6.0 with contextType allowing way to subscribe to context from a class

# Git repository
- https://github.com/stahlmandesign/rc-state-context

# Installation
- `npm install --save @stahlmandesign/rc-state-context`

## Usage
```import { StateProvider } from '@stahlmandesign/rc-state-contenxt'```

```import { StateConsumer } from '@stahlmandesign/rc-state-contenxt'```
### Basic
```jsx
import React from 'react'
import { StateProvider } from 'StateContext'

class App extends React.Component{
  state = { data: "I'm a string stored in App.state.data" }
  render(){
    return (

    <div className='App'>
      <StateProvider state={ this.state } setState={ this.setState.bind(this) }>
        {/* NOTE all your other components here including routes etc. */}
        {/* any child component can import StateConsumer */}
        {/* and access the state and setState of the main App */}

        <ExampleChildComponent/>

      </StateProvider>
    </div>

    )
  }
}

export default App

```

```jsx
import React from 'react'
import { StateConsumer } from 'StateContext'

class ExampleChildCompoment extends React.Component {
  static contextType = StateConsumer // as of React v16.6.0

  state = { data: "I'm a string stored in ExampleChildComponent.state.data" }

  render(){
    console.log(this.context.state.data) // I'm a string stored in App.state.data
    console.log(this.state.data) // I'm a string stored in ExampleChildComponent.state.data

    return (

      <div>App.state.data = { this.context.state.data }</div>
      <button onClick={ (e)=>{ this.context.setState({ data: this.context.state.data + ' clicked' })>
        Add 'clicked' to App.state.data
      </button>

      <div>local component state.data = { this.state.data }</div>
      <button onClick={ (e)=>{ this.setState({ data: this.state.data + ' clicked' })>
        Add 'clicked' to ExampleChildComponent.state.data
      </button>
    )	    
  }
}

export default ExampleChildComponent
```
Shows:

> I'm a string stored in App.state.data

> Add 'clicked' to App.state.data

> I'm a string stored in ExampleChildComponent.state.data

> Add 'clicked' to ExampleChildComponent.state.data


### Used in a child component that is not class-based
```jsx
<StateConsumer>
  {({ state, setState }) => (
    <div>App.state.data = { state.data }</div>
  )}
</StateConsumer>
```

# Source

```jsx
import React, { Component, createContext } from 'react'

const { Provider, Consumer } = createContext()

export const StateConsumer = Consumer

export class StateProvider extends Component {
  static defaultProps = {
    state: {}
  }

  state = this.props.state

  render () {
    return (
      <Provider value={{ state: this.state, setState: this.setState.bind(this) }}>
        { this.props.children }
      </Provider>
    )
  }
}


```
# Inspiration

- Based on ideas in this article by the author of `use-simple-state`
  - https://hackernoon.com/building-a-redux-like-state-manager-for-react-cd75cc2853b3
- Uses technique explained by an article on how to use `contextType` to access context in class-based components (much like the old unofficial context API)
  - https://blog.kentcdodds.com/react-hooks-whats-going-to-happen-to-react-context-1881f8a058be

# As an NPM module

- Built according to this tutorial to allow publishing the ES6 React JSX code as an NPM module
  - https://medium.com/@BrodaNoel/how-to-create-a-react-component-and-publish-it-in-npm-668ad7d363ce
- This module has evolved beyond the tutorial and now supports building the `static` keyword by including babel preset `stage-0`
