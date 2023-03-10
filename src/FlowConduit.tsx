import React, { Context, ReactElement, useContext } from 'react'
import { Flow, FlowMapping } from './types'

type FlowConduitProps = {
  flowMapping: FlowMapping
  flowContext: Context<Flow>
}

export function FlowConduit({
  flowMapping,
  flowContext,
}: FlowConduitProps): JSX.Element {
  const { name, payload } = useContext(flowContext)

  const actionBarFn = name ? flowMapping[name] : null

  if (!actionBarFn) {
    return <></>
  }

  return actionBarFn(payload)
}
