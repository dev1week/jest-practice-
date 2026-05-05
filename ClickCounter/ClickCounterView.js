export function ClickCounterView(clickCounter, updateEl) {
  if (!clickCounter) {
    throw Error();
  }

  if (!updateEl) {
    throw Error();
  }

  return {
    updateView() {
      updateEl.innerHTML = String(clickCounter.getValue());
    },
  };
}
