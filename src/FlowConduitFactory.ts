import { createContext, Dispatch, ReactNode, useContext } from 'react'
import {
  Flow,
  FlowAction,
  FlowFunction,
  FlowMapping,
  initialState,
} from './types'
import { FlowConduit } from './FlowConduit'
import { FlowProvider } from './FlowProvider'
import { cancelFlow, startFlow } from './flowActions'

export type FlowConduitFactoryReturnType = {
  FlowProvider({ children }: { children: ReactNode }): ReactNode
  useDispatch(): Dispatch<FlowAction>
  useCancelFlow(): () => void
  useStartFlow(): (flow: Flow) => void
  FlowConduit({
    flowMapping,
  }: {
    flowMapping: Record<string, FlowFunction>
  }): ReactNode
}

export function FlowConduitFactory(): FlowConduitFactoryReturnType {
  const flowContext = createContext(initialState)
  const dispatchStateContext = createContext<Dispatch<FlowAction>>(() => {
    throw new Error('Dispatch function not provided')
  })

  return {
    FlowProvider({ children }: { children: ReactNode }) {
      return FlowProvider({
        children,
        flowContext,
        dispatchStateContext,
      })
    },
    useCancelFlow() {
      const dispatch = useContext(dispatchStateContext)
      return () => dispatch(cancelFlow())
    },
    useStartFlow() {
      const dispatch = useContext(dispatchStateContext)
      return (flow: Flow) => dispatch(startFlow(flow))
    },
    useDispatch() {
      return useContext(dispatchStateContext)
    },
    FlowConduit({ flowMapping }: { flowMapping: FlowMapping }) {
      return FlowConduit({ flowMapping, flowContext })
    },
  }
}
