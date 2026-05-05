export function ClickCounter() {
  let count = 0;

  return {
    getValue() {
      return count;
    },
    increase() {
      count++;
    },
  };
}
