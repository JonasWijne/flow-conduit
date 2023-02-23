import {describe, expect, expectTypeOf, it} from "vitest";

import {FlowConduitFactory} from "./index";
import {render, screen} from "@testing-library/react";
import React from "react";

const FLOW_1 = "flow_1";
const FLOW_1_BUTTON = "flow_1_Button";

const {FlowProvider, FlowConduit, useStartFlow} = FlowConduitFactory();

const TestComponent = () => {

    const startFlow = useStartFlow();

    return (
        <div>
            <button
                data-testid={FLOW_1_BUTTON}
                onClick={() => startFlow({name: FLOW_1})}>Start Flow 1
            </button>

            <FlowConduit flowMapping={
                {
                    [FLOW_1]: () => (<div data-testid={FLOW_1}>flow1</div>),
                }
            }/>

        </div>
    )
}
const App = () => {
    return (
        <FlowProvider>
            <TestComponent/>
        </FlowProvider>
    )
}

describe("FlowConduitFactory", () => {
    it("should be a function", () => {
        expectTypeOf(FlowConduitFactory).toBeFunction();
    });

    it("should return an object", () => {
        expectTypeOf(FlowConduitFactory()).toBeObject();
    });

    it("should return an object with FlowProvider", () => {
        expectTypeOf(FlowConduitFactory().FlowProvider).toBeFunction();
    });

    it("should return an object with useCancelFlow", () => {
        expectTypeOf(FlowConduitFactory().useCancelFlow).toBeFunction();
    });

    it("should return an object with useStartFlow", () => {
        expectTypeOf(FlowConduitFactory().useStartFlow).toBeFunction();
    });

    it("should return an object with FlowConduit", () => {
        expectTypeOf(FlowConduitFactory().FlowConduit).toBeFunction();
    });

    it.skip("should have FlowProvider", () => { // TODO: Fix this test
        render(
            <App/>
        );

        expect(screen.queryByTestId(FLOW_1)).toBeFalsy();

        const button = screen.getByTestId(FLOW_1_BUTTON);

        expect(button).toBeTruthy();

        button.click();
        expect(screen.queryByTestId(FLOW_1)).toBeTruthy();
    });
});

