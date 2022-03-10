var sum_to_n_a = function(n) {
  // your code here
  let total = 0
  for (let i = 1; i < n+1; i++) {
    total += i
  }
  return total
};

var sum_to_n_b = function(n) {
  // your code here
  let total = 0
  while (n !== 0) {
    total += n
    n --
  }
  return total
};

var sum_to_n_c = function(n) {
  // your code here
  return n*(n+1)/2
};
