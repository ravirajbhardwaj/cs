const num = [1, 2, 3, 4, 5, 6];

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (cb) {
    if (typeof cb !== "function") {
      throw new TypeError(`${typeof cb} ${cb} is not a function`);
    }
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i, this);
    }
  };
}

num.myForEach((val, index, num) => {
  if (num[index] === 2) {
    console.log("Ha I'm ", val);
  } else {
    console.log("No I'm other then 2", val);
  }
});
