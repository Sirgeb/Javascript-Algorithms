function fizzBuzz(num) {
  for (let x = 1; x <= num; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
      return "Fizz Buzz";
    } else if (x % 3 === 0) {
      return "Fizz";
    } else if (x % 5 === 0) {
      return "Buzz";
    } else {
      return x;
    }
  }
}

fizzBuzz(20);