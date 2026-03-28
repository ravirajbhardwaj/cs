function filterHealthy(foodList) {
  // Remove unhealthy food and return updated list
  let updatedList = foodList.filter((food) => food != "Burger")
  return updatedList;
}

console.log(filterHealthy(["Bannana", "Apple", "Burger", "Apple", "Burger"]))