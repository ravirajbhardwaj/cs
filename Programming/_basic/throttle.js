function throttleWithSetTimeout(fn, delay) {
  let shouldWait = false

  return function (...args) {
    if (shouldWait) return

    fn.apply(this, args)
    shouldWait = true

    setTimeout(() => {
      shouldWait = false
    }, delay)
  }
}

function throttle(fn, delay) {
  let lastCall = 0

  return function (...args) {
    let now = Date.now()

    if (now - lastCall < delay) {
      return;
    }
    lastCall = now
    fn.apply(this, args)
  }
}