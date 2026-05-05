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

  it("clickCounter를 주입하지 않으면 에러를 던진다.", () => {
    const clickCounter = null;
    const updateEl = document.createElement("span");
    const clickCounterViewCallback = () => {
      ClickCounterView(clickCounter, updateEl);
    };

    expect(clickCounterViewCallback).toThrowError();
  });

  it("updateEl를 주입하지 않으면 에러를 던진다.", () => {
    const clickCounter = ClickCounter();
    const updateEl = null;
    const clickCounterViewCallback = () => {
      ClickCounterView(clickCounter, updateEl);
    };

    expect(clickCounterViewCallback).toThrowError();
  });
});
