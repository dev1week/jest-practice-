export function ClickCounterView(clickCounter, optionEl) {
  if (!clickCounter) {
    throw Error();
  }

  if (!optionEl.updateEl) {
    throw Error();
  }

  // 메서드를 꺼내 호출해도 this 바인딩이 깨지지 않게, 동일 인스턴스를 api로 두고 메서드 간에 참조한다.
  const api = {
    updateView() {
      optionEl.updateEl.innerHTML = String(clickCounter.getValue());
    },
    increaseAndUpdateView() {
      clickCounter.increase();
      api.updateView();
    },
  };

  optionEl.triggerEl.addEventListener("click", () => {
    api.increaseAndUpdateView();
  });

  return api;
}
