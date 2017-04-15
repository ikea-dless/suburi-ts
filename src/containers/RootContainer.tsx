import * as React from "react"
import { Component } from "react"
import { CounterContainer } from "containers/CounterContainer"
import { store } from "store"
import { Provider } from "react-redux"

export default class RootContainer extends Component<any, any> {
  constructor() {
    super()
  }
  render() {
    return (
      <Provider store={ store() }>
        <CounterContainer { ...this.props } />
      </Provider>
    )
  }
}
