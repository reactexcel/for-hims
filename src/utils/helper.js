/**Helper Debounce Function which enforces that a function not be
 * called again until a certain amount of time has passed without
 * it being called.
 * @param {function} func - the function which needs to be debounced
 * @param {number} delay - amount of time after which function will be called again
 *  */
export const debounce = (func, delay) => {
  let inDebounce;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};
