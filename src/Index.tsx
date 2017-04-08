import * as React from "react"
import * as ReactDom from "react-dom"
import { Hello } from "components/Hello"

ReactDom.render(<Hello content="hello world!" />, document.getElementById("container"))
