interface ActionTypes {
  type: string
}

export const incrementCounter = (): ActionTypes => (
  {
    type: "INCREMENT_COUNTER"
  }
)

export const decrementCounter = (): ActionTypes => (
  {
    type: "DECREMENT_COUNTER"
  }
)

export const clearCounter = (): ActionTypes => (
  {
    type: "CLEAR_COUNTER"
  }
)

export default { incrementCounter, decrementCounter, clearCounter }
