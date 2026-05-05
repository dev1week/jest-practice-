export function ClickCounter(_data) {
  if (!_data) throw Error();
  const data = _data;

  data.value = data.value || 0;

  return {
    getValue() {
      return data.value;
    },
    increase() {
      data.value++;
    },
  };
}
