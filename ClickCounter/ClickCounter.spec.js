import { describe, expect, it } from "@jest/globals";
import { ClickCounter } from "./ClickCounter.js";

describe("ClickCounter", () => {
  describe("getValue()", () => {
    it("초기값이 0인 카운터 값을 반환한다. ", () => {
      const counter = ClickCounter();
      expect(counter.getValue()).toBe(0);
    });
  });

  describe("increase()", () => {
    it("카운터를 1 올린다.", () => {
      const counter = ClickCounter();
      counter.increase();
      expect(counter.getValue()).toBe(1);
    });
  });
});
