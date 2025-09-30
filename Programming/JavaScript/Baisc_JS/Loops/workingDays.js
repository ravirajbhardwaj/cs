function workingDays(days) {
    // your code here
    let notWork = 0;
    for (let i = 0; i < days.length; i++) {
      if (days[i] == "Saturday" && days[i] == "Sunday") {
        notWork += 1;
      }
    }
    return days.length - notWork;
  }
console.log(workingDays(["M", "T", "W", "Saturday", "Sunday", "F", "Sunday", "t"]))