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
