/**
 * @jest-environment jsdom
 */
import { ClickCounter } from "../../ClickCounter/ClickCounter.js";
import { ClickCounterView } from "../../ClickCounter/ClickCounterView.js";
import { beforeEach, describe, expect, it, jest } from "@jest/globals";

describe("ClickCountView 모듈의", () => {
  let clickCounter;
  let updateEl;
  let view;

  beforeEach(() => {
    clickCounter = ClickCounter();
    updateEl = document.createElement("span");
    view = ClickCounterView(clickCounter, updateEl);
  });

  describe("updateView()는", () => {
    it("ClickCounter의 getValue()값을 화면에 출력한다.", () => {
      const counterValue = clickCounter.getValue();
      view.updateView();
      expect(updateEl.innerHTML).toBe(counterValue.toString());
    });
  });

  describe("increaseAndUpdateView()는", () => {
    it("ClickCounter의 increase를 실행한다.", () => {
      const increaseSpy = jest.spyOn(clickCounter, "increase");

      view.increaseAndUpdateView();

      expect(increaseSpy).toHaveBeenCalledTimes(1);
      increaseSpy.mockRestore();
    });

    it("updateView를 실행한다.", () => {
      const updateViewSpy = jest.spyOn(view, "updateView");

      view.increaseAndUpdateView();

      expect(updateViewSpy).toHaveBeenCalledTimes(1);
      updateViewSpy.mockRestore();
    });
  });

  it("clickCounter를 주입하지 않으면 에러를 던진다.", () => {
    const clickCounter = null;
    const updateEl = document.createElement("span");
    const clickCounterViewCallback = () => {
      ClickCounterView(clickCounter, updateEl);
    };

    expect(clickCounterViewCallback).toThrow();
  });

  it("updateEl를 주입하지 않으면 에러를 던진다.", () => {
    const clickCounter = ClickCounter();
    const updateEl = null;
    const clickCounterViewCallback = () => {
      ClickCounterView(clickCounter, updateEl);
    };

    expect(clickCounterViewCallback).toThrow();
  });
});
