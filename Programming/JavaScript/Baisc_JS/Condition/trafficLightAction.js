// You just need to implement the trafficLightAction function
function trafficLightAction(color) {
  // Return "Stop", "Slow Down", or "Go" based on the traffic light color
  switch(color.toLowerCase()) {
    case "red": return "Stop"
    case "yellow": return "Slow Down"
    case "green": return "Go"
    case "blue": return "Invalid Color"
    default:
      return "Other Color"
  }
}

console.log(trafficLightAction("gray"))