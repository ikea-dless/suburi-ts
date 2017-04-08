import * as React from "react"

interface PropsType {
  count: number
}

export const Counter: React.SFC<PropsType> = (props) => (
  <div>
    { props.count }
    <button onClick= { () => console.log("clicked") }>押すな</button>
  </div>
)
