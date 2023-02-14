import { Reducer } from 'react'
import {
  CANCEL_FLOW,
  Flow,
  FlowAction,
  initialState,
  START_FLOW,
} from './types'

export const FlowReducer: Reducer<Flow, FlowAction> = (
  state,
  { type, payload }
) => {
  switch (type) {
    case START_FLOW:
      return payload || initialState
    case CANCEL_FLOW:
      return initialState
    default:
      return state
  }
}
