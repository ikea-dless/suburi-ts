import CounterActions from "actions/CounterActions"

interface CounterEntity {
  count: number
}

const initialState: CounterEntity = { count: 0 }

export const counterReducer = (state: CounterEntity = initialState, { type }: any): CounterEntity => {
  switch(type) {
    case "INCREMENT_COUNTER": {
      const newCount = { count: state.count + 1 }
      return { ...state, ...newCount }
    }
    case "DECREMENT_COUNTER": {
      const newCount = { count: state.count - 1 }
      return { ...state, ...newCount }
    }
    case "CLEAR_COUNTER": {
      const newCount = { count: 0 }
      return { ...state, ...newCount }
    }
    default:
      return state
  }
}
