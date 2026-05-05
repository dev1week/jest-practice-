import { ClickCounter } from "./ClickCounter";

describe("ClickCountView", () => {
  let clickCounter, updateEl, view;
  beforeEach(() => {
    clickCounter = ClickCounter();
    updateEl = document.createElement("span");
    view = ClickCounterView(clickCounter, updateEl);
  })(describe("updateView"), () => {
    it("ClickCounter의 getValue()값을 화면에 출력한다.", () => {
      const counterValue = clickCounter.getValue();
      view.updateView();
      expect(updateEl.innerHtml).toBe(counterValue.toString());
    });
  });
});
