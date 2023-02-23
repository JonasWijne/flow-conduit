import React from "react";
import {FlowConduitFactory} from "../dist";
import {createRoot} from "react-dom/client";

const {FlowProvider, FlowConduit, useStartFlow} = FlowConduitFactory()


function App() {

    return (
        <FlowProvider>
            <Test/>
        </FlowProvider>
    )
}

function Test() {
    const startFlow = useStartFlow()
    return (
        <>
            <div>hello world</div>
            <FlowConduit flowMapping={
                {
                    "flow_1": () => (<div>flow1</div>),
                }
            }/>

            <button onClick={() => {
                startFlow({name: "flow_1"})
            }}>Start Flow 1
            </button>
        </>
    )

}

const container = document.getElementById("root")

createRoot(container!).render(<App/>)
