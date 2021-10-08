// FizzBuzz solution
// The criteria for FizzBuzz is to print the numbers 1 to 100. 
// However, you print "Fizz" for every multiple of 3,
// "Buzz" for every multiple of 5,
// and "FizzBuzz" for every multiple of 3 and 5.
$('#fizz').click(function(event) {
    event.preventDefault();
    for (var i = 1; i < 101; i++) {
        if (i % 15 == 0) console.log("FizzBuzz");
        else if (i % 3 == 0) console.log("Fizz");
        else if (i % 5 == 0) console.log("Buzz");
        else console.log(i);
    }
});

// write a function that can check if a given number is even or not
$('#isEvenSubmit').click(function(event) {
    event.preventDefault();
    console.log('click');
    var num = $('#isEvenInput').val().trim();
    if (num % 2 === 0) {
        console.log('Even');
      }
      else {
        console.log('Odd');
      }
});

// search algorithm to find the index of number passed into funtion
function findIndex(arrNum) {
  const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];
  for (let i = 0; i < data.length; i++) {
    if (arrNum === data[i]) {
      console.log(`${arrNum} found at index ${i}`);
    }
  }
};

findIndex(38);

// binary search
const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num, left, right) => {
  let middle = Math.floor((left + right) / 2);

  // range overlapped, so never found number
  if (left > right) {
    return -1;
  }
  else if (num === arr[middle]) {
    return middle;
  }
  else if (num < arr[middle]) {
    // call again with a new right value
    return binarySearch(arr, num, left, middle - 1);
  }
  else {
    // call again with a new left value
    return binarySearch(arr, num, middle + 1, right);
  }
};

// set initial left and right values on first call
console.log(binarySearch(data, 12, 0, data.length - 1));