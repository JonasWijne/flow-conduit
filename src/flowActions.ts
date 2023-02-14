import { CANCEL_FLOW, Flow, FlowAction, START_FLOW } from './types'

export function cancelFlow(): FlowAction {
  return { type: CANCEL_FLOW } as const
}

export function startFlow(flow: Flow): FlowAction {
  return {
    type: START_FLOW,
    payload: flow,
  }
}
