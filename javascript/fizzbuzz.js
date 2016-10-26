/* You have an object called 'YouAre' with 3 arrays in it.
They are named, Lucky, Unlucky, and WhoKnows.
Write a function that accepts x as an argument, x is a number.
Iterate from 1 up to and including x, if the value is evenly divisible by 7, add it to Lucky.
If it's evenly divisible by 13, add it to Unlucky.
If it is evenly divisible by both 13 and 7, add it to WhoKnows.
None of the numbers in WhoKnows should be in Lucky or Unlucky.
Return YouAre object. */


function fizzBuzz(x) {
  var YouAre = {
    Lucky : [],
    Unlucky : [],
    WhoKnows : []
  };

  for (var i = 1; i <= x; i++) {
    if (i % 13 === 0 && i % 7 === 0) {
      YouAre.WhoKnows.push(i);
    }
    else if (i % 7 === 0) {
      YouAre.Lucky.push(i);
    }
    else if (i % 13 === 0) {
      YouAre.Unlucky.push(i);
    }
    else {
      continue;
    }
  }
  return YouAre;
}