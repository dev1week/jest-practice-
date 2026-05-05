import { ClickCounter } from "./ClickCounter.js";
import { ClickCounterView } from "./ClickCounterView.js";
import { beforeEach, describe, expect, it } from "@jest/globals";

describe("ClickCountView", () => {
  let clickCounter;
  let updateEl;
  let view;

  beforeEach(() => {
    clickCounter = ClickCounter();
    updateEl = document.createElement("span");
    view = ClickCounterView(clickCounter, updateEl);
  });

  describe("updateView", () => {
    it("ClickCounter의 getValue()값을 화면에 출력한다.", () => {
      const counterValue = clickCounter.getValue();
      view.updateView();
      expect(updateEl.innerHTML).toBe(counterValue.toString());
    });
  });
});
