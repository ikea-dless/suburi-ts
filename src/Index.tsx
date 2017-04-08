import * as React from "react"
import * as ReactDom from "react-dom"
import { Hello } from "components/Hello"
import { Counter } from "components/Counter"

ReactDom.render(<Hello content="hello world!" />, document.getElementById("container"))
ReactDom.render(<Counter count={ 0 } />, document.getElementById("container"))
