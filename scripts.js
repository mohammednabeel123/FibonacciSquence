function generateFibonacci() {
  const limit = document.getElementById("limit").value;
  //console.log(limit);
  const Fibonaccinumbers = document.getElementById("Fibonaccinumbers");
  const sequence = document.getElementById("sequence");

  if (isNaN(limit) || limit <= 0) {
    Fibonaccinumbers.innerHTML = "Please enter a valid number greater than 0.";
    return;
  }

  let first = 0;
  let second = 1;
  let fibSequence = [first, second];

  while (true) {
    let next = first + second;
    if (next > limit) {
      break;
    } else {
      fibSequence.push(next);
      first = second;
      second = next;
    }
    sequence.innerHTML = `Fibonacci Sequence up to ${limit}:<br>${fibSequence.join(
      ","
    )}`;
  }
}
