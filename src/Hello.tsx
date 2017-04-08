import * as React from "react"

interface PropsType {
  content: string
}

export const Hello: React.SFC<PropsType> = (props) => (
  <div>
    { props.content }
  </div>
)
