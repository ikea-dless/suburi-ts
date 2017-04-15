import * as React from "react"

interface PropsType {
  count: number
  actions: any
}

export const Counter: React.SFC<PropsType> = (props) => (
  <div>
    { props.count }
    <button onClick={ () => props.actions.incrementCounter() }>増やす</button>
    <button onClick={ () => props.actions.decrementCounter() }>減らす</button>
    <button onClick={ () => props.actions.clearCounter() }>クリア</button>
  </div>
)
