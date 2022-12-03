/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.


***********************************************************************/

// Your code here

let recVolume = height => {
  let count = 1
  let v = height;
  return function volume(num) {
    if (count < 3) {
      v *= num;
      count++;
      if (count >= 3) {
        return v;
      }
      return volume;
    } else {
      return v;
    }
  }
}

let table1 = recVolume(5);
table1(4);
table1(3);
table1(145);

//let table2 = recVolume(3);
//table2(2);
//table2(1)
//table2(76)

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
