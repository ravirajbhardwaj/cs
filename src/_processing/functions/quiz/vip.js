function addVIP(queue, vipGuest) {
  // Add vipGuest at the beginning of queue and return updated queue
  queue.unshift(vipGuest)
  return queue
}

console.log(addVIP(["Ravi", "sahil", "ashi"], "sanket"))