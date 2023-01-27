// The snail crawls up the column. During the day it crawls up some distance. During the night she sleeps, so she slides down for some distance (less than crawls up during the day).

// Your function takes three arguments:

// The height of the column (meters)
// The distance that the snail crawls during the day (meters)
// The distance that the snail slides down during the night (meters)
// Calculate number of day when the snail will reach the top of the column.

//parameters = column, day, night all as numbers
//return the number of days for the snail to reach the top
//example: 3 height, 2 distance, 1 night slide = 2 days to get there
//so lets set up a for loop, with total<=height
//but we need to stop if total >= height
//return i


function snail(column, day, night) {
    let total = 1 //because we start on day 1
    let distance = day //because we end on a day not a night
    while(distance < column){
      total++;
      distance += day-night}
    return total
  }