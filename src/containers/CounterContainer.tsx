import * as React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import counterActions from "actions/CounterActions"
import { Counter } from "components/Counter"

const mapStateToProps = (state) => ({ count: state.count })

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(counterActions, dispatch)
  }
}

interface PropsType {
  count: number,
  actions: any
}

const BaseComponent: React.SFC<PropsType> = (props) => (
  <Counter { ...props } />
)

export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(BaseComponent)
