import { beforeEach, describe, expect, it } from "@jest/globals";
import { ClickCounter } from "../../ClickCounter/ClickCounter.js";

describe("ClickCounter", () => {
  let counter;

  beforeEach(() => {
    counter = ClickCounter();
  });

  describe("getValue()", () => {
    it("초기값이 0인 카운터 값을 반환한다. ", () => {
      expect(counter.getValue()).toBe(0);
    });
  });

  describe("increase()", () => {
    it("카운터를 1 올린다.", () => {
      const initValue = counter.getValue();

      counter.increase();

      expect(counter.getValue()).toBe(initValue + 1);
    });
  });
});
