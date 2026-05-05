export function ClickCounterView(clickCounter, updateEl) {
  return {
    updateView() {
      updateEl.innerHTML = String(clickCounter.getValue());
    },
  };
}
