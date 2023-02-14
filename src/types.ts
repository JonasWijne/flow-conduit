import { ReactElement } from 'react'

export type FlowFunction = (props: unknown) => ReactElement
export type FlowMapping = Record<string, FlowFunction>

export interface Flow {
  name?: string
  payload?: unknown
}

export interface FlowAction {
  type: string
  payload?: Flow
}

export const CANCEL_FLOW = 'CANCEL_FLOW' as const
export const START_FLOW = 'START_FLOW' as const
export const initialState: Flow = {} as const
