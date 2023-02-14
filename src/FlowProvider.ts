import { Context, Dispatch, ReactNode, useReducer } from 'react'
import { Flow, FlowAction, initialState } from './types'
import { FlowReducer } from './FlowReducer'

export function FlowProvider({
  children,
  flowContext,
  dispatchStateContext,
}: {
  children: ReactNode
  flowContext: Context<Flow>
  dispatchStateContext: Context<Dispatch<FlowAction>>
}): ReactNode {
  const [state, dispatch] = useReducer(FlowReducer, initialState)

  return flowContext.Provider({
    value: state,
    children: dispatchStateContext.Provider({ value: dispatch, children }),
  })
}
