import React, {createContext, Dispatch, useContext, useReducer} from 'react'
import {Flow, FlowAction, FlowFunction, initialState,} from './types'
import {FlowConduit} from './FlowConduit'
import {cancelFlow, startFlow} from './flowActions'
import {FlowReducer} from "./FlowReducer";

export type FlowConduitFactoryReturnType = {
    FlowProvider({children}: { children: JSX.Element }): JSX.Element
    useCancelFlow(): () => void
    useStartFlow(): (flow: Flow) => void
    FlowConduit({flowMapping}: { flowMapping: Record<string, FlowFunction> }): JSX.Element
}

export function FlowConduitFactory(): FlowConduitFactoryReturnType {
    const flowContext = createContext(initialState)
    const dispatchContext = createContext<Dispatch<FlowAction>>(() => {
        throw new Error('Dispatch function not provided')
    })

    return {
        FlowProvider({children}) {
            const [state, dispatch] = useReducer(FlowReducer, initialState)
            return (
                <flowContext.Provider value={state}>
                    <dispatchContext.Provider value={dispatch}>
                        {children}
                    </dispatchContext.Provider>
                </flowContext.Provider>
            )
        },
        useCancelFlow() {
            const dispatch = useContext(dispatchContext);
            return () => dispatch(cancelFlow())
        },
        useStartFlow() {
            const dispatch = useContext(dispatchContext);
            return (flow: Flow) => dispatch(startFlow(flow))
        },
        FlowConduit({flowMapping}) {
            return FlowConduit({flowMapping, flowContext})
        },
    }
}
