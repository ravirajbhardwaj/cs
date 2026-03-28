let starLevels = [["*","*","*",], ["*","*"], ["*"], ["*", "*", "*"]]

function totalStars(starLevels) {
    let count = 0;
    for(i in starLevels){
      for(j in starLevels[i]){
        count++
      }
    }
    return count;
  }

console.log(totalStars(starLevels))