function sumIntervals(intervals) {
  let sum = 0,
    i;
  intervals.sort(function (a, b) {
    return a[0] > b[0];
  });
	
  if (intervals.length > 1) {
    for (i = 1; i < intervals.length; i++) {
      if (intervals[i - 1][0] <= intervals[i][0] &&
            intervals[i][0] <= intervals[i - 1][1]) {
        if (intervals[i - 1][1] < intervals[i][1]) {
          intervals[i - 1][1] = intervals[i][1];
        }
        intervals.splice(i, 1);
        i--;
      }
    }
  }
  for (i = 0; i < intervals.length; i++) {
    sum += intervals[i][1] - intervals[i][0];
  }
  return sum;
}


// -Test Cases-
sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); //=> returns 19

/*sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); //=> returns 7
*/
