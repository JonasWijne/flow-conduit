import {describe, expectTypeOf, it} from "vitest";

import {FlowConduitFactory} from "./index";

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

    it("should return an object with useDispatch", () => {
        expectTypeOf(FlowConduitFactory().useDispatch).toBeFunction();
    });

    it("should return an object with FlowConduit", () => {
        expectTypeOf(FlowConduitFactory().FlowConduit).toBeFunction();
    });
});